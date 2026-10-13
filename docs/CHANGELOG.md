# Changelog

All notable changes to the FaRS API are recorded here, newest first. Detailed notes for larger changes live in [`changes/`](changes/).

Categories: **Added / Changed / Fixed / Removed / Security**. Breaking API changes and Prisma migrations are flagged explicitly.

## 2026-10-13 — Clearer error logs, CORS rejection as 403, Swagger DTO name clash

Details: [`changes/2026-10-13-railway-log-errors.md`](changes/2026-10-13-railway-log-errors.md). **No Prisma migration. No response-body change.**

### Fixed
- `AllExceptionsFilter` logged every `HttpException` as `[object Object]`. It now logs `METHOD URL STATUS detail`, with 4xx at warn level and 5xx at error level. (`src/all-exceptions.filter.ts`)
- A disallowed CORS origin produced a 500 with a stack trace and no origin in the log. It's now a 403 whose message names the origin. Browsers block it either way. (`src/config/corsOptions.ts`)- Swagger's "Duplicate DTO detected: FileUploadDto" warning. The transaction upload DTO is renamed to `TransactionFileUploadDto`. (`src/transaction/dto/upload-transaction.dto.ts`, `src/transaction/transaction.controller.ts`)

### Added
- CORS origin `https://fars-api-server-production.up.railway.app`, so Swagger at `/api/doc` on the Railway production domain can make `POST`/`PUT`/`PATCH`/`DELETE` calls. This is runbook Step 5; the staging domain is still to add. (`src/config/allowed-origins.config.ts`)
- Specs: `src/all-exceptions.filter.spec.ts`, `src/config/corsOptions.spec.ts`.

## 2026-10-07 — Switch package manager from npm to pnpm

Details: [`changes/2026-10-07-npm-to-pnpm.md`](changes/2026-10-07-npm-to-pnpm.md).

> **Breaking for deploy and local dev:** `package-lock.json` is gone. Install with `pnpm install` (run `corepack enable` once first). Railway now builds and starts with pnpm. **No Prisma migration, no API change.**

### Added
- `pnpm-lock.yaml`, imported from `package-lock.json` with the same resolved versions.
- `pnpm-workspace.yaml` with an `allowBuilds` list. It allows install scripts for argon2, bcrypt, @swc/core, Prisma and @nestjs/core, and blocks the @scarf/scarf telemetry script.
- `"packageManager": "pnpm@12.5.1"` in `package.json`.
- `body-parser` (^2.2.0) and `@types/body-parser` as declared dependencies. `src/main.ts` already imported `body-parser`, but it only resolved through npm hoisting, so pnpm's strict layout broke the build.

### Changed
- `railway.json`: the build, pre-deploy (`prisma migrate deploy`) and start commands now use pnpm.
- `CLAUDE.md`, `README.md`, `docs/handover.md`: commands now use pnpm.

### Removed
- `package-lock.json`.

## 2026-10-07 — Move off AWS: Supabase (DB + storage) and Railway (hosting)

Details and runbook: [`changes/2026-10-07-supabase-railway-migration.md`](changes/2026-10-07-supabase-railway-migration.md). Spec: [`specs/2026-10-07-supabase-railway-migration-design.md`](specs/2026-10-07-supabase-railway-migration-design.md). Plan: [`plans/2026-10-07-supabase-railway-migration.md`](plans/2026-10-07-supabase-railway-migration.md).

> **Breaking for deploy:**
> - New env vars `DIRECT_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` and `SUPABASE_STORAGE_BUCKET`. The app refuses to boot without the `SUPABASE_*` ones.
> - `DATABASE_URL` now points at Supabase.
> - The `AWS_*` vars are removed.
> - The API moves from Elastic Beanstalk to Railway, so the frontends' API base URL changes.
>
> **No Prisma migration added.** New databases are built with `prisma migrate deploy` and `prisma db seed`. Railway runs `migrate deploy` before every release.
>
> **Response change:** `GET` document-list endpoints can now return `url: null` for a document whose file is missing from storage, instead of failing the whole request. The frontend should handle a null `url`.

### Added
- `RateStorageService` on Supabase Storage. It uses a private `rate-documents` bucket and signed URLs (3600 s), and uploads with upsert and `cacheControl: 0` so a replaced document is never served stale from the CDN. (`src/rate/rate.storage.service.ts`, `src/rate/config/storage.config.ts`)
- `railway.json`: build, pre-deploy `prisma migrate deploy`, start, and `/health` health check.
- `directUrl = env("DIRECT_URL")` in the Prisma datasource. (`prisma/schema.prisma`)
- `engines.node: ">=22"` in `package.json`. `@supabase/supabase-js` requires Node 22+, and Railway picks its runtime from this field.
- Unit specs for `RateStorageService` and for document-list URL signing.

