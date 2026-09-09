<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guidelines & Agent Instructions

## 1. Package Manager & Tooling
- **Package Manager**: **`bun`** (Strictly use `bun` instead of `npm`, `pnpm`, or `yarn`)
- **Runtime / Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons & Animation**: `lucide-react`, `framer-motion` / `motion`

---

## 2. Essential Commands
Always use `bun` for running commands and managing packages:

- **Install dependencies**: `bun install`
- **Add dependency**: `bun add <package-name>`
- **Add dev dependency**: `bun add -d <package-name>`
- **Remove dependency**: `bun remove <package-name>`
- **Start dev server**: `bun dev`
- **Build application**: `bun run build`
- **Run linting**: `bun run lint`
- **Run one-off binaries/executables**: `bunx <command>`

---

## 3. Strict Rules & Constraints
- ❌ **DO NOT** use `npm`, `npx`, `pnpm`, or `yarn`.
- ❌ **DO NOT** create or update `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`.
- ❌ **DO NOT** modify the `<!-- BEGIN:nextjs-agent-rules -->` section.
- Always verify changes with `bun run lint` and `bun run build` before completing tasks.


