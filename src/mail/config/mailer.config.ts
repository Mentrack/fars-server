import { registerAs } from '@nestjs/config';

export default registerAs('mailer', () => ({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
  appUrl: process.env.APP_URL,
  appName: process.env.APP_NAME,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
}));
