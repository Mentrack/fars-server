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
    it('uploads to <key>.<subtype> with upsert, no CDN caching, and returns the object key', async () => {
      await expect(
        service.uploadFile(pdf, 'contract-documents/rdc-1'),
      ).resolves.toBe('contract-documents/rdc-1.pdf');
      expect(from).toHaveBeenCalledWith('rate-documents');
      expect(bucket.upload).toHaveBeenCalledWith(
        'contract-documents/rdc-1.pdf',
        pdf.buffer,
        { contentType: 'application/pdf', upsert: true, cacheControl: '0' },
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