### Changed
- Rate document lists sign each URL independently and return `url: null` for any file that cannot be signed. (`src/rate/rate.service.ts`)
- `.env.sample` lists the Supabase vars.

### Removed
- `RateS3Service`, `s3.config.ts`, `@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`, the stray `NotFound` AWS import in `rate-comment.service.ts`.
- `Procfile`, `.ebextensions/`, the `deploy` npm script, and the Beanstalk CORS origin. (`src/config/allowed-origins.config.ts`)

### Security
- Removed a real Neon credential from `.env.sample`. It remains in git history: rotate it, then delete the Neon project.
- The Supabase service role key is server-only and must not be set in any Vercel env.

## 2026-10-07 — Farz App observation fixes

Details: [`changes/2026-10-07-observation-fixes.md`](changes/2026-10-07-observation-fixes.md). Frontend handover: [`handover.md`](handover.md).

> **Prisma migration:** `20261007120000_add_management_fee_and_fees` adds nullable `fees` (JSONB) and `managementFeeRate` (double) to `account_rates`. Run `npx prisma migrate deploy`.
>
> **Behaviour change:** `PATCH /api/users/:id` is now restricted:
> - STAFF and CLIENT users can edit only their own name, phone and avatar.
> - Admins can edit themselves and STAFF/CLIENT users.
> - Only super admins can edit admins or change roles.
>
> `POST /api/users` with `ADMIN` or `SUPER_ADMIN` requires a super admin. The frontend must hide these controls accordingly.

### Added
- Rates: `camfRate` is accepted on create and update. It was previously rejected with a 400 by the whitelist pipe and dropped by the transformer. (`src/rate/dto/create-rate.dto.ts`, `src/rate/rate.transformer.ts`)
- Rates: new `managementFeeRate`, new `fees` list (`{ name, rate?, amount?, effectiveFrom?, effectiveTo? }`), and optional `loanType` (`SHORT_TERM` | `TERM`) on each `loanInterestRates` entry. **Migration** above. (`prisma/schema.prisma`)
- Real unit specs for `BankService`, `ClientService`, `UserService` role rules, `RateService` list endpoints and the rate DTO/transformer, replacing Nest scaffolds.
- `docs/handover.md` for the frontend: client email uniqueness, role rules, new rate fields, analysis workarounds.

### Changed
- `GET /api/banks` returns banks sorted by name A–Z. (`src/bank/bank.service.ts`)
- `GET /api/rates`, `/api/rates/client/:clientId` and `/api/rates/client/:clientId/bank/:bankId` return every rate field instead of 8. This is additive and the response shape is otherwise unchanged. (`src/rate/rate.service.ts`)
- Rate limit raised from 3/s and 100/min to 10/s and 300/min per IP. (`src/app.module.ts`)
- Jest maps `src/...` absolute imports (`moduleNameMapper` in `package.json`), so specs that import services can load.

### Fixed
- `POST /api/clients` no longer fails when the welcome email can't be sent. The client and its login were already saved, so a retry used to fail with "Client already exists". The failure is logged, and the response carries a new additive field, `welcomeEmailSent: boolean`. (`src/client/client.service.ts`, `src/client/dto/create-client-response.dto.ts`)

### Security
- Only a super admin can set or change user roles. A super admin can't change their own role, and `CLIENT` logins can't be moved in or out of the `CLIENT` role through `PATCH /api/users/:id`. Before this, any logged-in user could make themselves `SUPER_ADMIN`.
- Closed an account-takeover path. Any logged-in user could change another user's email (for example a super admin's) via `PATCH /api/users/:id` and then reset that account's password through the public forgot-password flow. They could also flip `isActive` or `permissions` on anyone. Editing other users now requires an admin, admin accounts require a super admin, and non-admins can change only their own name, phone and avatar. (`src/user/user.service.ts`, `src/user/user.controller.ts`)

## 2026-10-07 — Project setup

### Added
- `CLAUDE.md` with the project's working rules (no git operations by Claude, superpowers skills first, change documentation in `docs/`), commands, and an architecture overview.
- `docs/` folder with this changelog and `docs/changes/` for detailed change notes.
