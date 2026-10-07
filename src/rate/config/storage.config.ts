import { registerAs } from '@nestjs/config';

export default registerAs('supabase-storage', () => ({
  url: process.env.SUPABASE_URL ?? '',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  bucketName: process.env.SUPABASE_STORAGE_BUCKET ?? '',
}));
