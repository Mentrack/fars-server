# 2026-10-13: Railway log errors (CORS, `[object Object]`, duplicate Swagger DTO)

## Problem

The Railway logs showed three separate issues:

1. **`Error: Not allowed by CORS` as a 500.** `src/config/corsOptions.ts` rejected an unlisted origin with a plain `Error`. Nest treated it as an unknown error, so the response was 500 and the log had a full stack trace. The log didn't say *which* origin was rejected.
   - Likely cause: Step 5 of the [migration runbook](2026-10-07-supabase-railway-migration.md) (add the Railway domains to `src/config/allowed-origins.config.ts`) hasn't been done. No `*.up.railway.app` origin is on the list, so Swagger at `https://<railway-domain>/api/doc` sends a non-matching `Origin` header on its requests. A frontend on an unlisted domain (for example a Vercel preview URL or a `www.` host) would fail the same way.
2. **`ERROR [AllExceptionsFilter] AllExceptionsFilter [object Object]`.** For every `HttpException` (401, 400 validation, 404, and so on), `getResponse()` returns an object. `MyLoggerService.error` builds its line with a template literal, so the object came out as `[object Object]`. Ordinary client errors were also logged at ERROR level.
3. **`Duplicate DTO detected: "FileUploadDto"`.** Two classes with the same name and different schemas: `src/rate/dto/file-upload.dto.ts` and `src/transaction/dto/upload-transaction.dto.ts`. Swagger keys schemas by class name, so one silently replaced the other in `/api/doc`. The next major version of `@nestjs/swagger` will throw on this at boot.

## Approach

- **CORS:** reject with `ForbiddenException("Origin <origin> not allowed by CORS")`. Disallowed requests are still blocked before reaching a handler, but the status is now 403 and the log names the origin.
  - Swagger served by this server is still rejected on `POST`/`PUT`/`PATCH`/`DELETE` until its domain is listed. Browsers send `Origin` on same-origin writes too, and the `cors` package only compares that header to the list.
- **Exception filter:** log `METHOD URL STATUS detail`, with the detail JSON-stringified when it's an object. 5xx goes to `error`, 4xx to `warn`. The response body is unchanged.
- **Swagger:** rename the transaction DTO to `TransactionFileUploadDto`. It's documentation-only, used solely in `@ApiBody`.

## Affected files

- `src/config/corsOptions.ts`, plus the new `src/config/corsOptions.spec.ts`
- `src/all-exceptions.filter.ts`, plus the new `src/all-exceptions.filter.spec.ts`
- `src/transaction/dto/upload-transaction.dto.ts`, `src/transaction/transaction.controller.ts`

## API impact

- A disallowed CORS origin now gets **403** instead of 500. Browsers block the response either way, so frontends see no difference.
- Error response bodies are unchanged. No Prisma migration.
- The Swagger schema for `POST /transactions/:accountId/upload` is now named `TransactionFileUploadDto`. This only matters to clients generated from the OpenAPI spec.

## Still to do

- Add the Railway **staging** domain to `src/config/allowed-origins.config.ts`. The production domain `https://fars-api-server-production.up.railway.app` is added. Add any other frontend origin the new log line reveals, if it's legitimate.

## Verification

- New specs were written first and failed (4 of 6) against the old code. All 6 pass after the change.
- `pnpm exec tsc --noEmit`: the only errors are the two known ones in `jwt-auth.guard.spec.ts` and `roles.guard.spec.ts`. `pnpm run build` exits 0. ESLint on the touched files is clean, apart from the CRLF `prettier` warnings that every file gets in this Windows checkout.
- Full `pnpm test`: the 29 failing suites are existing Nest scaffold specs with unresolved DI (for example `DatabaseService` not provided). They're unrelated to this change.
