# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Working rules (read first)

### 1. Never touch git
**Do not commit, push, pull, merge, rebase, stash, checkout, reset, tag, or create branches/PRs.** The user handles all git operations themselves. This overrides any skill or workflow (including superpowers skills such as `finishing-a-development-branch`, `using-git-worktrees`, or any step that says "commit"). When a skill step calls for a commit, skip it and tell the user what is ready to commit instead.

Read-only git commands (`git status`, `git diff`, `git log`, `git show`, `git blame`) are fine.

### 2. Always use superpowers skills
Check for and invoke the relevant `superpowers:*` skill **before** acting — including before exploring code or asking clarifying questions. Typical mapping:

| Situation | Skill |
|---|---|
| New feature / behaviour change / design work | `superpowers:brainstorming` → `superpowers:writing-plans` |
| Executing a written plan | `superpowers:executing-plans` or `superpowers:subagent-driven-development` |
| Any bug, failing test, wrong number | `superpowers:systematic-debugging` |
| Writing implementation code | `superpowers:test-driven-development` |
| Independent parallel tasks | `superpowers:dispatching-parallel-agents` |
| Before claiming anything is done/fixed | `superpowers:verification-before-completion` |
| After a meaningful change | `superpowers:requesting-code-review` |
| Handling review feedback | `superpowers:receiving-code-review` |

Announce the skill being used and follow it. The git rule above takes precedence over any skill step.

### 3. Record every change in `docs/`
All change documentation lives in the `docs/` folder at the repo root (create it if missing). Every change that alters code, schema, config, or behaviour must be logged **in the same task**, before claiming the work is done:

- **`docs/CHANGELOG.md`**: one running log, newest first. Add each entry under a dated heading (`## YYYY-MM-DD`) and group items as **Added / Changed / Fixed / Removed / Security**. Each item says what changed, why, and which files or endpoints it touches. Flag breaking API changes (response shape, required fields, removed routes) and new Prisma migrations explicitly, because the Vercel frontends and the deploy depend on them.
- **`docs/changes/YYYY-MM-DD-<short-slug>.md`**: a detailed note for any non-trivial change (new feature, bug fix to the transaction pipeline or analysis, schema migration, auth/security change). It covers the problem, the approach taken, the affected modules, migration or deploy steps, and how it was verified. Link it from the CHANGELOG entry.

Specs and plans produced by superpowers skills also go under `docs/` (for example `docs/plans/`), not elsewhere.

## Commands

```bash
pnpm install
pnpm run start:dev          # watch mode, http://localhost:3000, Swagger at /api/doc
pnpm run build              # nest build → dist/ (prod entry: dist/src/main.js)
pnpm run lint               # eslint --fix over src/test
pnpm run format             # prettier

pnpm test                                   # unit tests (jest, rootDir=src, *.spec.ts)
pnpm exec jest src/transaction/services/classifier   # single folder/file
pnpm exec jest -t "name of test"                 # single test by name
pnpm run test:e2e                           # test/*.e2e-spec.ts
pnpm exec tsc --noEmit                           # type-check

pnpm exec prisma migrate dev --name <change>     # create + apply a migration
pnpm exec prisma generate                        # regenerate client after schema edits
pnpm exec prisma db seed                         # runs prisma/seed.ts
```

Package manager is **pnpm** (version pinned in `package.json` `packageManager`; run `corepack enable` once). Dependencies whose install scripts may run are listed under `allowBuilds` in `pnpm-workspace.yaml`. Add a new native/postinstall dependency there, or `pnpm install` fails with `ERR_PNPM_IGNORED_BUILDS`.

Env vars: copy `.env.sample` → `.env` (Supabase Postgres `DATABASE_URL` + `DIRECT_URL` (session pooler), JWT + refresh JWT secrets, SMTP, `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_STORAGE_BUCKET`, `APP_URL`).

Known test state: specs are mostly Nest scaffolds; `jwt-auth.guard.spec.ts` and `roles.guard.spec.ts` don't compile (constructors need `Reflector`). No real coverage for the classifier or analysis.

