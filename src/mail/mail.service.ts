import { Inject, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import mailerConfig from './config/mailer.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class MailService {
  private readonly transporter: nodemailer.Transporter;

  constructor(
    @Inject(mailerConfig.KEY)
    private readonly mailerConfiguration: ConfigType<typeof mailerConfig>,
  ) {
    this.transporter = nodemailer.createTransport({
      host: mailerConfiguration.host,
      port: mailerConfiguration.port,
      auth: {
        user: mailerConfiguration.user,
        pass: mailerConfiguration.pass,
      },
    });
  }

  async sendResetPasswordEmail(to: string, token: string) {
    const resetPasswordLink = `${this.mailerConfiguration.appUrl}/reset-password?token=${token}`;
    const mailOptions = {
      from: 'RespecTech-HR Service',
      to,
      subject: 'Password Reset Request',
      html: `Your request to reset your password has been received. 
      Click <a href="${resetPasswordLink}">here</a> to reset your password.
      <br> If yoy did not request this, please ignore this email.`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
