# Handover: Farz App observation fixes (2026-10-07)

**For:** the frontend developer wiring these changes in, and whoever picks up the backend next.
**Branch state:** uncommitted on `staging`; the `analysis` branch is not merged yet.
**Detail:** [`changes/2026-10-07-observation-fixes.md`](changes/2026-10-07-observation-fixes.md)

## Changes at a glance

- **Moving off AWS (section 9):**
  - Database and contract documents move to Supabase, and hosting moves to Railway.
  - The API base URL will change, and document links will come from `*.supabase.co`.
  - Document lists can now return `url: null`.
  - The backend now uses pnpm.

- **Rate limit raised:** 10 requests/second and 300/minute per IP (was 3 and 100), so busy pages stop hitting `429`s that looked like lost sessions.
- **Client creation no longer fails when the welcome email fails.** The client and login are saved, and the response includes `welcomeEmailSent: true/false`.
- **`POST /api/users` does the same.** A mail failure used to return `400 Failed to create user` after the account was saved. The `201` response now includes `welcomeEmailSent`. When it is `false`, the user exists and should use "Forgot password".
- **Client emails must be unique across all users** (staff, admins and other clients), because creating a client also creates its login. Documented, not changed.
- **Only super admins can set or change roles:**
  - Admins can create STAFF and CLIENT users only.
  - A super admin can't change their own role.
  - CLIENT logins can't be moved in or out of the CLIENT role.
- **`PATCH /api/users/:id` locked down.** This closes an account-takeover path that ran through email changes and password reset.
  - STAFF and CLIENT users can edit only their own name, phone and avatar.
  - Admins can edit themselves and STAFF/CLIENT users.
  - Super admins can edit anyone.
- **Banks are sorted by name A–Z** in `GET /api/banks`.
- **Rates:**
  - `camfRate` can now be saved (it was rejected before).
  - New `managementFeeRate`.
  - New `fees` list for rate-change management fees and other charges.
  - Optional `loanType` (`SHORT_TERM` / `TERM`) on each loan interest rate.
- **Rate list endpoints return every rate field**, not just 8, for the Rate Details view.
- **Database migration:** `20261007120000_add_management_fee_and_fees` adds two nullable columns to `account_rates`.
- **Analysis issues confirmed and documented, not fixed yet:**
  - The types list returns 400 without `?isActive`.
  - Only CAMF runs, and only on one account.
  - A rate must be linked to the account.
  - CAMF now uses `camfRate`. A missing VAT rate is still wrong, and excess can still be `NaN`.
- **Debit interest classified as `LNT` instead of `INT`:** documented, awaiting a decision.
- **Test setup:** jest now resolves `src/...` imports, and 43 new unit tests cover the changes above.

## 1. Client emails must be unique across all users ⚠️

Creating a client (`POST /api/clients`) also creates a login (`User` with role `CLIENT`) using the client's email. So a client email must not match:

- another client's email, **or**
- **any** existing user's email: staff, admin, super admin or another client login.

| Clash | Response |
|---|---|
| Email or company name already used by a client | `409 Client already exists` |
| Email already used by any user | `409 User with this email already exists` |

**Frontend:** before submitting, call `GET /api/users/check-email?email=…` (returns `{ available: boolean }`) and show a clear message if the email is taken. Don't reuse a staff member's email for a client.

The same best-effort email applies to `POST /api/users` (staff and admin accounts). A `201` with `welcomeEmailSent: false` means the user row exists; do not retry the create, or the next response is `409 User already exists`. Tell the new user to use "Forgot password".

The welcome email (login credentials) is now best-effort. The `201` response is the client plus a new field, **`welcomeEmailSent`**:

- **`true`:** credentials were emailed.
- **`false`:** the client and login were created, but the email failed. Show the admin a notice telling the client to use "Forgot password" on the login page with their email. Before this change, the request failed with a 500 even though the client had been saved, and a retry then said "Client already exists".

## 2. Roles

| Action | Who | Otherwise |
|---|---|---|
| `POST /api/users` with `role` `STAFF` or `CLIENT` (or no role → `STAFF`) | ADMIN, SUPER_ADMIN | `403` for other roles (endpoint is admin-only) |
| `POST /api/users` with `role` `ADMIN` or `SUPER_ADMIN` | SUPER_ADMIN only | `403 Only a super admin can create admin or super admin users` |
| `PATCH /api/users/:id` with `role` | SUPER_ADMIN only | `403 Only a super admin can change user roles` |
| …on their own account | nobody | `403 You cannot change your own role` |
| …moving a user into or out of `CLIENT` | nobody | `400 Client logins are managed from the client record…` |
Editing users with `PATCH /api/users/:id` is also restricted now. Before, any logged-in user could change another user's email and take over the account through "forgot password".

