# Research: Generate Docusaurus Book

**Date**: 2025-12-15
**Feature**: [Generate Docusaurus Book from Project Description](./spec.md)

## Decision: Input Mechanism for Generation Script

The book generation script will accept the path to the input content file as a command-line argument.

**Example Usage**:
```bash
node scripts/generate-book.js --input ./my-book-content.md
```

## Rationale

- **Simplicity & Standardization**: Using command-line arguments is a standard, well-understood pattern for CLI tools and scripts. It's easy for users to learn and for other tools to call.
- **Flexibility**: It allows the user to specify any content file from any location without modifying the script itself.
- **Automation-Friendly**: This approach is easily integrated into larger build scripts or CI/CD pipelines.

## Alternatives Considered

| Alternative | Reason for Rejection |
| :--- | :--- |
| **Read from `stdin`** | While powerful for piping commands, it's cumbersome for users who are simply pointing to a large, existing file. It also complicates error handling for file I/O. |
| **Hardcoded File Path** | This is highly inflexible and would require the user to edit the script to change the input file, which is a poor user experience. |
| **Configuration File** | Requiring a separate configuration file (e.g., `generator.config.json`) to specify the input path adds unnecessary complexity for a single-parameter script. |
