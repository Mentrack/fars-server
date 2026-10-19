export type GmailApiCredentials = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
};

export type GmailApiMessage = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export type GmailApiResponse = {
  ok: boolean;
  status: number;
  json: () => Promise<unknown>;
  text: () => Promise<string>;
};

export type GmailApiFetch = (
  url: string,
  init?: {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
  },
) => Promise<GmailApiResponse>;

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SEND_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';

function headerValue(value: string): string {
  return value.replace(/[\r\n]+/g, ' ');
}

function toBase64Url(value: string): string {
  return Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function buildRawMessage(message: GmailApiMessage): string {
  const mime = [
    `From: ${headerValue(message.from)}`,
    `To: ${headerValue(message.to)}`,
    `Subject: ${headerValue(message.subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    '',
    message.html,
  ].join('\r\n');
  return toBase64Url(mime);
}

export async function sendWithGmailApi(
  credentials: GmailApiCredentials,
  message: GmailApiMessage,
  fetchImpl: GmailApiFetch = fetch,
): Promise<void> {
  const tokenResponse = await fetchImpl(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
      refresh_token: credentials.refreshToken,
      grant_type: 'refresh_token',
    }).toString(),
  });

  if (!tokenResponse.ok) {
    const detail = await tokenResponse.text();
    throw new Error(
      `Gmail OAuth token request failed: ${tokenResponse.status} ${detail}`,
    );
  }

  const tokenBody = (await tokenResponse.json()) as { access_token?: string };
  if (!tokenBody.access_token) {
    throw new Error('Gmail OAuth token response had no access_token');
  }

  const sendResponse = await fetchImpl(SEND_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tokenBody.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: buildRawMessage(message) }),
  });

  if (!sendResponse.ok) {
    const detail = await sendResponse.text();
    throw new Error(`Gmail API send failed: ${sendResponse.status} ${detail}`);
  }
}
