# Move off AWS: Supabase (database + storage) and Railway (hosting)

- **Date:** 2026-10-07
- **Spec:** [`../specs/2026-10-07-supabase-railway-migration-design.md`](../specs/2026-10-07-supabase-railway-migration-design.md)
- **Plan:** [`../plans/2026-10-07-supabase-railway-migration.md`](../plans/2026-10-07-supabase-railway-migration.md)
- **Status:** Code complete. Provisioning and rollout (below) are pending.

## Problem

The API ran on three providers:
- Neon for Postgres.
- AWS S3 for rate contract documents, through `RateS3Service` and `@aws-sdk/*`.
- AWS Elastic Beanstalk for hosting, through `Procfile` and `.ebextensions/`.

The firm is moving off AWS completely, and is consolidating the database and file storage on Supabase.

Supabase can't host the NestJS server. Its Edge Functions are Deno, short-lived functions. Vercel, where the frontends live, was also rejected: its functions cap request bodies at about 4.5 MB, which would break the 10 MB rate-document uploads. Railway was chosen because it runs a long-lived Node process, has built-in staging and production environments, and deploys by branch.

## Approach

- **Database:**
  - Supabase Postgres, one project per environment, in `eu-central-1`.
  - The app connects through the **session pooler**. The direct connection is IPv6-only and Railway egress is IPv4.
  - `prisma/schema.prisma` gains `directUrl = env("DIRECT_URL")`, so `DATABASE_URL` can later move to the transaction pooler without breaking migrations.
  - No schema change and no data migration. Each new database is built with `prisma migrate deploy` and `prisma db seed`.
- **Storage:**
  - `RateS3Service` is replaced by `RateStorageService` (`@supabase/supabase-js`, service role key, server-only), with identical method signatures.
  - Bucket `rate-documents` is private, with a 10 MB limit.
  - Uploads use `upsert: true`, because document updates re-upload to the same key. S3 overwrote silently, but Supabase rejects an overwrite without upsert.
  - Uploads also set `cacheControl: 0`. Otherwise the CDN can keep serving the replaced file for up to an hour after an update.
  - Signed URLs last 3600 s, as before.
  - `package.json` pins `engines.node: ">=22"`, which `@supabase/supabase-js` requires. Railway uses it to select the Node version.
  - The service throws at boot if any `SUPABASE_*` var is missing.
  - Storage SDK errors become `500 File storage operation failed`.
- **Document lists:**
  - S3 signed URLs locally and never failed. Supabase checks the object exists, so one missing file would fail a whole list.
  - The four document-list methods in `RateService` now use `signedUrlOrNull`, which returns `url: null` for that document and logs a warning.
  - Single-document endpoints still fail with a 500 error when the file is missing.
- **Hosting:**
  - `railway.json` sets the build (`npx prisma generate && npm run build`), the pre-deploy step (`npx prisma migrate deploy`), the start command (`npm run start:prod`), the `/health` health check and restart on failure.
  - A failed migration aborts the deploy, and the previous release keeps serving.
  - The Beanstalk files, the `deploy` script and the Beanstalk CORS origin are removed.

## Affected modules

| File | Change |
|---|---|
| `src/rate/config/storage.config.ts` | New: Supabase storage config (`supabase-storage`) |
| `src/rate/rate.storage.service.ts` (+ `.spec.ts`) | New: upload, sign and delete on Supabase Storage |
| `src/rate/rate.s3.service.ts`, `src/rate/config/s3.config.ts` | Deleted |
| `src/rate/rate.module.ts` | Registers the storage config and provider |
| `src/rate/rate.service.ts` (+ `.spec.ts`) | Injects `RateStorageService`; lists tolerate unsignable objects |
| `src/rate-comment/rate-comment.service.ts` | Removed the unused `NotFound` import from `@aws-sdk/client-s3` |
| `package.json`, `package-lock.json` | `+@supabase/supabase-js`; `-@aws-sdk/client-s3`, `-@aws-sdk/s3-request-presigner`; `deploy` script removed; `engines.node >=22` |
| `prisma/schema.prisma` | `directUrl` |
| `.env.sample` | Supabase vars; AWS vars and the leaked Neon credential removed |
| `railway.json` | New |
| `Procfile`, `.ebextensions/` | Deleted |
| `src/config/allowed-origins.config.ts` | Beanstalk origin removed. Railway domains are added during rollout (Step 5). |

## Deploy / runbook

### Step 1: Create the Supabase projects (user)

Create `fars-staging` and `fars-production`, both in region `eu-central-1` (Frankfurt). For each project, record:
- Project URL (`https://<ref>.supabase.co`)
- service role key
- session pooler connection string (`postgresql://postgres.<ref>:<password>@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`)

### Step 2: Create the bucket by SQL (in each project's SQL editor)

```sql
insert into storage.buckets (id, name, public, file_size_limit)
values ('rate-documents', 'rate-documents', false, 10485760);

select id, public, file_size_limit, allowed_mime_types
from storage.buckets where id = 'rate-documents';
```

Expected: one row with `public = false`, `file_size_limit = 10485760` and `allowed_mime_types = null`. Use the exact byte value. A "10 MB" limit typed in the dashboard may be decimal and reject files that multer accepts.

### Step 3: Create the Railway project

1. Create a new project from the GitHub repo, with region EU West.
2. Rename the default environment to `production` and set its branch to `main`.
3. Add an environment `staging` with branch `staging`.
4. In each environment, set these variables:

