# Design: Move FaRS API off AWS (Supabase + Railway)

- **Date:** 2026-10-07
- **Status:** Approved in conversation, awaiting written-spec review
- **Scope:** Database, file storage and API hosting. DNS is out of scope.

## 1. Goal

Move the FaRS API completely off AWS and Neon:

| Concern | Today | After |
|---|---|---|
| Database | Neon Postgres (`DATABASE_URL`) | Supabase Postgres, one project per environment |
| File storage | AWS S3 (`RateS3Service`, `@aws-sdk/*`) | Supabase Storage, a private bucket per project |
| API hosting | AWS Elastic Beanstalk (`Procfile`, `.ebextensions/`) | Railway, one project with `staging` and `production` environments |
| Email | SMTP (not AWS) | Unchanged |

**Success criteria**

- No AWS SDK packages, AWS env vars or Beanstalk files remain in the repo.
- Staging and production each run on Railway against their own Supabase project.
- The HTTP API is unchanged for the Vercel frontends. Only the base URL changes. `document.url` is still a signed link that expires after 3600 s.
- A deploy applies pending Prisma migrations before the new release goes live.

## 2. Decisions and constraints

| Decision | Reason |
|---|---|
| **Fresh start.** No data is migrated from Neon or S3. | User decision. New databases are built with `prisma migrate deploy` and `prisma db seed`. |
| **Two environments:** staging and production, each with its own Supabase project. | Matches the `staging` and `main` branches. Staging can never touch production data. |
| **Host on Railway**, not Vercel. | Vercel functions cap request bodies at about 4.5 MB, which would break the 10 MB document uploads. Railway runs a long-lived Node process, has built-in environments and deploys by branch. |
| **Storage through `@supabase/supabase-js`**, not the S3-compatible endpoint. | Signed URLs (`createSignedUrl`) are the documented path. It also lets us remove the AWS SDK entirely. |
| **Database through Supabase's session pooler.** | The direct connection is IPv6-only, and Railway egress is IPv4. A session pooler suits a long-running server and works with Prisma Migrate. |
| **Same region:** Supabase `eu-central-1` (Frankfurt) and Railway EU West. | Keeps database and storage round trips short. |
| **DNS stays where it is.** | User decision. The existing API hostname (`server.adegoroyefadareandco.org`) is pointed at Railway by editing its record at the current DNS provider. |

## 3. Design

### 3.1 Database

- `prisma/schema.prisma` datasource:
  ```prisma
  datasource db {
    provider  = "postgresql"
    url       = env("DATABASE_URL")
    directUrl = env("DIRECT_URL")
  }
  ```
- `DATABASE_URL` holds the Supabase session pooler string: `postgresql://postgres.<ref>:<pwd>@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`.
- `DIRECT_URL` holds the same session-pooler string. It exists so that `DATABASE_URL` can later move to the transaction pooler (port 6543, `?pgbouncer=true`) without breaking migrations.
- No model changes and no new migration. The pending `20261007120000_add_management_fee_and_fees` migration is applied as part of the fresh build.

### 3.2 Storage

- **Rename:** `src/rate/rate.s3.service.ts` becomes `src/rate/rate.storage.service.ts`, and the class `RateS3Service` becomes `RateStorageService`. The public methods keep their current signatures:
  - `uploadFile(file, key): Promise<string>` uploads `<key>.<mimetype subtype>` and returns that object key. The extension rule is unchanged.
  - `getFileUrl(key): Promise<string>` returns a signed URL that expires after 3600 s.
  - `deleteFile(key): Promise<void>`
- **Implementation:** a `SupabaseClient` is created once in the constructor from `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`. The service role key is server-only and bypasses storage RLS.
  - Upload: `storage.from(bucket).upload(key, file.buffer, { contentType: file.mimetype, upsert: true })`.
  - `upsert: true` is required. `updateRateDocument` re-uploads to the same key, which S3 overwrote silently but Supabase rejects without upsert.
  - Signed URL: `createSignedUrl(key, 3600)`.
  - Delete: `remove([key])`.
- **Config:** `src/rate/config/s3.config.ts` is replaced by `src/rate/config/storage.config.ts`, registered as `supabase-storage` with `url`, `serviceRoleKey` and `bucketName`.
- **Callers:** `rate.module.ts` and `rate.service.ts` change only their imports and the injected name. Business logic is untouched.
- **Bucket:** `rate-documents`, private, created in each Supabase project.
  - File size limit: 10 MB, matching the multer limit.
  - No MIME allow-list. The API accepts any type today, and adding one would be a behaviour change.
- **Cleanup:**
  - Remove `@aws-sdk/client-s3` and `@aws-sdk/s3-request-presigner`.
  - Remove the unused `import { NotFound } from '@aws-sdk/client-s3'` in `src/rate-comment/rate-comment.service.ts`.

### 3.3 Hosting (Railway)

