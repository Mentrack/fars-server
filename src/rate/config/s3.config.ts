import { registerAs } from '@nestjs/config';

export default registerAs('aws-s3', () => ({
  region: process.env.AWS_REGION!,
  bucketName: process.env.AWS_S3_BUCKET_NAME!,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
}));