```
DATABASE_URL=<that env's session pooler string>
DIRECT_URL=<same string>
SUPABASE_URL=<that env's project URL>
SUPABASE_SERVICE_ROLE_KEY=<that env's service role key>
SUPABASE_STORAGE_BUCKET=rate-documents
JWT_SECRET, JWT_EXPIRES_IN, REFRESH_JWT_SECRET, REFRESH_JWT_EXPIRES_IN,
MAIL_SERVICE, MAIL_HOST, MAIL_PORT, MAIL_NAME, MAIL_USER, MAIL_PASS, MAIL_FROM,
GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL, APP_URL  (copy from the current Beanstalk env, per environment)
```

5. Generate a Railway domain for each environment.

### Step 4: First staging deploy and seed

1. Commit and push to `staging`. Railway deploys the staging environment. In the deploy logs, check:
   - **Pre-deploy:** `prisma migrate deploy` lists the migrations up to `20261007120000_add_management_fee_and_fees` and prints `All migrations have been successfully applied.`
   - **If the pre-deploy log shows `npx` installing `prisma`, or `prisma: not found`** (devDependencies were pruned), move `prisma` from `devDependencies` to `dependencies` at the same version (`^6.7.0`) and redeploy.
   - **Health check:** `/health` passes.
2. Seed once from a local machine:

```bash
DATABASE_URL='<staging session pooler>' DIRECT_URL='<staging session pooler>' npx prisma db seed
```

### Step 5: Add the Railway origins to CORS (code)

Add the two Railway domains to `src/config/allowed-origins.config.ts` after the Vercel entries. They are there for Swagger at `/api/doc`.

```ts
  'https://<service>-staging.up.railway.app',
  'https://<service>-production.up.railway.app',
```

### Step 6: Staging smoke test

1. Point the staging Vercel frontends' API base URL at the Railway staging domain.
2. Confirm that `SUPABASE_SERVICE_ROLE_KEY` appears in no Vercel project env.
3. Run each check below.

### Step 7: Production

1. Merge `staging` into `main`. Railway deploys production, and the pre-deploy migration and health check pass.
2. Seed production: the Step 4 command with the production strings.
3. In Railway, add the custom domain `server.adegoroyefadareandco.org` to the production service. Then update its record at the current DNS provider to the target Railway shows. The DNS provider itself doesn't change.
4. Point the production Vercel frontends' API base URL at `https://server.adegoroyefadareandco.org`, or at the Railway production domain.
5. Repeat the Step 6 smoke checks against production, leaving out the variable-unset check.

### Step 8: Decommission (after production is confirmed)

1. Terminate the Elastic Beanstalk environment and application.
2. Empty and delete the S3 bucket named by the old `AWS_S3_BUCKET_NAME`.
3. Delete the IAM access key and user used by the API.
4. In Neon, rotate the `neondb_owner` password (it is in git history), then delete the Neon project.
5. Record the completion date here.

## Verification

### Local (2026-10-07)

- `npx jest src/rate/rate.storage.service.spec.ts`: 13/13 pass. The spec was watched failing first with `Cannot find module`.
- `npx jest src/rate/rate.service.spec.ts -t "document lists"`: watched failing (the rejection propagated), then passing after `signedUrlOrNull`.
- `npx jest src/rate/rate.service.spec.ts src/rate/rate.storage.service.spec.ts src/rate/rate.transformer.spec.ts`: 23/23 pass.
- `npx tsc --noEmit`: only the two known pre-existing errors (`jwt-auth.guard.spec.ts`, `roles.guard.spec.ts`).
- `npm test`: 13 suites pass. 29 fail, and every one is a pre-existing Nest scaffold spec (unresolved `DatabaseService` and other DI providers, AppController "Hello World!", the two guard specs). None involve storage.
- `env DATABASE_URL=… DIRECT_URL=… npx prisma validate`: valid. `npx prisma generate`: OK.
- `npx prisma generate && npm run build`: succeeds and creates `dist/src/main.js`.
- Final review (fresh reviewer) found no critical issues. Two fixes followed, each watched failing first:
  - `cacheControl: "0"` on upload. The upload test failed, then passed.
  - `engines.node >=22`. The check failed, then passed.
- After the fixes, the suite is unchanged from the baseline: 13 suites pass and the same 29 scaffold suites fail.

### Staging smoke test (fill in)

- [ ] Bucket query returns `public=false`, `file_size_limit=10485760`
- [ ] Pre-deploy migration applied all migrations; `prisma` CLI present
- [ ] `GET /health` returns `OK`
- [ ] Login
- [ ] Create bank, client (credentials email arrives), bank account
- [ ] Create rate
- [ ] Upload a rate document (`POST /api/rates/document`); its `url` is a `*.supabase.co/storage/v1/object/sign/...` link and opens
- [ ] Update the document with a different PDF (`PATCH /api/rates/document/:id`); the new file is served (upsert)
- [ ] Delete the document; the object is gone from the bucket
- [ ] CSV upload preview (`POST /api/transactions/:accountId/upload`), then create
- [ ] `POST /api/analysis/perform` (CAMF) returns a result
- [ ] With `SUPABASE_URL` unset, the deploy fails its health check and the previous release keeps serving (then restore)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is in no Vercel env

### Production smoke test (fill in)

- [ ] Same checks as staging, except the variable-unset check
- [ ] Decommission completed on: ____
