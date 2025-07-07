import { registerAs } from '@nestjs/config';

export default registerAs('google-ai', () => ({
  apiKey: process.env.GOOGLE_API_KEY,
}));
