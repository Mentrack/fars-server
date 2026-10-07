# Switch package manager from npm to pnpm

**Date:** 2026-10-07
**Type:** Tooling / deploy config. No application code, API, or schema change.

## Problem

The project used npm (`package-lock.json`). We are moving to pnpm.

## Approach

1. **Lockfile.** We generated `pnpm-lock.yaml` with `pnpm import` from the existing `package-lock.json`, so every dependency keeps the exact version npm had resolved. Then we deleted `package-lock.json`.
2. **Pinned pnpm.** `package.json` now has `"packageManager": "pnpm@12.5.1"`. Corepack and Railway's Railpack use this field to pick the pnpm version.
3. **Build-script allow-list.** pnpm does not run dependency install scripts by default. `pnpm-workspace.yaml` → `allowBuilds` lists the packages that are allowed to run theirs:
   - `argon2`, `bcrypt`, `@swc/core` (native bindings)
   - `prisma`, `@prisma/client`, `@prisma/engines`
   - `@nestjs/core`

   `@scarf/scarf` is set to `false` on purpose. swagger-ui-dist pulls it in, and its script only sends install telemetry. If a new dependency needs its install script, add it here. Otherwise `pnpm install` fails with `ERR_PNPM_IGNORED_BUILDS`.
4. **Phantom dependency fixed.** `src/main.ts` imports `body-parser`, but `package.json` never declared it. It only worked because npm hoisted Express's copy into the top level of `node_modules`. pnpm's stricter layout does not, so type-check and build failed. We added `body-parser@^2.2.0` (the same version npm was hoisting) and `@types/body-parser@^1.19.6`. The `express` imports are type-only and resolve through the declared `@types/express`, so they needed no change.
5. **Railway.** `railway.json` now runs `pnpm prisma generate && pnpm run build` to build, `pnpm prisma migrate deploy` before deploy, and `pnpm run start:prod` to start.
6. **Docs.** Commands are updated in `CLAUDE.md`, `README.md` and `docs/handover.md`.

## Affected files

`package.json`, `pnpm-lock.yaml` (new), `pnpm-workspace.yaml` (new), `package-lock.json` (removed), `railway.json`, `CLAUDE.md`, `README.md`, `docs/handover.md`.

## Migration / deploy steps

- **Developers:**
  1. Run `corepack enable` once.
  2. Delete `node_modules`.
  3. Run `pnpm install`.
  4. Use `pnpm run …` and `pnpm exec …` instead of `npm run …` and `npx …`.
- **Railway:**
  - Railpack detects pnpm from `pnpm-lock.yaml` and `packageManager`. No dashboard change should be needed, unless a service has a custom install/build command set in the dashboard that overrides `railway.json`. Check this.
  - Watch the first staging build to confirm that Railpack provisions pnpm 12.5.1 on the selected Node version (`engines.node: ">=22"`).
- No Prisma migration and no env var change.

## Verification

We compared a clean `pnpm install --frozen-lockfile` against a pristine npm copy of `HEAD` (`npm ci`):

| Check | npm (`HEAD`) | pnpm |
|---|---|---|
| `tsc --noEmit` | 2 known errors in `jwt-auth.guard.spec.ts` / `roles.guard.spec.ts` | Same 2 errors. Before the `body-parser` fix, pnpm also failed on `main.ts`. |
| `nest build` | ok | ok, produces `dist/src/main.js` |
| `jest` | 29 suites / 27 tests fail, 64 pass (existing scaffold specs) | Identical |
| ESLint | thousands of existing errors, mostly Prettier formatting | Same, pre-existing |
| Native modules (`argon2`, `bcrypt`) load | — | ok |
| Every external `require()` in `dist/` resolves | — | ok |

We did not boot the app locally, because `.env` points at the real Supabase database. The first Railway staging deploy, with its `/health` check, is the end-to-end check.
