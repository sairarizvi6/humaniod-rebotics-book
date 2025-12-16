const fs = require('fs');
const path = require('path');

/**
 * This script generates a Docusaurus book from a single markdown file.
 */

function getArg(argName) {
  const arg = process.argv.find(a => a.startsWith(`--${argName}=`));
  if (!arg) return null;
  return arg.split('=')[1];
}

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

function main() {
  console.log('Book generator script initialized.');
  const inputFile = getArg('input');

  if (!inputFile) {
    console.error('Error: Please provide an input file path using --input=<path-to-file>');
    process.exit(1);
  }

  console.log(`Input file: ${inputFile}`);

  if (!fs.existsSync(inputFile)) {
    console.error(`Error: Input file not found at ${inputFile}`);
    process.exit(1);
  }

  const content = fs.readFileSync(inputFile, 'utf-8');
  console.log(`Successfully read ${content.length} characters from the input file.`);

  const book = { title: 'My Book', chapters: [] };
  const lines = content.split('\n');
  let currentChapter = null;
  let currentSubChapter = null;

  lines.forEach(line => {
    const h1Match = line.match(/^#\s+(.*)/);
    const h2Match = line.match(/^##\s+(.*)/);

    if (h1Match) {
      const title = h1Match[1];
      currentChapter = { title, content: [line], children: [], slug: slugify(title) };
      book.chapters.push(currentChapter);
      currentSubChapter = null;
    } else if (h2Match && currentChapter) {
      const title = h2Match[1];
      currentSubChapter = { title, content: [line], children: [], slug: slugify(title) };
      currentChapter.children.push(currentSubChapter);
    } else if (currentSubChapter) {
      currentSubChapter.content.push(line);
    } else if (currentChapter) {
      currentChapter.content.push(line);
    }
  });

  console.log(`Parsed book structure: ${book.chapters.length} chapters.`);

  const docsDir = path.join('book', 'docs');
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
    console.log(`Cleaned docs directory: ${docsDir}`);
  }
  fs.mkdirSync(docsDir, { recursive: true });

  book.chapters.forEach(chapter => {
    if (chapter.children.length > 0) {
      const chapterDir = path.join(docsDir, chapter.slug);
      fs.mkdirSync(chapterDir, { recursive: true });

      const categoryFile = path.join(chapterDir, '_category_.json');
      const categoryJson = {
        label: chapter.title,
        position: book.chapters.indexOf(chapter) + 1,
      };
      fs.writeFileSync(categoryFile, JSON.stringify(categoryJson, null, 2));

      chapter.children.forEach(subChapter => {
        const subChapterPath = path.join(chapterDir, `${subChapter.slug}.md`);
        fs.writeFileSync(subChapterPath, subChapter.content.join('\n'));
      });
    } else {
      const chapterPath = path.join(docsDir, `${chapter.slug}.md`);
      fs.writeFileSync(chapterPath, chapter.content.join('\n'));
    }
  });

  console.log('Finished writing book content to docs directory.');

  // Generate sidebars.js
  const sidebarItems = book.chapters.map(chapter => {
    if (chapter.children.length > 0) {
      return {
        type: 'category',
        label: chapter.title,
        items: chapter.children.map(subChapter => subChapter.slug),
      };
    } else {
      return chapter.slug;
    }
  });

  const sidebarsContent = `/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    ${sidebarItems.map(item => JSON.stringify(item, null, 2)).join(',\n    ')}
  ],
};

module.exports = sidebars;`;

  fs.writeFileSync(path.join('book', 'sidebars.js'), sidebarsContent);
  console.log('Generated sidebars.js');
}

main();
