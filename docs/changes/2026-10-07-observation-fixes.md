# 2026-10-07 — Fixes from the Farz App observation report

Source: `(2026-01-08) Farz App Observation.md` (QA walkthrough of the app). This note covers the backend items agreed for this round. Frontend-only items are out of scope. Uploads (#10) and the `analysis` branch merge are deferred.

## Summary

| Report item | Change | Status |
|---|---|---|
| #6/#9/#11 Re-login | Rate limit raised from 3/s and 100/min to 10/s and 300/min per IP | Done. Single refresh token kept by decision; JWT expiry env handled separately |
| #2 Can't add client | Welcome-email failure no longer fails client creation | Done. Unique-email rule documented in [`../handover.md`](../handover.md) |
| #3 Role management | Only super admins can set or change roles; `PATCH /users/:id` locked down (account-takeover fix) | Done |
| #5/#8 Banks | `GET /banks` sorted by name A–Z | Done. Bank accounts already return bank names, so nothing changed there |
| #10 Rate management | `camfRate` accepted; new `managementFeeRate`, `fees`, loan type; list endpoints return every rate field | Done. **Migration.** Uploads deferred |
| #12 Analysis | Rechecked and confirmed, not fixed | See "Analysis findings" |
| #13 Debit interest → LNT | Documented, not changed | Awaiting a decision |

## Changes

### Rate limit (`src/app.module.ts`)
- **Problem:** 3 requests/s and 100/min per IP. The whole office shares one public IP, so a page firing parallel requests gets 429s, which can look like a lost session.
- **Change:** `short` 3 → 10 per second; `long` 100 → 300 per minute.

### Client creation (`src/client/client.service.ts`)
- **Problem:** the welcome email was sent after the client and its login were committed. If SMTP failed, the request returned 500 even though both records existed, so a retry then failed with "Client already exists".
- **Change:** the email send is wrapped in try/catch. A failure is logged as a warning (client id only, so no email address in the logs) and the request still returns 201. The response is the client plus **`welcomeEmailSent: boolean`** (additive field), so the admin can be told when the credentials email didn't go out and the client should use "forgot password".
- **Not changed:** a client's email must not match *any* existing user, because creating a client also creates a `CLIENT` login with that email. Documented for the frontend in the handover.

### Role rules and user editing (`src/user/user.service.ts`, `src/user/user.controller.ts`)
- **Problem:**
  - `PATCH /users/:id` had no role restriction and accepted `role`, so any logged-in user could change any user's role, including their own (privilege escalation).
  - The same endpoint let any logged-in user (including a CLIENT login) change **another** user's `email`. The public forgot-password flow sends the reset code to the stored email, so anyone could take over a super admin account: change its email, request a reset, set a new password. It also let anyone flip `isActive` or `permissions` on any user, getting around the admin-only `activate/:id` route. This was found in code review of this change.
  - `POST /users` let admins create other admins and super admins.
- **Change:**
  - `POST /users` (still ADMIN / SUPER_ADMIN only): an admin may create `STAFF` or `CLIENT` (or omit `role`, which defaults to STAFF). `ADMIN` or `SUPER_ADMIN` requires a super admin; otherwise **403**.
  - `PATCH /users/:id` with `role`:
    - Only a super admin may send it; otherwise **403**.
    - A super admin cannot change their own role (**403**), so the last super admin can't lock themselves out.
    - Moving a user into or out of `CLIENT` returns **400**, because client logins belong to a `Client` record.
    - Sending the user's current role is a no-op.
  - `PATCH /users/:id`, who may edit whom (**403** otherwise):
    - STAFF and CLIENT users: only their **own** account, and only `firstName`, `lastName`, `phone`, `avatarUrl`. Changing their own `email`, `username`, `isActive` or `permissions` returns 403.
    - ADMIN: their own account, plus STAFF and CLIENT users (any field except `role`).
    - SUPER_ADMIN: anyone.
  - A missing target returns **404**.
- **Implementation:** the controller passes `req.user` to the service, and all checks live in `assertCanUpdate` / the start of `create`. They run before the service's try/catch, so they aren't swallowed into the generic "Failed to …" 400. The caller's role comes from the database on every request (`JwtStrategy` → `validateJwtUser`), so a demotion takes effect immediately.
- **Not changed:** `PATCH /users/deactivate/:id`, `activate/:id` and `DELETE /users/:id` are admin-only but still let an ADMIN act on a SUPER_ADMIN (pre-existing). Comparisons use the auth `Role` for the caller and Prisma's `UserRole` for stored and requested roles. The repo has three role types; that hygiene issue is untouched.

### Bank ordering (`src/bank/bank.service.ts`)
- `findAll` now uses `orderBy: { name: 'asc' }`.

### Rate fields (`prisma/schema.prisma`, `src/rate/dto/create-rate.dto.ts`, `src/rate/rate.transformer.ts`, `src/rate/rate.service.ts`)
- **Problem:**
  - `camfRate` existed in the database but not on the DTO, so the global `forbidNonWhitelisted` pipe rejected it with a 400, and the transformer would have dropped it anyway.
  - There were no fields for management fees or rate-change and other fees, and no way to mark a loan interest rate as short-term or term.
  - The list endpoints returned only 8 fields.
- **Change:**
  - `camfRate` is accepted on create and update.
  - New `managementFeeRate` (number, optional).
  - New `fees` (optional array). Each entry is `{ name (required), rate?, amount?, effectiveFrom?, effectiveTo? }`.
  - `loanInterestRates[].loanType` (optional): `SHORT_TERM` or `TERM`. It lives inside the existing JSON column, so it needs no migration.
  - `GET /rates`, `GET /rates/client/:clientId` and `GET /rates/client/:clientId/bank/:bankId` now return every rate field. Relations are unchanged: `client` and `bank` on the first, `bank` on the second. This is additive and not a breaking change.
- **Migration:** `prisma/migrations/20261007120000_add_management_fee_and_fees` adds two nullable columns (`fees JSONB`, `managementFeeRate DOUBLE PRECISION`) to `account_rates`. The SQL was generated with `prisma migrate diff` against the committed schema. No data backfill is needed.

### Test setup (`package.json`)
- **Problem:** jest had no mapping for the `src/...` absolute imports used across the codebase, so no spec that imports a service could load (33 of 40 suites failed before this work).
- **Change:** added `moduleNameMapper: { "^src/(.*)$": "<rootDir>/$1" }`. The remaining failing suites are Nest scaffolds that don't register `DatabaseService`; they were already failing and are untouched.

## Analysis findings (#12), confirmed, not fixed

Reproduced with a throwaway script against `@nestjs/common` 11.2.7.

1. `GET /analysis/types` without `?isActive` returns **400** ("Validation failed (boolean string is expected)"), because `ParseBoolPipe` is not `{ optional: true }` (`src/analysis/analysis.controller.ts:39`).
2. Only `CAMF` is implemented. `COT`, `LOAN_INTEREST`, `LC` and `WHT` return 404 "Unsupported analysis type".
3. The account must have a rate linked via `PATCH /bank-accounts/rate/:accountId/assign/:rateId`; otherwise 404 "Missing rate config".
4. Only `bankAccounts[0]` is analysed (`camf.strategy.ts:15`).
5. CAMF uses `rate.debitRate`, not `camfRate`, and falls back to `1` (`camf.strategy.ts:48`). Now that `camfRate` can be saved, the strategy should read it.
6. A missing VAT rate defaults to `0.075` and is then divided by 100, so VAT on ₦1,000 comes out as ₦0.75 instead of ₦75 (`camf.strategy.ts:49`). The DTO's Swagger example (`vatRate: 0.05`) also suggests a fraction while the strategy expects a percentage, so the unit needs agreeing.
7. `excess` is `NaN` when no VAT (VC) line falls on the CAMF date.

## Debit interest classification (#13), documented, not changed

`INT` is seeded as a *deposit* class ("interest earned"). The seed maps overdraft and overdrawn interest keywords to `LNT`, and the classifier also rewrites any `INT` match mentioning overdrawn or overdraft to `LNT` (`classifier.service.ts:183-195`). Debit interest therefore lands in `LNT` by design. Changing it needs a decision: either split interest into debit and credit classes (a migration, because classification codes are a Postgres enum) or repoint the debit-interest keywords. That means a seed change, and the classifier override has to change too.

## Deploy steps

1. `npx prisma migrate deploy` (applies `20261007120000_add_management_fee_and_fees`).
2. When `analysis` is merged into `staging`: its migration `20251211072749_add_bankid_to_document` sorts before this one and still needs the 3-step rewrite (add nullable → backfill → NOT NULL) noted in `currentstate.md` (A1). `rate.service.ts` will conflict only at the `findByBankId` → `findByClientAndBank` rename; keep the select removal from this change.
3. Run `npx prisma generate` locally after switching branches. The local generated client was stale (built from `analysis`, with `Document.bankId` required), which surfaced as a type error in `rate.service.ts` until regenerated.

## Verification

- New specs (43 tests), each new behaviour watched failing before the fix:
  - `src/bank/bank.service.spec.ts` (1)
  - `src/client/client.service.spec.ts` (3)
  - `src/user/user.service.spec.ts` (30)
  - `src/rate/rate.transformer.spec.ts` (6)
  - `src/rate/rate.service.spec.ts` (3)

  The `rate.service` RED was re-checked by temporarily restoring the original file: 3 failed. Two role tests ("same role is a no-op" and "404 for a missing target") were added after review as coverage of behaviour that already worked, so they passed on first run.
- Code review (separate reviewer subagent) found the account-takeover path above. It has been fixed, along with `welcomeEmailSent`, no email address in the log, and the extra tests. Suggestion declined for now: requiring `fees` entries to carry a `rate` or `amount` (fee shape accepted as is).
- `npx jest`: 50 passed, 27 failed. Every failure is a pre-existing scaffold DI error ("Nest can't resolve dependencies … DatabaseService"); none is in the changed specs.
- `npx tsc --noEmit`: only the two known errors in `jwt-auth.guard.spec.ts` and `roles.guard.spec.ts`.
- `npm run build`: passes.
- ESLint on changed files, ignoring CRLF line endings: only the codebase's existing `any` patterns remain (`error.code`, `JSON.parse` in the transformer, `data: any` in the user service).
