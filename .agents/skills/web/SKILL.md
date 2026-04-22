```markdown
# web Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches best practices and conventions for developing TypeScript applications using the Next.js framework, as observed in the `web` repository. You'll learn how to structure files, manage imports and exports, and write tests in alignment with the project's established patterns.

## Coding Conventions

### File Naming
- Use **kebab-case** for all file and directory names.
  - **Example:**  
    ```
    user-profile.tsx
    api-utils.ts
    components/header-bar/
    ```

### Import Style
- Use **alias imports** rather than relative paths.
  - **Example:**  
    ```typescript
    import { fetchUser } from '@utils/api-utils';
    import { HeaderBar } from '@components/header-bar';
    ```

### Export Style
- Prefer **named exports** over default exports.
  - **Example:**  
    ```typescript
    // Good
    export const fetchUser = () => { ... };

    // Bad
    export default fetchUser;
    ```

### Commit Patterns
- Commit messages are **freeform** and may include prefixes, with an average length of 66 characters.

## Workflows

### Adding a New Component
**Trigger:** When you need to add a new UI component.
**Command:** `/add-component`

1. Create a new directory in `components/` using kebab-case.
2. Add your component file (e.g., `user-card.tsx`) with named exports.
3. Use alias imports for any dependencies.
4. Write a corresponding test file (e.g., `user-card.test.tsx`).

### Creating a Utility Module
**Trigger:** When you need to add reusable logic or helpers.
**Command:** `/add-utility`

1. Create a new file in the `utils/` directory using kebab-case (e.g., `api-utils.ts`).
2. Export functions using named exports.
3. Import utilities using aliases elsewhere in the codebase.

### Writing Tests
**Trigger:** When you add or update code that requires testing.
**Command:** `/write-test`

1. Create a test file alongside the code file, using the pattern `*.test.*` (e.g., `api-utils.test.ts`).
2. Follow the project's testing framework conventions (framework is currently unknown).
3. Use named imports in your test files.

## Testing Patterns

- **Test File Pattern:** Name test files with the `*.test.*` convention (e.g., `user-card.test.tsx`).
- **Location:** Place test files alongside the modules they test.
- **Framework:** The specific testing framework is not detected, but standard TypeScript/Next.js test practices apply.

**Example:**
```typescript
// components/user-card.test.tsx
import { render } from '@testing-library/react';
import { UserCard } from './user-card';

test('renders user name', () => {
  // test implementation
});
```

## Commands
| Command         | Purpose                                 |
|-----------------|-----------------------------------------|
| /add-component  | Scaffold a new UI component             |
| /add-utility    | Create a new utility module             |
| /write-test     | Add a test file for a module/component  |
```
