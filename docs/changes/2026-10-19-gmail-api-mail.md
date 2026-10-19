# 2026-10-19: Send mail through the Gmail API on Railway

## Problem

Production mail failed with `ETIMEDOUT` on Nodemailer command `CONN` while connecting to `smtp.gmail.com:587`. The same account sent mail locally. Railway Hobby blocks outbound SMTP (ports 25, 465, and 587), so the socket never opens and the app password is never checked.

## Approach

`MailService` now chooses the transport from configuration:

- `GOOGLE_REFRESH_TOKEN` set: exchange that refresh token at `https://oauth2.googleapis.com/token`, then `POST` the RFC 822 message to `https://gmail.googleapis.com/gmail/v1/users/me/messages/send`. The From address is the existing display name plus `MAIL_USER`.
- `GOOGLE_REFRESH_TOKEN` unset: Nodemailer SMTP, unchanged.

`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `MAIL_USER` are required for the API path. A refresh token without them throws before any request. No new npm dependency; the calls use `fetch`.

## Affected modules

- `src/mail/gmail-api.transport.ts`
- `src/mail/mail.service.ts`
- `src/mail/config/mailer.config.ts`
- `.env.sample` (`GOOGLE_REFRESH_TOKEN`)

Password reset, welcome, and staff-assignment mail all go through the same `deliver` method.

## Deploy

On the Railway service, set:

- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from the OAuth client
- `GOOGLE_REFRESH_TOKEN` from a one-time consent with scope `https://www.googleapis.com/auth/gmail.send`
- `MAIL_USER` to the Gmail address that granted that token

Redeploy after saving the variables. Leave `GOOGLE_REFRESH_TOKEN` unset locally to keep SMTP.

## Verification

`pnpm exec jest src/mail/gmail-api.transport.spec.ts src/mail/mail.service.spec.ts` — 6 passed. The API path was watched failing first (fetch never called), then passing after `deliver` was added.
