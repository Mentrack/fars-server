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

    // upsert: document updates re-upload to the same key.
    // cacheControl 0: the CDN must not serve the replaced file after an update.
    const { error } = await this.bucket().upload(objectKey, file.buffer, {
      contentType: file.mimetype,
      upsert: true,
      cacheControl: '0',
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
