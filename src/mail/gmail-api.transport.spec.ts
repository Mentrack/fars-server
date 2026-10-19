import { sendWithGmailApi, GmailApiFetch } from './gmail-api.transport';

function decodeRaw(raw: string): string {
  const padded = raw.replace(/-/g, '+').replace(/_/g, '/');
  const pad =
    padded.length % 4 === 0 ? '' : '='.repeat(4 - (padded.length % 4));
  return Buffer.from(padded + pad, 'base64').toString('utf8');
}

function jsonResponse(
  status: number,
  body: unknown,
  text = '',
): {
  ok: boolean;
  status: number;
  json: () => Promise<unknown>;
  text: () => Promise<string>;
} {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
    text: () => Promise.resolve(text),
  };
}

const credentials = {
  clientId: 'client-id',
  clientSecret: 'client-secret',
  refreshToken: 'refresh-token',
};

const message = {
  from: 'FaRS <sender@gmail.com>',
  to: 'staff@example.com',
  subject: 'Assignment',
  html: '<p>Hello</p>',
};

describe('sendWithGmailApi', () => {
  it('exchanges the refresh token and posts the message to the Gmail API', async () => {
    const calls: {
      url: string;
      method?: string;
      body?: string;
      authorization?: string;
    }[] = [];
    const fetchImpl: GmailApiFetch = (url, init) => {
      calls.push({
        url,
        method: init?.method,
        body: init?.body,
        authorization: init?.headers?.Authorization,
      });
      if (url === 'https://oauth2.googleapis.com/token') {
        return Promise.resolve(
          jsonResponse(200, { access_token: 'access-token' }),
        );
      }
      return Promise.resolve(jsonResponse(200, { id: 'msg-1' }));
    };

    await sendWithGmailApi(credentials, message, fetchImpl);

    expect(calls).toHaveLength(2);
    expect(calls[0].url).toBe('https://oauth2.googleapis.com/token');
    expect(calls[0].method).toBe('POST');
    const tokenBody = new URLSearchParams(calls[0].body);
    expect(tokenBody.get('grant_type')).toBe('refresh_token');
    expect(tokenBody.get('client_id')).toBe('client-id');
    expect(tokenBody.get('client_secret')).toBe('client-secret');
    expect(tokenBody.get('refresh_token')).toBe('refresh-token');

    expect(calls[1].url).toBe(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
    );
    expect(calls[1].authorization).toBe('Bearer access-token');
    const parsed: { raw?: string } = JSON.parse(calls[1].body ?? '{}') as {
      raw?: string;
    };
    const decoded = decodeRaw(parsed.raw ?? '');
    expect(decoded).toContain('From: FaRS <sender@gmail.com>');
    expect(decoded).toContain('To: staff@example.com');
    expect(decoded).toContain('Subject: Assignment');
    expect(decoded).toContain('<p>Hello</p>');
  });

  it('does not call the send endpoint when the token request fails', async () => {
    const fetchImpl: GmailApiFetch = jest.fn(() =>
      Promise.resolve(jsonResponse(400, {}, 'invalid_grant')),
    );

    await expect(
      sendWithGmailApi(credentials, message, fetchImpl),
    ).rejects.toThrow('Gmail OAuth token request failed: 400');
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it('throws when the Gmail send endpoint rejects the message', async () => {
    const fetchImpl: GmailApiFetch = jest
      .fn()
      .mockResolvedValueOnce(
        jsonResponse(200, { access_token: 'access-token' }),
      )
      .mockResolvedValueOnce(jsonResponse(403, {}, 'insufficient permissions'));

    await expect(
      sendWithGmailApi(credentials, message, fetchImpl),
    ).rejects.toThrow('Gmail API send failed: 403');
  });
});
