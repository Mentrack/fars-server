import { ClientService } from './client.service';
import { DatabaseService } from 'src/database/database.service';
import { MailService } from 'src/mail/mail.service';

describe('ClientService', () => {
  describe('create', () => {
    const dto = {
      firstName: 'Prince',
      lastName: 'Henry',
      companyName: 'Henry Holdings',
      email: 'info@henry.com',
    };
    const savedClient = { id: 'client-1', ...dto };
    const savedUser = { id: 'user-1', email: dto.email, firstName: 'Prince' };

    function buildDb() {
      return {
        // First call: existence checks; second call: atomic create
        $transaction: jest
          .fn()
          .mockResolvedValueOnce([null, null])
          .mockResolvedValueOnce([savedClient, savedUser]),
        client: { findFirst: jest.fn(), create: jest.fn() },
        user: {
          findUnique: jest.fn().mockResolvedValue(null),
          create: jest.fn(),
        },
      } as unknown as DatabaseService;
    }

    it('returns the created client, flagged as not emailed, when the welcome email fails', async () => {
      const mail = {
        sendAccountCreationEmail: jest
          .fn()
          .mockRejectedValue(new Error('SMTP timeout')),
      } as unknown as MailService;
      const service = new ClientService(buildDb(), mail);

      await expect(service.create(dto)).resolves.toEqual({
        ...savedClient,
        welcomeEmailSent: false,
      });
    });

    it('flags the client as emailed when the welcome email is sent', async () => {
      const mail = {
        sendAccountCreationEmail: jest.fn().mockResolvedValue(undefined),
      } as unknown as MailService;
      const service = new ClientService(buildDb(), mail);

      await expect(service.create(dto)).resolves.toEqual({
        ...savedClient,
        welcomeEmailSent: true,
      });
    });

    it('still sends the welcome email with the generated credentials', async () => {
      const sendAccountCreationEmail = jest.fn().mockResolvedValue(undefined);
      const mail = { sendAccountCreationEmail } as unknown as MailService;
      const service = new ClientService(buildDb(), mail);

      await service.create(dto);

      expect(sendAccountCreationEmail).toHaveBeenCalledWith(
        dto.email,
        'Prince',
        dto.email,
        expect.stringMatching(/^@iPrince\d{4}$/),
      );
    });
  });
});
