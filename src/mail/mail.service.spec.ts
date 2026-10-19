import { Test, TestingModule } from '@nestjs/testing';
import * as nodemailer from 'nodemailer';
import { MailService } from './mail.service';
import mailerConfig from './config/mailer.config';

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn().mockResolvedValue({}),
  })),
}));

const baseConfig = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  user: 'sender@gmail.com',
  pass: 'app-password',
  appUrl: 'http://localhost:3000',
  appName: 'FaRS',
  googleClientId: 'client-id',
  googleClientSecret: 'client-secret',
  googleRefreshToken: undefined as string | undefined,
};

function smtpSendMail(): jest.Mock {
  const transport = (nodemailer.createTransport as jest.Mock).mock.results.at(
    -1,
  )?.value as { sendMail: jest.Mock };
  return transport.sendMail;
}

async function createService(config: typeof baseConfig): Promise<MailService> {
  const module: TestingModule = await Test.createTestingModule({
    providers: [MailService, { provide: mailerConfig.KEY, useValue: config }],
  }).compile();
  return module.get(MailService);
}

describe('MailService delivery', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.clearAllMocks();
  });

  it('sends through the Gmail API when a refresh token is configured', async () => {
    const fetchImpl = jest
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ access_token: 'access-token' }),
        text: () => Promise.resolve(''),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ id: 'msg-1' }),
        text: () => Promise.resolve(''),
      });
    global.fetch = fetchImpl as unknown as typeof fetch;

    const service = await createService({
      ...baseConfig,
      googleRefreshToken: 'refresh-token',
    });

    await service.sendResetPasswordSuccessEmail('Ada', 'ada@example.com');

    expect(fetchImpl).toHaveBeenCalledTimes(2);
    const calls = fetchImpl.mock.calls as [string, { body: string }][];
    expect(calls[1][0]).toBe(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
    );
    const request = calls[1][1];
    const parsed = JSON.parse(request.body) as { raw: string };
    const raw = parsed.raw;
    const decoded = Buffer.from(
      raw.replace(/-/g, '+').replace(/_/g, '/'),
      'base64',
    ).toString('utf8');
    expect(decoded).toContain('To: ada@example.com');
    expect(decoded).toContain('From: RespecTech-HR Service <sender@gmail.com>');
    expect(smtpSendMail()).not.toHaveBeenCalled();
  });

  it('sends through SMTP when no refresh token is configured', async () => {
    const fetchImpl = jest.fn();
    global.fetch = fetchImpl as unknown as typeof fetch;

    const service = await createService(baseConfig);

    await service.sendResetPasswordSuccessEmail('Ada', 'ada@example.com');

    expect(fetchImpl).not.toHaveBeenCalled();
    expect(smtpSendMail()).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'ada@example.com',
        from: 'RespecTech-HR Service',
      }),
    );
  });

  it('refuses Gmail API delivery when the client id, secret, or mailbox is missing', async () => {
    const service = await createService({
      ...baseConfig,
      user: '',
      googleRefreshToken: 'refresh-token',
    });

    await expect(
      service.sendResetPasswordSuccessEmail('Ada', 'ada@example.com'),
    ).rejects.toThrow(
      'Gmail API mail requires GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and MAIL_USER',
    );
  });
});