| Caller | Can edit | Fields |
|---|---|---|
| STAFF, CLIENT | own account only | `firstName`, `lastName`, `phone`, `avatarUrl` (anything else: `403 You cannot change your own …`) |
| ADMIN | own account, STAFF and CLIENT users | any field except `role` |
| SUPER_ADMIN | anyone | any field; `role` as in the table above |

Editing someone you're not allowed to edit returns `403 You can only edit your own profile` or `403 Only a super admin can edit admin accounts`.

**Frontend:**
- Show role controls only to super admins, and leave out their own row and `CLIENT` users.
- Show "edit user" on other users only to admins, and on admin accounts only to super admins.
- On a staff user's own profile, make email and username read-only. There are no custom roles: the only roles are `SUPER_ADMIN`, `ADMIN`, `STAFF` and `CLIENT`, so the Role Management page should assign one of these rather than "create" roles.

## 3. Banks

`GET /api/banks` now returns banks sorted by name A–Z. Bank accounts and rates already include `bank.name`, so show the name rather than `bank.code`.

## 4. Rates

New optional fields on `POST /api/rates` and `PATCH /api/rates/:id`:

| Field | Type | Notes |
|---|---|---|
| `camfRate` | number | CAMF rate per ₦1,000 of debit turnover. Before this change, sending it caused a 400 |
| `managementFeeRate` | number | Standalone management fee |
| `fees` | array | `{ name: string (required), rate?: number, amount?: number, effectiveFrom?: date, effectiveTo?: date }`, for rate-change management fees and other charges |
| `loanInterestRates[].loanType` | `"SHORT_TERM"` \| `"TERM"` | Optional, on each loan interest period |

`GET /api/rates`, `GET /api/rates/client/:clientId` and `GET /api/rates/client/:clientId/bank/:bankId` now return **every** rate field, not just id, code, type, currency and dates. Use them for the Rate Details view.

Things to know:

- **Currency isn't limited by the API.** It accepts any three-letter ISO code (`USD`, `EUR`, `GBP`, …), so the NGN-only dropdown can be widened. Note that the CAMF analysis assumes naira.
- **Rate lists are required on create.** On `POST /api/rates`, the six rate-period lists (`drRates`, `loanInterestRates`, `lcCommissions`, `preNegotiationRates`, `postNegotiationRates`, `creditInterestRates`) are required, because they are missing `@IsOptional`. Send `[]` for any you don't use. This is unchanged and may be worth relaxing later.
- **Uploads are unchanged.** Contract document uploads haven't been investigated yet.

## 5. Rate limit

The limits are now 10 requests per second and 300 per minute per IP (previously 3 and 100). A `429` means the limit was hit; it is not a session failure, so don't send the user to the login page on a `429`.

## 6. Analysis: known issues, not fixed yet

Until these are fixed, the frontend can work around most of them:

1. **Types list:** `GET /api/analysis/types` returns `400` unless you pass `?isActive=true` (or `false`). Always send it.
2. **CAMF only:** only `CAMF` runs. Other types return `404 Unsupported analysis type`, so disable them in the UI.
3. **Link a rate first:** the account must have a rate linked first (`PATCH /api/bank-accounts/rate/:accountId/assign/:rateId`), otherwise `404 Missing rate config`.
4. **One account:** only the first selected account is analysed, so select one account per run.
5. **Remaining figure bugs:** CAMF now uses `camfRate` (per ₦1,000 of debit turnover), and `1` only when that field is null. A missing VAT rate still gives 0.075% instead of 7.5%, and `excess` can be `NaN` when that CAMF date has no VAT line. Don't present those two as final yet.

## 7. Waiting on a decision

