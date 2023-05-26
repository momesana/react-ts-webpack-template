# React TypeScript Template

## TL;DR

1. Check this out and update the project `name` and `version` at the top of the package.json file.
2. run `pnpm i` to install the dependencies
3. run dev server via `pnpm dev`

## Prerequisites

- recent version of Node.js (>= 18)
- recent version of pnpm (>= 8)

### `pnpm`

We use `pnpm` so if you don't have it install it via corepack like so:

```
corepack enable
corepack prepare pnpm@latest --activate
# verify that everything worked
pnpm --version # this should print out the version of the newly installed pnpm
```

## Development

You can start webpack's dev-server via `pnpm dev`.

## Build

Create a production bundle via `pnpm build`. This will be placed under `dist`. You could then for example run it (for testing purposes) using a http server of your choice, e.g:

```bash
python -m http.server -d dist 8081
```

or

```bash
pnpm dlx http-server ./dist -p 8082 --proxy http://localhost:8082?
```

## QA

There are a set of tools/mechanism that help you enforce formatting and coding standards:

- formatter (uses prettier): `pnpm format`
- linter: (uses eslint with typescript enabled) `pnpm lint`
- typechecks: (uses tsc without emitting any code): `pnpm typecheck`
- git hooks (via husky): These are maintained in the `.husky` subfolder and will be installed when you run `pnpm i` or `pnpm prepare`. They are executed each time you commit changes and will run the above tools.
- github workflows (located in `.github/workflows`): these run in the ci/cd pipeline of git and run the above tools and also ensures a few guidelines regarding git, for instance ensuring that the git history remains linear: https://www.bitsnbites.eu/a-tidy-linear-git-history/.
