import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from './enum/role.enum';
import { DatabaseService } from 'src/database/database.service';
import { MailService } from 'src/mail/mail.service';
import { CreateUserDto } from './dto/create-user.dto';

describe('UserService role rules', () => {
  const superAdmin = { id: 'super-1', role: Role.SUPER_ADMIN };
  const admin = { id: 'admin-1', role: Role.ADMIN };
  const staff = { id: 'staff-1', role: Role.STAFF };

  let db: {
    user: {
      create: jest.Mock;
      update: jest.Mock;
      findUnique: jest.Mock;
    };
    permission: { findMany: jest.Mock };
  };
  let sendAccountCreationEmail: jest.Mock;
  let service: UserService;

  beforeEach(() => {
    db = {
      user: {
        create: jest
          .fn()
          .mockImplementation(
            ({ data }: { data: Record<string, unknown> }) => ({
              id: 'new-user',
              ...data,
            }),
          ),
        update: jest
          .fn()
          .mockImplementation(
            ({
              where,
              data,
            }: {
              where: { id: string };
              data: Record<string, unknown>;
            }) => ({ id: where.id, ...data }),
          ),
        findUnique: jest.fn(),
      },
      permission: { findMany: jest.fn().mockResolvedValue([]) },
    };
    sendAccountCreationEmail = jest.fn().mockResolvedValue(undefined);
    const mail = { sendAccountCreationEmail } as unknown as MailService;
    service = new UserService(db as unknown as DatabaseService, mail);
  });

  const newUser = (role?: Role): CreateUserDto => ({
    firstName: 'Mary',
    lastName: 'Kay',
    username: 'marykay',
    email: 'mary@example.com',
    password: 'P@ssw0rd123',
    ...(role ? { role } : {}),
  });

  describe('create', () => {
    it.each([Role.STAFF, Role.CLIENT, undefined])(
      'lets an admin create a user with role %s',
      async (role) => {
        await expect(service.create(newUser(role), admin)).resolves.toEqual(
          expect.objectContaining({ email: 'mary@example.com' }),
        );
      },
    );

    it.each([Role.ADMIN, Role.SUPER_ADMIN])(
      'forbids an admin from creating a user with role %s',
      async (role) => {
        await expect(service.create(newUser(role), admin)).rejects.toThrow(
          ForbiddenException,
        );
        expect(db.user.create).not.toHaveBeenCalled();
      },
    );

    it.each([Role.ADMIN, Role.SUPER_ADMIN])(
      'lets a super admin create a user with role %s',
      async (role) => {
        await expect(
          service.create(newUser(role), superAdmin),
        ).resolves.toEqual(expect.objectContaining({ role }));
      },
    );

    it('still reports duplicates as a conflict', async () => {
      db.user.create.mockRejectedValue({ code: 'P2002' });
      await expect(service.create(newUser(), admin)).rejects.toThrow(
        ConflictException,
      );
    });

    it('returns the created user, flagged as not emailed, when the welcome email fails', async () => {
      sendAccountCreationEmail.mockRejectedValue(new Error('SMTP timeout'));

      await expect(service.create(newUser(Role.STAFF), admin)).resolves.toEqual(
        expect.objectContaining({
          email: 'mary@example.com',
          welcomeEmailSent: false,
        }),
      );
      expect(db.user.create).toHaveBeenCalledTimes(1);
    });

    it('flags the user as emailed when the welcome email is sent', async () => {
      await expect(service.create(newUser(Role.STAFF), admin)).resolves.toEqual(
        expect.objectContaining({ welcomeEmailSent: true }),
      );
    });
  });

  describe('update', () => {
    it.each([admin, staff])(
      'forbids a $role caller from changing a role',
      async (caller) => {
        db.user.findUnique.mockResolvedValue({ id: 'u-2', role: Role.STAFF });

        await expect(
          service.update('u-2', { role: Role.ADMIN }, caller),
        ).rejects.toThrow(ForbiddenException);
        expect(db.user.update).not.toHaveBeenCalled();
      },
    );

    it('lets a super admin change another user’s role', async () => {
      db.user.findUnique.mockResolvedValue({ id: 'u-2', role: Role.STAFF });

      await expect(
        service.update('u-2', { role: Role.ADMIN }, superAdmin),
      ).resolves.toEqual(expect.objectContaining({ role: Role.ADMIN }));
    });

    it('treats sending a user’s current role as a no-op', async () => {
      db.user.findUnique.mockResolvedValue({ id: 'u-3', role: Role.CLIENT });

      await expect(
        service.update('u-3', { role: Role.CLIENT }, superAdmin),
      ).resolves.toEqual(expect.objectContaining({ role: Role.CLIENT }));
    });

    it('returns 404 when the user whose role is being changed does not exist', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(
        service.update('missing', { role: Role.ADMIN }, superAdmin),
      ).rejects.toThrow(NotFoundException);
      expect(db.user.update).not.toHaveBeenCalled();
    });

    it('forbids a super admin from changing their own role', async () => {
      db.user.findUnique.mockResolvedValue({
        id: superAdmin.id,
        role: Role.SUPER_ADMIN,
      });

      await expect(
        service.update(superAdmin.id, { role: Role.STAFF }, superAdmin),
      ).rejects.toThrow(ForbiddenException);
    });

    it('rejects turning a staff user into a client', async () => {
      db.user.findUnique.mockResolvedValue({ id: 'u-2', role: Role.STAFF });

      await expect(
        service.update('u-2', { role: Role.CLIENT }, superAdmin),
      ).rejects.toThrow(BadRequestException);
    });

    it('rejects changing a client login to another role', async () => {
      db.user.findUnique.mockResolvedValue({ id: 'u-3', role: Role.CLIENT });

      await expect(
        service.update('u-3', { role: Role.STAFF }, superAdmin),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('update permissions (non-role fields)', () => {
    const clientLogin = { id: 'client-login-1', role: Role.CLIENT };
    const target = (id: string, role: Role) =>
      db.user.findUnique.mockResolvedValue({ id, role });

    it.each([staff, clientLogin])(
      'forbids a $role caller from editing another user',
      async (caller) => {
        target(superAdmin.id, Role.SUPER_ADMIN);

        await expect(
          service.update(
            superAdmin.id,
            { email: 'attacker@example.com' },
            caller,
          ),
        ).rejects.toThrow(ForbiddenException);
        expect(db.user.update).not.toHaveBeenCalled();
      },
    );

    it('lets a staff user edit their own name, phone and avatar', async () => {
      target(staff.id, Role.STAFF);

      await expect(
        service.update(
          staff.id,
          { firstName: 'Robert', phone: '08031234567', avatarUrl: 'x' },
          staff,
        ),
      ).resolves.toEqual(expect.objectContaining({ firstName: 'Robert' }));
    });

    it.each([
      { email: 'new@example.com' },
      { username: 'new-name' },
      { isActive: false },
      { permissions: ['VIEW_CLIENTS'] },
    ])('forbids a staff user from changing their own %o', async (change) => {
      target(staff.id, Role.STAFF);

      await expect(service.update(staff.id, change, staff)).rejects.toThrow(
        ForbiddenException,
      );
      expect(db.user.update).not.toHaveBeenCalled();
    });

    it.each([Role.STAFF, Role.CLIENT])(
      'lets an admin edit a %s user',
      async (role) => {
        target('u-2', role);

        await expect(
          service.update('u-2', { email: 'new@example.com' }, admin),
        ).resolves.toEqual(
          expect.objectContaining({ email: 'new@example.com' }),
        );
      },
    );

    it.each([Role.ADMIN, Role.SUPER_ADMIN])(
      'forbids an admin from editing a %s user',
      async (role) => {
        target('u-2', role);

        await expect(
          service.update('u-2', { email: 'attacker@example.com' }, admin),
        ).rejects.toThrow(ForbiddenException);
        expect(db.user.update).not.toHaveBeenCalled();
      },
    );

    it('lets an admin edit their own account', async () => {
      target(admin.id, Role.ADMIN);

      await expect(
        service.update(admin.id, { email: 'me@example.com' }, admin),
      ).resolves.toEqual(expect.objectContaining({ email: 'me@example.com' }));
    });

    it('lets a super admin edit an admin user', async () => {
      target('u-2', Role.ADMIN);

      await expect(
        service.update('u-2', { isActive: false }, superAdmin),
      ).resolves.toEqual(expect.objectContaining({ isActive: false }));
    });

    it('returns 404 when an admin edits a user that does not exist', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(
        service.update('missing', { firstName: 'X' }, admin),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
