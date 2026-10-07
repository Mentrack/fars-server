# Supabase + Railway Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Repo rule (CLAUDE.md): never run git write commands.** Wherever a step says "Hand off", list the changed files for the user to commit. Do not commit, stage, branch or push.

**Goal:** Move the FaRS API off AWS and Neon. Postgres and file storage move to Supabase, and hosting moves to Railway. The HTTP API stays the same.

**Architecture:**
- `RateS3Service` (AWS SDK) is replaced by `RateStorageService`, which has the same method signatures and uses `@supabase/supabase-js` with the service role key against a private bucket.
- Prisma gets a `directUrl` and points at Supabase's session pooler.
- Elastic Beanstalk files are replaced by a `railway.json`. It builds the app, runs `prisma migrate deploy` as a pre-deploy step, and health-checks `/health`.
- Staging and production each get their own Supabase project and their own Railway environment.

**Tech Stack:** NestJS 11, Prisma 6, `@supabase/supabase-js` v2, Jest 29 + ts-jest, Railway (Railpack builder).

**Spec:** [`docs/specs/2026-10-07-supabase-railway-migration-design.md`](../specs/2026-10-07-supabase-railway-migration-design.md)

## Global Constraints

- No data migration. The new databases are built with `prisma migrate deploy` and then `prisma db seed`.
- Two environments, staging and production. Each has its own Supabase project (`eu-central-1`) and its own Railway environment (EU West). `staging` deploys from the `staging` branch and `production` deploys from `main`.
- Signed URL expiry: exactly `3600` seconds.
- Bucket name `rate-documents`. It is private, with a file size limit of `10485760` bytes (equal to the multer limit `10 * 1024 * 1024`) and no MIME allow-list.
- Object key format is unchanged: `<key>.<mimetype subtype>`, for example `contract-documents/rdc-xxxx.pdf`.
- Uploads use `upsert: true`.
- Env vars added: `DATABASE_URL` (session pooler), `DIRECT_URL` (session pooler), `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_STORAGE_BUCKET`. Env vars removed: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET_NAME`.
- Storage SDK errors become `InternalServerErrorException('File storage operation failed')`. The existing `BadRequestException` messages `'File is required'` and `'File key is required'` stay as they are.
- `SUPABASE_SERVICE_ROLE_KEY` is server-only. It must never appear in a Vercel or frontend env.
- DNS is out of scope. The existing record for `server.adegoroyefadareandco.org` is only re-pointed.

## Review Focus

1. **A storage object is missing behind a document row.** This can happen when `deleteDocument` removes the file and then the database delete fails, or when an object is removed by hand. A reasonable user expects the document list to still load. S3 signed locally and never failed here, but Supabase does. Covered in Task 2: lists return `url: null` for that document only.
2. **A document is updated with a new file under the same key.** Supabase rejects an overwrite unless `upsert` is set. Pinned in Task 1 (`upsert: true` asserted).
3. **A file between 10,000,000 and 10,485,760 bytes.** Multer allows it, so the bucket must too. A bucket limit typed as "10 MB" in the UI might be decimal and reject it with a 500 error. Pinned in Task 6: the bucket is created by SQL with exactly `10485760` and checked with a query.
4. **A Railway environment is missing a Supabase variable.** Expected result: the app fails at boot, the health check fails, and the previous release keeps serving. It should not fail later on the first upload. Pinned in Task 1 (the constructor throws and names the env var).
5. **The `prisma` CLI is unavailable when the pre-deploy command runs.** `prisma` is a devDependency. If the deploy image prunes devDependencies, `npx prisma migrate deploy` downloads an unpinned version or fails. Checked in the Task 6 deploy log. The fix is described there.

---

## File map

| File | Change | Responsibility |
|---|---|---|
| `src/rate/config/storage.config.ts` | Create | Reads the Supabase storage env vars (`registerAs('supabase-storage')`) |
| `src/rate/rate.storage.service.ts` | Create | Upload, sign and delete objects in the Supabase bucket |
| `src/rate/rate.storage.service.spec.ts` | Create | Unit tests for the above, with the Supabase client mocked |
| `src/rate/rate.s3.service.ts`, `src/rate/config/s3.config.ts` | Delete | Replaced |
| `src/rate/rate.module.ts` | Modify | Registers the storage config and provider |
| `src/rate/rate.service.ts` | Modify | Injects `RateStorageService`; lists tolerate unsignable objects |
| `src/rate/rate.service.spec.ts` | Modify | Renamed dependency and a new list test |
| `src/rate-comment/rate-comment.service.ts` | Modify | Removes the stray `NotFound` AWS import |
| `package.json`, `package-lock.json` | Modify | Adds `@supabase/supabase-js`; removes `@aws-sdk/*` and the `deploy` script |
| `prisma/schema.prisma` | Modify | Adds `directUrl` |
| `.env.sample` | Modify | Supabase vars in; AWS vars and the leaked Neon credential out |
| `railway.json` | Create | Railway build, pre-deploy, start and health check settings |
| `Procfile`, `.ebextensions/` | Delete | Beanstalk only |
| `src/config/allowed-origins.config.ts` | Modify | Removes the Beanstalk origin; adds the Railway domains (Task 6) |
| `docs/CHANGELOG.md`, `docs/changes/2026-10-07-supabase-railway-migration.md`, `CLAUDE.md` | Modify / Create | Change record and runbook |

---

### Task 1: `RateStorageService` on Supabase Storage

**Files:**
- Create: `src/rate/config/storage.config.ts`
- Create: `src/rate/rate.storage.service.ts`
- Test: `src/rate/rate.storage.service.spec.ts`
- Modify: `package.json` and `package-lock.json` (through npm)

**Interfaces:**
- Consumes: nothing from other tasks.
- Produces:
  - `storageConfig` (default export of `src/rate/config/storage.config.ts`): `registerAs('supabase-storage', () => ({ url: string; serviceRoleKey: string; bucketName: string }))`.
  - `class RateStorageService` (`src/rate/rate.storage.service.ts`), constructed with `@Inject(storageConfig.KEY) config: ConfigType<typeof storageConfig>`:
    - `uploadFile(file: Express.Multer.File, key: string): Promise<string>` returns the object key `<key>.<subtype>`.
    - `getFileUrl(key: string): Promise<string>` returns the signed URL (3600 s).
    - `deleteFile(key: string): Promise<void>`.

- [ ] **Step 1: Install the Supabase client**

Run: `npm install @supabase/supabase-js@^2`
Expected: `package.json` `dependencies` now lists `"@supabase/supabase-js": "^2.x.x"`.

- [ ] **Step 2: Create the config file**

`src/rate/config/storage.config.ts`:

```ts
import { registerAs } from '@nestjs/config';

export default registerAs('supabase-storage', () => ({
  url: process.env.SUPABASE_URL ?? '',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  bucketName: process.env.SUPABASE_STORAGE_BUCKET ?? '',
}));
```

- [ ] **Step 3: Write the failing tests**

`src/rate/rate.storage.service.spec.ts`:

```ts
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { RateStorageService } from './rate.storage.service';

jest.mock('@supabase/supabase-js', () => ({ createClient: jest.fn() }));

const config = {
  url: 'https://proj.supabase.co',
  serviceRoleKey: 'service-role-key',
  bucketName: 'rate-documents',
};

const pdf = {
  buffer: Buffer.from('%PDF-1.4'),
  mimetype: 'application/pdf',
  originalname: 'contract.pdf',
} as Express.Multer.File;

const signedUrl =
  'https://proj.supabase.co/storage/v1/object/sign/rate-documents/contract-documents/rdc-1.pdf?token=t';

describe('RateStorageService', () => {
  let bucket: {
    upload: jest.Mock;
    createSignedUrl: jest.Mock;
    remove: jest.Mock;
  };
  let from: jest.Mock;
  let service: RateStorageService;

  beforeEach(() => {
    bucket = {
      upload: jest.fn().mockResolvedValue({ data: { path: 'x' }, error: null }),
      createSignedUrl: jest
        .fn()
        .mockResolvedValue({ data: { signedUrl }, error: null }),
      remove: jest.fn().mockResolvedValue({ data: [], error: null }),
    };
    from = jest.fn(() => bucket);
    (createClient as jest.Mock).mockReturnValue({ storage: { from } });
    service = new RateStorageService(config);
  });

  afterEach(() => jest.clearAllMocks());

  describe('constructor', () => {
    it('creates a server-side client with the service role key', () => {
      expect(createClient).toHaveBeenCalledWith(
        config.url,
        config.serviceRoleKey,
        { auth: { persistSession: false, autoRefreshToken: false } },
      );
    });

    it.each([
      ['url', 'SUPABASE_URL'],
      ['serviceRoleKey', 'SUPABASE_SERVICE_ROLE_KEY'],
      ['bucketName', 'SUPABASE_STORAGE_BUCKET'],
    ])('fails fast when %s is missing, naming %s', (field, envName) => {
      expect(() => new RateStorageService({ ...config, [field]: '' })).toThrow(
        envName,
      );
    });
  });

  describe('uploadFile', () => {
    it('uploads to <key>.<subtype> with upsert and returns the object key', async () => {
      await expect(
        service.uploadFile(pdf, 'contract-documents/rdc-1'),
      ).resolves.toBe('contract-documents/rdc-1.pdf');
      expect(from).toHaveBeenCalledWith('rate-documents');
      expect(bucket.upload).toHaveBeenCalledWith(
        'contract-documents/rdc-1.pdf',
        pdf.buffer,
        { contentType: 'application/pdf', upsert: true },
      );
    });

    it('rejects a missing file without calling storage', async () => {
      await expect(
        service.uploadFile(undefined as unknown as Express.Multer.File, 'k'),
      ).rejects.toThrow(new BadRequestException('File is required'));
      expect(bucket.upload).not.toHaveBeenCalled();
    });

    it('maps a storage error to InternalServerErrorException', async () => {
      bucket.upload.mockResolvedValue({
        data: null,
        error: { message: 'Payload too large' },
      });
      await expect(
        service.uploadFile(pdf, 'contract-documents/rdc-1'),
      ).rejects.toThrow(
        new InternalServerErrorException('File storage operation failed'),
      );
    });
  });

  describe('getFileUrl', () => {
    it('returns a URL signed for 3600 seconds', async () => {
      await expect(
        service.getFileUrl('contract-documents/rdc-1.pdf'),
      ).resolves.toBe(signedUrl);
      expect(bucket.createSignedUrl).toHaveBeenCalledWith(
        'contract-documents/rdc-1.pdf',
        3600,
      );
    });

    it('rejects a missing key without calling storage', async () => {
      await expect(service.getFileUrl('')).rejects.toThrow(
        new BadRequestException('File key is required'),
      );
      expect(bucket.createSignedUrl).not.toHaveBeenCalled();
    });

    it('maps a missing object to InternalServerErrorException', async () => {
      bucket.createSignedUrl.mockResolvedValue({
        data: null,
        error: { message: 'Object not found' },
      });
      await expect(
        service.getFileUrl('contract-documents/gone.pdf'),
      ).rejects.toThrow(
        new InternalServerErrorException('File storage operation failed'),
      );
    });
  });

  describe('deleteFile', () => {
    it('removes the object by key', async () => {
      await expect(
        service.deleteFile('contract-documents/rdc-1.pdf'),
      ).resolves.toBeUndefined();
      expect(bucket.remove).toHaveBeenCalledWith([
        'contract-documents/rdc-1.pdf',
      ]);
    });

    it('rejects a missing key without calling storage', async () => {
      await expect(service.deleteFile('')).rejects.toThrow(
        new BadRequestException('File key is required'),
      );
      expect(bucket.remove).not.toHaveBeenCalled();
    });

    it('maps a storage error to InternalServerErrorException', async () => {
      bucket.remove.mockResolvedValue({
        data: null,
        error: { message: 'boom' },
      });
      await expect(
        service.deleteFile('contract-documents/rdc-1.pdf'),
      ).rejects.toThrow(
        new InternalServerErrorException('File storage operation failed'),
      );
    });
  });
});
```

- [ ] **Step 4: Run the tests and confirm they fail**

Run: `npx jest src/rate/rate.storage.service.spec.ts`
Expected: FAIL with `Cannot find module './rate.storage.service'`.

- [ ] **Step 5: Implement the service**

`src/rate/rate.storage.service.ts`:

```ts
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import storageConfig from './config/storage.config';

const SIGNED_URL_TTL_SECONDS = 3600;

const REQUIRED_ENV = {
  url: 'SUPABASE_URL',
  serviceRoleKey: 'SUPABASE_SERVICE_ROLE_KEY',
  bucketName: 'SUPABASE_STORAGE_BUCKET',
} as const;

@Injectable()
export class RateStorageService {
  private readonly logger = new Logger(RateStorageService.name);
  private readonly client: SupabaseClient;
  private readonly bucketName: string;

  constructor(
    @Inject(storageConfig.KEY)
    config: ConfigType<typeof storageConfig>,
  ) {
    // Fail at boot so a misconfigured environment fails its health check
    const missing = (
      Object.keys(REQUIRED_ENV) as (keyof typeof REQUIRED_ENV)[]
    )
      .filter((field) => !config[field])
      .map((field) => REQUIRED_ENV[field]);
    if (missing.length) {
      throw new Error(
        `Missing Supabase storage configuration: ${missing.join(', ')}`,
      );
    }

    this.bucketName = config.bucketName;
    this.client = createClient(config.url, config.serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  async uploadFile(file: Express.Multer.File, key: string): Promise<string> {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    const objectKey = key + `.${file.mimetype.split('/')[1]}`;

    // upsert: document updates re-upload to the same key
    const { error } = await this.bucket().upload(objectKey, file.buffer, {
      contentType: file.mimetype,
      upsert: true,
    });
    if (error) {
      throw this.storageError('upload', objectKey, error);
    }

    return objectKey;
  }

  async getFileUrl(key: string): Promise<string> {
    if (!key) {
      throw new BadRequestException('File key is required');
    }

    const { data, error } = await this.bucket().createSignedUrl(
      key,
      SIGNED_URL_TTL_SECONDS,
    );
    if (error || !data) {
      throw this.storageError('sign', key, error);
    }

    return data.signedUrl;
  }

  async deleteFile(key: string): Promise<void> {
    if (!key) {
      throw new BadRequestException('File key is required');
    }

    const { error } = await this.bucket().remove([key]);
    if (error) {
      throw this.storageError('delete', key, error);
    }
  }

  private bucket() {
    return this.client.storage.from(this.bucketName);
  }

  private storageError(
    operation: string,
    key: string,
    error: { message: string } | null,
  ): InternalServerErrorException {
    this.logger.error(
      `Storage ${operation} failed for "${key}": ${error?.message ?? 'no data returned'}`,
    );
    return new InternalServerErrorException('File storage operation failed');
  }
}
```

- [ ] **Step 6: Run the tests and confirm they pass**

Run: `npx jest src/rate/rate.storage.service.spec.ts`
Expected: PASS, 13 tests.

- [ ] **Step 7: Hand off**

Ready to commit: `src/rate/config/storage.config.ts`, `src/rate/rate.storage.service.ts`, `src/rate/rate.storage.service.spec.ts`, `package.json`, `package-lock.json`.

---

### Task 2: Wire `RateStorageService` into the rate module and remove AWS

**Files:**
- Modify: `src/rate/rate.module.ts`
- Modify: `src/rate/rate.service.ts:1-17` (imports and constructor), plus every `rateS3Service` call site and the four document-list `map` callbacks
- Modify: `src/rate/rate.service.spec.ts:3` and `:68`, plus a new `describe` block
- Modify: `src/rate-comment/rate-comment.service.ts:9`
- Delete: `src/rate/rate.s3.service.ts`, `src/rate/config/s3.config.ts`
- Modify: `package.json` and `package-lock.json` (through npm)

**Interfaces:**
- Consumes: `RateStorageService` and `storageConfig` from Task 1.
- Produces: `RateService` constructor `(databaseService: DatabaseService, rateStorageService: RateStorageService)`. The document-list endpoints (`findAllDocuments` and the three other list methods that map `getFileUrl` over documents) return `url: string | null` per document.

- [ ] **Step 1: Swap the dependency injection (mechanical, no behaviour change)**

`src/rate/rate.module.ts`. Replace the two S3 imports and their uses:

```ts
import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { RateStorageService } from './rate.storage.service';
import { ConfigModule } from '@nestjs/config';
import storageConfig from './config/storage.config';

@Module({
  imports: [
    ConfigModule.forFeature(storageConfig),
    DatabaseModule,
    MulterModule.register({
      dest: './uploads', // Directory where files will be stored
    }),
  ],
  controllers: [RateController],
  providers: [RateService, RateStorageService],
})
export class RateModule {}
```

`src/rate/rate.service.ts`:
- Line 7: `import { RateS3Service } from './rate.s3.service';` becomes `import { RateStorageService } from './rate.storage.service';`
- Line 16: `private readonly rateS3Service: RateS3Service,` becomes `private readonly rateStorageService: RateStorageService,`
- Replace every `this.rateS3Service.` with `this.rateStorageService.` (12 occurrences).
- In comments, replace `// Upload to S3`, `// If a file is provided, upload it to S3`, `// Assign the S3 URL to the document` and `// Delete the document from S3` with `storage` in place of `S3`.

`src/rate/rate.service.spec.ts`:
- Line 3: `import { RateS3Service } from './rate.s3.service';` becomes `import { RateStorageService } from './rate.storage.service';`
- Line 68: `new RateService(db, {} as RateS3Service)` becomes `new RateService(db, {} as RateStorageService)`

Run: `npx jest src/rate`
Expected: PASS (the existing rate specs and Task 1's specs).

- [ ] **Step 2: Write the failing list test**

In `src/rate/rate.service.spec.ts`:

1. Add `import { InternalServerErrorException } from '@nestjs/common';` at the top. The file has no `@nestjs/common` import yet.
2. Append at the end of the file:

```ts
describe('RateService document lists', () => {
  it('returns url: null for a document whose file cannot be signed and signs the rest', async () => {
    const documents = [
      { id: 'doc-1', url: 'contract-documents/rdc-1.pdf' },
      { id: 'doc-2', url: 'contract-documents/rdc-2.pdf' },
    ];
    const db = {
      document: { findMany: jest.fn().mockResolvedValue(documents) },
    } as unknown as DatabaseService;
    const storage = {
      getFileUrl: jest.fn((key: string) =>
        key.includes('rdc-1')
          ? Promise.reject(
              new InternalServerErrorException('File storage operation failed'),
            )
          : Promise.resolve(`https://signed.example/${key}`),
      ),
    } as unknown as RateStorageService;
    const service = new RateService(db, storage);

    await expect(service.findAllDocuments()).resolves.toEqual([
      { id: 'doc-1', url: null },
      {
        id: 'doc-2',
        url: 'https://signed.example/contract-documents/rdc-2.pdf',
      },
    ]);
  });
});
```

- [ ] **Step 3: Run the test and confirm it fails**

Run: `npx jest src/rate/rate.service.spec.ts -t "document lists"`
Expected: FAIL. The promise rejects with `File storage operation failed`.

- [ ] **Step 4: Implement null-tolerant signing for lists**

In `src/rate/rate.service.ts`:

1. Change line 1 to `import { Injectable, Logger, NotFoundException } from '@nestjs/common';`
2. Add a logger field and a helper inside the class, directly after the constructor:

```ts
  private readonly logger = new Logger(RateService.name);

  // One missing storage object must not fail a whole document list;
  // that document is returned with url: null instead.
  private async signedUrlOrNull(key: string): Promise<string | null> {
    try {
      return await this.rateStorageService.getFileUrl(key);
    } catch (error) {
      this.logger.warn(
        `Could not sign document URL for "${key}": ${(error as Error).message}`,
      );
      return null;
    }
  }
```

3. Replace the line `      const url = await this.rateStorageService.getFileUrl(document.url);` with `      const url = await this.signedUrlOrNull(document.url);` everywhere it occurs. There are 4 occurrences, all inside `documents.map(async (document) => { ... })` callbacks.
4. Leave the single-document call sites (`document.url = await this.rateStorageService.getFileUrl(document.url);`) unchanged. A missing file on a single document is still a 500 error.

- [ ] **Step 5: Run the tests and confirm they pass**

Run: `npx jest src/rate`
Expected: PASS, including `RateService document lists`.

- [ ] **Step 6: Remove AWS code and packages**

1. Delete `src/rate/rate.s3.service.ts` and `src/rate/config/s3.config.ts`.
2. Delete line 9 of `src/rate-comment/rate-comment.service.ts`, `import { NotFound } from '@aws-sdk/client-s3';`. Nothing in that file uses `NotFound`; the file throws `NotFoundException` from `@nestjs/common`.
3. Run: `npm uninstall @aws-sdk/client-s3 @aws-sdk/s3-request-presigner`
4. Run (Bash): `grep -rnE "aws-sdk|RateS3Service|s3.config" src test`
   Expected: no matches.

- [ ] **Step 7: Verify the whole project**

Run: `npx tsc --noEmit`
Expected: no errors in the files touched here. The known pre-existing compile errors in `jwt-auth.guard.spec.ts` and `roles.guard.spec.ts` may still show. Confirm they are the only ones.

Run: `npm test`
Expected: every suite except the two known-broken guard specs passes.

Run: `npm run build`
Expected: succeeds and creates `dist/src/main.js`.

- [ ] **Step 8: Hand off**

Ready to commit:
- Modified: `src/rate/rate.module.ts`, `src/rate/rate.service.ts`, `src/rate/rate.service.spec.ts`, `src/rate-comment/rate-comment.service.ts`, `package.json`, `package-lock.json`
- Deleted: `src/rate/rate.s3.service.ts`, `src/rate/config/s3.config.ts`

---

### Task 3: Prisma `directUrl` and `.env.sample`

**Files:**
- Modify: `prisma/schema.prisma:11-17`
- Modify: `.env.sample` (whole file)

**Interfaces:**
- Consumes: the env var names from Task 1 (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_STORAGE_BUCKET`).
- Produces: Prisma reads `DATABASE_URL` and `DIRECT_URL`, and Task 6 sets both in each Railway environment.

- [ ] **Step 1: Update the datasource**

Replace lines 11-17 of `prisma/schema.prisma` with:

```prisma
// prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

- [ ] **Step 2: Validate the schema**

Run (Bash): `DATABASE_URL=postgresql://u:p@localhost:5432/db DIRECT_URL=postgresql://u:p@localhost:5432/db npx prisma validate`
Expected: `The schema at prisma/schema.prisma is valid`.

Run: `npx prisma generate`
Expected: `Generated Prisma Client`.

- [ ] **Step 3: Rewrite `.env.sample`**

Replace the whole file with the following. It drops the Neon comments, which held a real credential, and the AWS block.

```dotenv
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Supabase Postgres: Project Settings > Database > Connection string > Session pooler (port 5432).
# Both use the session pooler; the direct connection is IPv6-only.
DATABASE_URL=
DIRECT_URL=

# Supabase Storage: Project Settings > API. The service role key is server-only; never put it in a frontend env.
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=rate-documents

# JWT access token configuration
JWT_SECRET=
JWT_EXPIRES_IN=

# JWT refresh token configuration
REFRESH_JWT_SECRET=
REFRESH_JWT_EXPIRES_IN=

# Mailer configuration
MAIL_SERVICE=
MAIL_HOST=
MAIL_PORT=
MAIL_NAME=
MAIL_USER=
MAIL_PASS=
MAIL_FROM=

# Google Authentication configuration
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=

# Frontend URL
APP_URL=
```

Run: Grep for `neon|npg_|AWS_` in `.env.sample`.
Expected: no matches.

- [ ] **Step 4: Tell the user about their local `.env`**

Do not edit `.env`, which holds the user's secrets. Tell the user they need to:
- add `DIRECT_URL` (it can equal `DATABASE_URL` locally)
- add the three `SUPABASE_*` variables
- remove the `AWS_*` variables

Otherwise `npm run start:dev` and the Prisma CLI will fail.

- [ ] **Step 5: Hand off**

Ready to commit: `prisma/schema.prisma`, `.env.sample`. No Prisma migration was created.

---

### Task 4: Railway config, remove Beanstalk, update CORS

**Files:**
- Create: `railway.json`
- Delete: `Procfile`, `.ebextensions/01_build.config` (and the `.ebextensions/` folder)
- Modify: `package.json` (remove the `"deploy"` script)
- Modify: `src/config/allowed-origins.config.ts:10`

**Interfaces:**
- Consumes: `/health` (already `@Public()` in `src/app.controller.ts`); `process.env.PORT` (already read in `src/main.ts:55`).
- Produces: a `railway.json` that Task 6's Railway service picks up automatically.

- [ ] **Step 1: Create `railway.json`**

```json
{
  "$schema": "https://railway.com/railway.schema.json",
  "build": {
    "builder": "RAILPACK",
    "buildCommand": "npx prisma generate && npm run build"
  },
  "deploy": {
    "preDeployCommand": ["npx prisma migrate deploy"],
    "startCommand": "npm run start:prod",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 120,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 5
  }
}
```

Railpack runs `npm ci` itself before `buildCommand`, so `buildCommand` doesn't install again.

Run: `node -e "JSON.parse(require('fs').readFileSync('railway.json','utf8')); console.log('ok')"`
Expected: `ok`.

- [ ] **Step 2: Remove the Beanstalk files and script**

1. Delete `Procfile` and the `.ebextensions/` folder.
2. In `package.json` `scripts`, delete the line `"deploy": "npm ci && npm run build && npm run start:prod"` and the trailing comma on the line above it (`"test:e2e"`).

Run: `node -e "require('./package.json'); console.log('ok')"`
Expected: `ok`.

- [ ] **Step 3: Remove the Beanstalk CORS origin**

In `src/config/allowed-origins.config.ts`, delete line 10:

```ts
  'http://fars-api-env.eba-rfmzrjse.eu-west-2.elasticbeanstalk.com',
```

The Railway domains are added in Task 6, once they exist.

Run: Grep for `elasticbeanstalk|ebextensions|Procfile` in `src`, `package.json` and the repo root files.
Expected: no matches. Docs are updated in Task 5.

- [ ] **Step 4: Verify the build still works**

Run: `npx prisma generate && npm run build`
Expected: succeeds. This is the exact build Railway will run.

- [ ] **Step 5: Hand off**

Ready to commit:
- Created: `railway.json`
- Modified: `package.json`, `src/config/allowed-origins.config.ts`
- Deleted: `Procfile`, `.ebextensions/01_build.config`

---

### Task 5: Documentation

**Files:**
- Modify: `docs/CHANGELOG.md` (new entry at the top, under the intro paragraph)
- Create: `docs/changes/2026-10-07-supabase-railway-migration.md`
- Modify: `CLAUDE.md:56`, `:66`, `:78`

**Interfaces:**
- Consumes: the facts from Tasks 1–4.
- Produces: the runbook that Task 6 follows.

- [ ] **Step 1: Add the CHANGELOG entry**

Insert above `## 2026-10-07 — Farz App observation fixes`:

```markdown
## 2026-10-07 — Move off AWS: Supabase (DB + storage) and Railway (hosting)

Details and runbook: [`changes/2026-10-07-supabase-railway-migration.md`](changes/2026-10-07-supabase-railway-migration.md). Spec: [`specs/2026-10-07-supabase-railway-migration-design.md`](specs/2026-10-07-supabase-railway-migration-design.md).

> **Breaking for deploy:**
> - New env vars `DIRECT_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` and `SUPABASE_STORAGE_BUCKET`. The app refuses to boot without the `SUPABASE_*` ones.
> - `DATABASE_URL` now points at Supabase.
> - The `AWS_*` vars are removed.
> - The API moves from Elastic Beanstalk to Railway, so the frontends' API base URL changes.
>
> **No Prisma migration added.** New databases are built with `prisma migrate deploy` and `prisma db seed`. Railway runs `migrate deploy` before every release.
>
> **Response change:** the document-list endpoints can now return `url: null` for a document whose file is missing from storage, instead of failing the whole request.

### Added
- `RateStorageService` on Supabase Storage. It uses a private `rate-documents` bucket and signed URLs (3600 s), and uploads with upsert. (`src/rate/rate.storage.service.ts`, `src/rate/config/storage.config.ts`)
- `railway.json`: build, pre-deploy `prisma migrate deploy`, start, and `/health` health check.
- `directUrl = env("DIRECT_URL")` in the Prisma datasource. (`prisma/schema.prisma`)

### Changed
- Rate document lists sign each URL independently and return `url: null` for any file that cannot be signed. (`src/rate/rate.service.ts`)
- `.env.sample` lists the Supabase vars.

### Removed
- `RateS3Service`, `s3.config.ts`, `@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`, the stray `NotFound` AWS import in `rate-comment.service.ts`.
- `Procfile`, `.ebextensions/`, the `deploy` npm script, and the Beanstalk CORS origin.

### Security
- Removed a real Neon credential from `.env.sample`. It remains in git history: rotate it, then delete the Neon project.
- The Supabase service role key is server-only and must not be set in any Vercel env.
```

- [ ] **Step 2: Write the change note**

Create `docs/changes/2026-10-07-supabase-railway-migration.md` with the sections **Problem**, **Approach**, **Affected modules**, **Deploy / runbook** and **Verification**:

- **Problem**: why the move off AWS. Cover the Neon, S3 and Beanstalk replacements, and why not Vercel (the 4.5 MB request body limit versus 10 MB uploads).
- **Approach**: summarise spec section 3, the `url: null` list behaviour, and `upsert: true`.
- **Affected modules**: the file map from this plan.
- **Deploy / runbook**: copy Task 6 Steps 1–8 verbatim, including the bucket SQL and the Railway variable list.
- **Verification**: the commands and results from Tasks 1–4 (`npx tsc --noEmit`, `npm test`, `npm run build`). Leave the staging and production smoke-test results as a checklist for Task 6 to fill in.

- [ ] **Step 3: Update `CLAUDE.md`**

- Line 56: `(Postgres/Neon \`DATABASE_URL\`, JWT + refresh JWT secrets, SMTP, AWS S3, \`APP_URL\`)` becomes `(Supabase Postgres \`DATABASE_URL\` + \`DIRECT_URL\` (session pooler), JWT + refresh JWT secrets, SMTP, \`SUPABASE_URL\` / \`SUPABASE_SERVICE_ROLE_KEY\` / \`SUPABASE_STORAGE_BUCKET\`, \`APP_URL\`)`.
- Line 66: `Deployed on AWS Elastic Beanstalk (\`Procfile\`, \`.ebextensions/\`)` becomes `Deployed on Railway (\`railway.json\`: staging env ← \`staging\` branch, production env ← \`main\`; pre-deploy runs \`prisma migrate deploy\`)`.
- Line 78: `contract documents in S3 via \`rate.s3.service.ts\`, served as presigned URLs` becomes `contract documents in a private Supabase Storage bucket via \`rate.storage.service.ts\`, served as signed URLs (lists return \`url: null\` for missing files)`.

- [ ] **Step 4: Hand off**

Ready to commit:
- Modified: `docs/CHANGELOG.md`, `CLAUDE.md`
- Created: `docs/changes/2026-10-07-supabase-railway-migration.md`

---

### Task 6: Provision, deploy and decommission (operator runbook)

Most of this happens in the Supabase, Railway, Vercel and AWS dashboards, and the **user** does it. Claude prepares the commands, makes the one code edit (Step 5), and checks the outputs the user pastes back.

**Files:**
- Modify: `src/config/allowed-origins.config.ts` (Step 5)
- Modify: `docs/changes/2026-10-07-supabase-railway-migration.md` (Verification checklist results)

**Interfaces:**
- Consumes: `railway.json` (Task 4), the env var names (Tasks 1 and 3), `prisma/seed.ts`.
- Produces: running staging and production environments.

- [ ] **Step 1: Create the Supabase projects (user)**

Create `fars-staging` and `fars-production`, both in region `eu-central-1` (Frankfurt). For each project, record:
- Project URL (`https://<ref>.supabase.co`)
- service role key
- session pooler connection string (`postgresql://postgres.<ref>:<password>@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`)

- [ ] **Step 2: Create the bucket by SQL (user, in each project's SQL editor)**

```sql
insert into storage.buckets (id, name, public, file_size_limit)
values ('rate-documents', 'rate-documents', false, 10485760);

select id, public, file_size_limit, allowed_mime_types
from storage.buckets where id = 'rate-documents';
```

Expected: one row with `public = false`, `file_size_limit = 10485760` and `allowed_mime_types = null`. (Review Focus 3.)

- [ ] **Step 3: Create the Railway project (user)**

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

- [ ] **Step 4: First staging deploy and seed**

1. After the user has committed Tasks 1–5 to `staging` and pushed, Railway deploys the staging environment. In the deploy logs, check:
   - **Pre-deploy:** `prisma migrate deploy` lists the migrations up to `20261007120000_add_management_fee_and_fees` and prints `All migrations have been successfully applied.`
   - **If the pre-deploy log shows `npx` installing `prisma`, or `prisma: not found`** (devDependencies were pruned), move `prisma` from `devDependencies` to `dependencies` in `package.json` at the same version (`^6.7.0`), hand it off, and redeploy. (Review Focus 5.)
   - **Health check:** `/health` passes.
2. Seed once from a local machine (Bash):

```bash
DATABASE_URL='<staging session pooler>' DIRECT_URL='<staging session pooler>' npx prisma db seed
```

Expected: the seed finishes without errors.

- [ ] **Step 5: Add the Railway origins to CORS (code)**

In `src/config/allowed-origins.config.ts`, add the two Railway domains from Step 3 after the Vercel entries. They are there for Swagger at `/api/doc`.

```ts
  'https://<service>-staging.up.railway.app',
  'https://<service>-production.up.railway.app',
```

Use the exact domains the user reports. Run `npm run build` (expected to succeed), then hand off `src/config/allowed-origins.config.ts`.

- [ ] **Step 6: Staging smoke test**

1. Point the staging Vercel frontends' API base URL at the Railway staging domain.
2. Run each check below and tick it in the change note's Verification section.
3. Confirm with the user that `SUPABASE_SERVICE_ROLE_KEY` appears in no Vercel project env. (Global Constraints.)

Checks:
- `curl https://<staging-domain>/health` returns `OK`.
- Through Swagger at `https://<staging-domain>/api/doc` or the staging frontend:
  - log in
  - create a bank, a client (check that the credentials email arrives) and a bank account
  - create a rate
- Rate document flow:
  1. Upload a PDF document (`POST /api/rates/document`).
  2. Open the returned `url`. It should be a `*.supabase.co/storage/v1/object/sign/...` link and the PDF should open.
  3. Update the document with a different PDF (`PATCH /api/rates/document/:id`). The new file is served, which proves upsert works.
  4. Delete the document. The object is gone from the bucket in the Supabase dashboard.
- Upload a statement CSV (`POST /api/transactions/:accountId/upload`) and get a preview, then `create`.
- `POST /api/analysis/perform` (CAMF) returns a result.
- Unset `SUPABASE_URL` in staging and redeploy. The deploy fails its health check and the previous release keeps serving. Then restore the variable. (Review Focus 4.)

- [ ] **Step 7: Production**

1. The user merges `staging` into `main`. Railway deploys production, and the pre-deploy migration and health check pass.
2. Seed production: the Step 4 command with the production strings.
3. In Railway, add the custom domain `server.adegoroyefadareandco.org` to the production service. Then update its record at the current DNS provider to the target Railway shows. The DNS provider itself doesn't change.
4. Point the production Vercel frontends' API base URL at `https://server.adegoroyefadareandco.org`, or at the Railway production domain.
5. Repeat the Step 6 smoke checks against production, leaving out the variable-unset check.

- [ ] **Step 8: Decommission (user, after production is confirmed)**

1. Terminate the Elastic Beanstalk environment and application.
2. Empty and delete the S3 bucket named by the old `AWS_S3_BUCKET_NAME`.
3. Delete the IAM access key and user used by the API.
4. In Neon, rotate the `neondb_owner` password (it is in git history), then delete the Neon project.
5. Record the completion date in the change note.

- [ ] **Step 9: Hand off**

Ready to commit: `src/config/allowed-origins.config.ts` (from Step 5) and the updated `docs/changes/2026-10-07-supabase-railway-migration.md`.
