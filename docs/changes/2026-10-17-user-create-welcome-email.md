# 2026-10-17 — User creation survives a welcome-email failure

## Problem

`POST /api/users` created the user, then sent the credentials email in the same `try`. `sendAccountCreationEmail` throws when SMTP fails. The catch turned every non-Prisma error into `400 Failed to create user`, after the row was already committed. A retry then hit the unique email or username and returned `409 User already exists`.

Client creation already treated this as best-effort (`welcomeEmailSent`). User creation did not.

## Approach

The insert stays in the existing `try`, so duplicate users are still `409` and other database failures are still `400 Failed to create user`. The email send has its own `try`. On failure the handler logs a warning with the new user id and the error message, and returns the created user with `welcomeEmailSent: false`. A successful send returns `welcomeEmailSent: true`.

The log line does not include the address or the temporary password. The error message from the mailer can still name the recipient.

## Affected modules

- `src/user/user.service.ts`
- `src/user/dto/create-user.dto.ts` (Swagger field on `CreateUserResponseDto`)
- `src/user/user.controller.ts` (operation description)
- `src/user/user.service.spec.ts`

## Migration / deploy

No Prisma migration. Deploy the API. Frontends should read `welcomeEmailSent` on `POST /api/users` and, when it is `false`, tell the admin the account exists and the new user should use "Forgot password".

## Verification

`pnpm exec jest src/user/user.service.spec.ts --no-coverage`