- **New `railway.json` at the repo root:**
  - Builder: Railpack/Nixpacks (Node is auto-detected).
  - Build command: `npm ci && npx prisma generate && npm run build`.
  - Pre-deploy command: `npx prisma migrate deploy`. If it fails, the deploy is aborted and the previous release keeps serving.
  - Start command: `npm run start:prod` (`node dist/src/main.js`).
  - Health check path: `/health`, which already exists and is excluded from the `/api` prefix.
  - Restart policy: on failure.
- **Port:** the app already listens on `process.env.PORT`, so nothing changes.
- **Environments:** one Railway project with environments `staging` (deploys from the `staging` branch) and `production` (deploys from `main`).
- **Remove:** `Procfile`, `.ebextensions/`, and the `deploy` npm script, which is a Beanstalk-style `ci + build + start` script.
- **CORS** (`src/config/allowed-origins.config.ts`):
  - Remove `http://fars-api-env.eba-rfmzrjse.eu-west-2.elasticbeanstalk.com`.
  - Add the Railway staging and production domains (`https://<service>-<env>.up.railway.app`) once they are known.
  - Keep `server.adegoroyefadareandco.org`.

### 3.4 Config and secrets

**`.env.sample`:**

- Remove the `AWS_*` block.
- Remove the Neon comments, including the leaked `DATABASE_URL_UNPOOLED` credential.
- Add the following:

```
DATABASE_URL=
DIRECT_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=rate-documents
```

- Every other variable carries over unchanged: JWT, refresh JWT, mail, Google, `APP_URL`.
- Each Railway environment gets its own values in Railway variables. Nothing secret is committed.

**Security actions:**

- Rotate the Neon password leaked in `.env.sample` git history, then delete the Neon project.
- After production is verified on Railway, delete the AWS IAM access keys, the S3 bucket and the Beanstalk environment.

### 3.5 Error handling

- Missing `file` or `key` inputs keep the existing `BadRequestException` messages.
- An error from the Supabase SDK (`{ error }` returned) is logged and rethrown as `InternalServerErrorException('File storage operation failed')`. The global exception filter normalises it.
- The service fails fast at boot if `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` or `SUPABASE_STORAGE_BUCKET` is missing. This catches a misconfigured environment in Railway's health check instead of on the first upload.

## 4. Testing

- **Unit tests (TDD), `src/rate/rate.storage.service.spec.ts`,** with `@supabase/supabase-js` `createClient` mocked. They check:
  - The upload key and extension, `contentType`, and `upsert: true`.
  - The returned key.
  - That `createSignedUrl` is called with `3600` and its URL is returned.
  - That `remove` is called with `[key]`.
  - That a Supabase error leads to `InternalServerErrorException`.
  - That missing input leads to `BadRequestException`.
  - That missing config throws at construction.
- **Existing specs:** `rate.service.spec.ts` stays green with the renamed dependency.
- **Checks:** `npx tsc --noEmit`, `npm test` and `npm run build` all pass.
- **Staging smoke test** after the first deploy:
  1. `GET /health`
  2. Login
  3. Create a bank, a client and a bank account
  4. Create a rate
  5. Upload a rate document, open the signed URL, update it with a new file, then delete it
  6. Upload a CSV to get a transaction preview, then create the transactions
  7. Run `POST /analysis/perform` for CAMF

## 5. Rollout

1. **Supabase:** create the staging and production projects in `eu-central-1`. In each, create the private `rate-documents` bucket with a 10 MB limit. Collect the pooler connection strings, project URLs and service role keys.
2. **Code:** make the code changes from section 3 on `staging`. The user commits.
3. **Railway:** create the project and the `staging` and `production` environments. Connect the GitHub repo with the branch mapping. Set the variables.
4. **Staging:**
   1. Deploy. The pre-deploy step migrates the empty database.
   2. Run `npx prisma db seed` once against the staging `DIRECT_URL` from a local machine.
   3. Smoke-test as in section 4.
5. **Frontends:** point the staging Vercel frontends' API base URL at the Railway staging domain. Add the Railway domains to CORS.
6. **Production:**
   1. Merge to `main`. The user does this.
   2. Railway deploys and migrates.
   3. Seed.
   4. Point `server.adegoroyefadareandco.org` at Railway: add the custom domain in Railway, then update the record at the current DNS provider.
   5. Update the production Vercel API URLs.
   6. Smoke-test.
7. **Decommission:** shut down Beanstalk, the S3 bucket and the IAM keys, then rotate the Neon password and delete the Neon project.

## 6. Documentation

- **`docs/CHANGELOG.md`:** a dated entry. It flags as **breaking for deploy** the new env vars, the removed AWS vars and the new host and base URL. It notes that no Prisma migration was added.
- **`docs/changes/2026-10-07-supabase-railway-migration.md`:** the problem, the approach, the affected modules, the runbook (section 5) and how it was verified.
- **`CLAUDE.md`:** update the deploy and env notes. It currently mentions Neon, AWS S3 and Elastic Beanstalk.

## 7. Out of scope

- Moving DNS.
- Migrating any existing data.
- Changing email providers.
- Uploading directly from the browser to Supabase.
- Changes to the API or schema.
- The unused `MulterModule.register({ dest: './uploads' })` in `rate.module.ts`. Every upload route uses memory storage, so it is left alone.
