# Data Model: Docusaurus Book Generator

**Date**: 2025-12-15
**Feature**: [Generate Docusaurus Book from Project Description](./spec.md)

## Overview

This feature is primarily a content transformation process and does not involve a persistent data model (e.g., a database). The "data model" refers to the transient data structures used by the generation script to process the input content and create the Docusaurus site structure.

## Logical Entities

### 1. Book

- **Description**: Represents the entire collection of content being processed. It is the root of the content hierarchy.
- **Attributes**:
    - `title`: (string) The main title of the book, likely derived from the site configuration or the first H1 heading.
    - `chapters`: (array of `Page` objects) An ordered list of the top-level pages/chapters in the book.
- **Relationships**: Has many `Pages`.

### 2. Page

- **Description**: Represents a single output markdown file in the Docusaurus `docs` directory. A page can be a top-level chapter or a nested sub-page.
- **Attributes**:
    - `title`: (string) The title of the page, derived from its primary heading.
    - `content`: (string) The markdown content of the page.
    - `path`: (string) The destination file path relative to the `docs` directory.
    - `order`: (integer) The sequence number of the page within its parent list.
    - `children`: (array of `Page` objects) An ordered list of sub-pages.
- **Relationships**: Can have many `Pages` (children) and belongs to one `Page` (parent) or the `Book`.

## Data Flow

1.  The input markdown file is read by the generation script.
2.  The script parses the content and builds an in-memory tree of `Page` objects, representing the book's hierarchy.
3.  The script traverses this tree and writes each `Page` object to a corresponding markdown file on the filesystem.
4.  The script also generates `_category_.json` files based on the parent-child relationships in the tree to create the Docusaurus sidebar.
5.  Once the script finishes, these in-memory objects are discarded.