**Debit interest is classified as `LNT` (loan interest), not `INT` (report item #13).** This is how the code is designed, not a typo. `INT` is set up as interest *earned* (a deposit). Overdraft and debit interest are deliberately sent to `LNT` by the seed keywords and a classifier rule. Fixing it means deciding whether to split interest into debit and credit classes (needs a migration) or to repoint the keywords. Nothing has changed yet.

## 8. Deploy

1. `pnpm prisma migrate deploy`. This adds the `fees` and `managementFeeRate` columns to `account_rates` (nullable, no backfill).
2. Before merging `analysis`: its document migration (`20251211072749_add_bankid_to_document`) adds a NOT NULL column with no default and will fail on a database that already has documents. Rewrite it as add nullable → backfill → set NOT NULL.
3. Check that `JWT_EXPIRES_IN` and `REFRESH_JWT_EXPIRES_IN` are set in production. Short values are the likeliest cause of the next-day logouts.

## 9. Infrastructure move: Supabase and Railway (off AWS)

The API is leaving AWS and Neon:

| | Before | After |
|---|---|---|
| Database | Neon | Supabase Postgres |
| Contract documents | S3 | A private Supabase Storage bucket |
| Hosting | Elastic Beanstalk | Railway |

There are separate staging and production environments. Detail and the full runbook: [`changes/2026-10-07-supabase-railway-migration.md`](changes/2026-10-07-supabase-railway-migration.md).

### For the frontend

- **The API base URL will change** to the Railway domain, or to `https://server.adegoroyefadareandco.org` once its record points at Railway. Update the API URL env on each Vercel project when the backend says it's live.
- **Document links come from `*.supabase.co`** (`/storage/v1/object/sign/...`) instead of S3. They still expire after 1 hour. If you whitelist the S3 domain anywhere (a CSP, an image or iframe allow-list), add Supabase.
- **Document lists can return `url: null`** when a file is missing from storage. Before, the whole request failed. Show "file unavailable" instead of a broken link. Single-document endpoints still return an error in that case.
- **Never put `SUPABASE_SERVICE_ROLE_KEY` in a Vercel env.** The frontend doesn't need any Supabase key; all storage goes through the API.

### Package manager: pnpm

The backend now uses **pnpm** (`packageManager: pnpm@12.5.1`). `package-lock.json` is gone and `pnpm-lock.yaml` is the lockfile.

- **Install scripts:** `pnpm-workspace.yaml` allows the install scripts that pnpm blocks by default: `bcrypt`, `argon2`, `@swc/core`, Prisma, and `@nestjs/core`. Without that, the native modules and the Prisma engines don't build. Checked locally: everything installs, and `bcrypt` and `argon2` load.
- **Railway config:** `railway.json` builds with `pnpm prisma generate && pnpm run build`, runs `pnpm prisma migrate deploy` before each release, and starts with `pnpm run start:prod`.
- **On the first deploy, check the pre-deploy log** to confirm the `prisma` CLI is available (it's a devDependency). If it isn't, move `prisma` to `dependencies`.
- **Stale npm references:** the CHANGELOG, the migration change note and `CLAUDE.md` still give npm commands (`npm ci`, `npx prisma …`). They need a pnpm pass.

### Staging Supabase setup: review results (2026-10-07)

Each item was checked against the live project. No secret values were printed.

| Check | Result |
|---|---|
| `DATABASE_URL` / `DIRECT_URL` | ✅ Session pooler, port 5432. Same project as `SUPABASE_URL`. Prisma connects. |
| Region | ⚠️ London (`eu-west-2`), not Frankfurt as the plan assumed. That's fine. Put Railway in EU West to stay close. |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ The `service_role` key (legacy JWT), the correct type. |
| Bucket `rate-documents` | ✅ Private. Limit 11,534,336 bytes (11 MB, above the API's 10 MB upload limit). No file-type restriction. |
| Migrations | ⏳ None applied yet. All 13 pending, as expected for a new database. Next: `pnpm prisma migrate deploy`, then `pnpm prisma db seed`. |
| App startup | ⏳ Not tested yet. Run `pnpm run start:dev` once the items below are fixed. |

**Still to fix in the local `.env`:**

1. `APP_URL` is empty. It's the frontend URL used in the password-reset link and in the welcome email's login link (`src/mail/mail.service.ts`). Without it, those links break.
2. There's an empty duplicate `DATABASE_URL=` line near the top. The later, filled-in one wins, but delete the empty one to avoid confusion.
3. Line 10 still contains the old Neon password in a comment. Delete it, and rotate that password in Neon. It's also in the git history of `.env.sample`.
4. Line 52 is a stray 15-character line with no `=`, likely the database password pasted on its own. Delete it.

### Still to do (backend)

1. Set up the production Supabase project the same way: bucket, keys, migrations, seed.
2. Railway:
   - Create the project with `staging` (deploys from the `staging` branch) and `production` (deploys from `main`).
   - Set the variables per environment. The list is in the change note.
   - Add the Railway domains to `src/config/allowed-origins.config.ts`.
3. Run the staging smoke test (checklist in the change note), then production.
4. Decommission the Beanstalk environment, the S3 bucket and the IAM keys. Then rotate the Neon password and delete the Neon project.

## Not in this round

- Contract document upload failures (#10): deferred.
- `POST /api/users` has the same welcome-email problem the client endpoint had. A failed email after the user is saved returns `400 Failed to create user`, and a retry then says "User already exists". This is the likely cause of the "mary kay" error in the report (#4).
- Refresh tokens stay one per user, by decision. Logging in on a second device signs the first one out at its next refresh.
- `PATCH /api/users/deactivate/:id`, `activate/:id` and `DELETE /api/users/:id` are admin-only but still let an ADMIN act on a SUPER_ADMIN.
