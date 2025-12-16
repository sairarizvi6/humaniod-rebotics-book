# Tasks: Generate Docusaurus Book

**Input**: Design documents from `/specs/001-generate-docusaurus-book/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Organization**: Tasks are grouped by phase. Since there is only one user story, the majority of the work is in that phase.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize the Node.js project and Docusaurus scaffolding.

- [x] T001 Create the output directory for the book at `./book/`.
- [x] T002 Initialize a Node.js project inside the `./book/` directory.
- [x] T003 [P] Install Docusaurus dependencies (`@docusaurus/core`, `@docusaurus/preset-classic`, `react`, `react-dom`) inside the `./book/` directory.
- [x] T004 Run the Docusaurus classic template initialization inside the `./book/` directory.
- [x] T005 [P] Create the directory for our generator script at `./scripts/`.

---

## Phase 2: Foundational (Script Setup)

**Purpose**: Create the basic structure of the generator script.

- [x] T006 Create the generator script file at `scripts/generate-book.js`.
- [x] T007 Implement command-line argument parsing in `scripts/generate-book.js` to handle an `--input` file path.

---

## Phase 3: User Story 1 - Generate Book Structure (Priority: P1) 🎯 MVP

**Goal**: Implement the core logic to transform a single markdown file into a structured Docusaurus book.

**Independent Test**: The script can be run with a sample input file. Success is a valid, buildable Docusaurus site in the `book/` directory that reflects the input file's structure.

### Implementation for User Story 1

- [x] T008 [US1] Implement file reading logic in `scripts/generate-book.js` to load content from the `--input` path.
- [x] T009 [US1] Implement markdown parsing logic in `scripts/generate-book.js` to build an in-memory tree of the book structure based on headings.
- [x] T010 [US1] Implement file cleanup logic in `scripts/generate-book.js` to delete any existing content in `book/docs/` before generation.
- [x] T011 [US1] Implement file writing logic in `scripts/generate-book.js` to create `.md` files for each parsed page in the `book/docs/` directory.
- [x] T012 [US1] Implement category generation logic in `scripts/generate-book.js` to create `_category_.json` files for sidebar navigation in the appropriate `book/docs/` subdirectories.
- [ ] T013 [US1] Implement sidebar configuration logic in `scripts/generate-book.js` to dynamically generate the `book/sidebars.js` file.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improve the robustness and usability of the generation script.

- [ ] T014 Add comprehensive error handling (e.g., input file not found, unreadable content) to `scripts/generate-book.js`.
- [ ] T015 [P] Add progress logging (e.g., "Reading file...", "Generating 12 pages...") to `scripts/generate-book.js`.
- [ ] T016 [P] Create a `README.md` in the `scripts/` directory explaining the purpose and usage of the `generate-book.js` script.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must be completed first.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Story 1 (Phase 3)**: Depends on Foundational completion.
- **Polish (Phase 4)**: Depends on User Story 1 completion.

### Implementation Strategy

The strategy is to build the core functionality first (Phases 1-3) to achieve the MVP, which is the successful generation of a book from a well-structured file. The final phase adds the necessary robustness and documentation to make the script user-friendly.
