import {
  BadRequestException,
  Delete,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import s3Config from './config/s3.config';

@Injectable()
export class RateS3Service {
  private readonly s3Client: S3Client;

  constructor(
    @Inject(s3Config.KEY)
    private readonly s3Configuration: ConfigType<typeof s3Config>,
  ) {
    this.s3Client = new S3Client({
      region: this.s3Configuration.region,
      credentials: {
        accessKeyId: this.s3Configuration.accessKeyId,
        secretAccessKey: this.s3Configuration.secretAccessKey,
      },
    });
  }

  async uploadFile(file: Express.Multer.File, key: string): Promise<string> {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    const bucketName = this.s3Configuration.bucketName;

    const keyExtension = key + `.${file.mimetype.split('/')[1]}`;

    const putObjectParams = {
      Bucket: bucketName,
      Key: keyExtension,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const command = new PutObjectCommand(putObjectParams);

    await this.s3Client.send(command);

    return keyExtension;
  }

  async getFileUrl(key: string): Promise<string> {
    if (!key) {
      throw new BadRequestException('File key is required');
    }

    const getObjectParams = {
      Bucket: this.s3Configuration.bucketName,
      Key: key,
      ResponseContentDisposition: 'inline',
    };
    // Generate a signed URL for the file
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(this.s3Client, command, { expiresIn: 3600 });
    return url;
  }

  async deleteFile(key: string): Promise<void> {
    if (!key) {
      throw new BadRequestException('File key is required');
    }

    const deleteObjectParams = {
      Bucket: this.s3Configuration.bucketName,
      Key: key,
    };

    const command = new DeleteObjectCommand(deleteObjectParams);

    // Implement the delete logic here if needed
    await this.s3Client.send(command);

    return;
  }
}