## What this is

**FaRS (Financial Reconciliation Software)** — NestJS 11 + Prisma 6 + PostgreSQL backend for an audit firm that recovers **bank overcharges** for Nigerian corporate clients. It records each client's negotiated bank rates, ingests bank statements (CSV), classifies every line, recomputes what the bank *should* have charged, and the difference is the client's claim.

Domain terms: **CAMF** (account maintenance fee, rate per ₦1,000 of debit turnover), **COT** (commission on turnover), **VC/VF** (VAT on CAMF / on fees), **ET vs IT** (external vs internal/own-account transfer — only ET + CW count toward CAMF turnover), **Reversal** (debit undone by a matching credit; excluded from fee bases). `prisma/seed.ts` is the best reference for classification codes, patterns and reversal keywords.

Deployed on Railway (`railway.json`: staging env ← `staging` branch, production env ← `main`; pre-deploy runs `prisma migrate deploy`); frontends on Vercel (CORS allow-list in `src/config/allowed-origins.config.ts`).

## Architecture

Request pipeline (set up in `src/main.ts`, `src/app.module.ts`, `src/auth/auth.module.ts`):
`CORS → /api prefix (except / and /health) → ValidationPipe (whitelist + forbidNonWhitelisted, so every DTO field needs a class-validator decorator) → ThrottlerGuard (3/s, 100/min) → global JwtAuthGuard (opt out with @Public()) → RolesGuard (only enforced where @Roles() is applied)`. Errors are normalised by `src/all-exceptions.filter.ts`.

Each feature is a standard Nest module folder (`controller / service / dto / entities`). All DB access goes through `DatabaseService` (`src/database`), which *is* the PrismaClient.

Module groups:
- **Identity:** `auth` (passport local / jwt / refresh-jwt; reset codes via `token` + `mail`), `user`.
- **Master data:** `bank` → `client` (creating a client also creates a CLIENT-role `User` in one transaction and emails credentials) → `bank-account` (hub entity; links to a rate, which must belong to the same bank) → `staff-assignment`.
- **Contract:** `rate` (`AccountRate` per client × bank: scalar rates + time-bounded JSON rate lists; contract documents in a private Supabase Storage bucket via `rate.storage.service.ts`, served as signed URLs (lists return `url: null` for missing files); DTO→model mapping in `rate.transformer.ts`) and `rate-comment`.
- **Rules (editable data, no deploy):** `classification` (codes, cached at `onModuleInit`), `classification-pattern` (keyword/regex → code, global or per bank), `reversal-keyword`.
- **Engine — `transaction`:** two-phase. `POST /transactions/:accountId/upload` runs the pipeline and returns a **preview only**; `POST /transactions/:accountId/create` persists the reviewed rows. Pipeline services in `src/transaction/services/`, run in order:
  1. parse CSV (required headers: `No, TransDate, ValueDate, TransDesc, Debit, Credit, Balance, Teller No, Cheque No`)
  2. `cleaner` — normalise dates/amounts, derive type, rebuild balances from an inferred opening balance
  3. `reconstructor` — pair reversals (same amount, opposite type, ≤30 days, and matching reference / reversal keyword / >75% similar description), reorder credit after debit
  4. `classifier` — reversals → REV; else first matching pattern (regex/substring/fuzzy) with overrides (CAMF+"vat on"→VC, etc.); fallback credit→CD, debit→ET/IT via `fuzzy-matcher`
  5. `validator` — recompute running balance in the new order
- **Payoff — `analysis`:** `POST /analysis/perform` dispatches to a strategy in `src/analysis/strategies/`. Only **CAMF** (`camf.strategy.ts`) exists; other analysis types are declared but unimplemented.

## Local notes

`currentstate.md` (git-ignored, may not exist) is the user's detailed review note: module reference, end-to-end lifecycle, and a numbered list of known security/correctness bugs (e.g. classifier IT/ET bug, per-request state on singleton classifier, CAMF using `debitRate` instead of `camfRate`). Read it before working on auth, the transaction pipeline, or analysis.
