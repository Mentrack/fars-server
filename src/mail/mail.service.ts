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
      service: mailerConfiguration.service,
      host: mailerConfiguration.host,
      port: mailerConfiguration.port,
      secure: false, // true for 465, false for other ports
      auth: {
        user: mailerConfiguration.user,
        pass: mailerConfiguration.pass,
      },
    });
  }

  async sendResetPasswordEmail(name: string, to: string, token: string) {
    const resetPasswordLink = `${this.mailerConfiguration.appUrl}/reset-password?token=${token}`;
    const mailOptions = {
      from: 'RespecTech-HR Service',
      to,
      subject: 'Password Reset Request',
      html: `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
    <h2 style="color: #0d6efd;">Password Reset Request</h2>
    <p>Hello ${name},</p>
    <p>We received a request to reset your password. Use the 6-digit token below to proceed:</p>
    <div style="background: #f8f9fa; padding: 16px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 3px; border: 1px dashed #0d6efd; border-radius: 4px; margin: 20px 0;">
      ${token}
    </div>
    <p style="color: #dc3545;"><strong>Do not share this token with anyone.</strong></p>
    <p>If you didn’t request this, you can safely ignore this email.</p>
    <hr style="margin: 20px 0;">
    <p style="font-size: 12px; color: #6c757d;">Need help? Contact our support team.</p>
    <p style="font-size: 12px; color: #6c757d;">© ${new Date().getFullYear()} RespecTech. All rights reserved.</p>
  </div>`,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendResetPasswordSuccessEmail(name: string, to: string) {
    const mailOptions = {
      from: 'RespecTech-HR Service',
      to,
      subject: 'Password Reset Successful',
      html: `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 24px; border: 1px solid #eee; border-radius: 8px;">
    <h2 style="color: #198754;">Password Reset Successful</h2>
    <p>Hello ${name},</p>
    <p>This is to confirm that your password has been successfully reset.</p>

    <p>If you made this change, no further action is required.</p>

    <p style="color: #dc3545;"><strong>If you did not reset your password, please contact our support team immediately.</strong></p>

    <hr style="margin: 24px 0;">
    <p style="font-size: 12px; color: #6c757d;">For security, always keep your login information private.</p>
    <p style="font-size: 12px; color: #6c757d;">© ${new Date().getFullYear()} RespecTech. All rights reserved.</p>
  </div>`,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendBankAccountAssignmentNotification(
    to: string,
    accountCode: string,
    staffName: string,
    companyName: string,
  ) {
    const mailOptions = {
      from: 'RespecTech-HR Service',
      to,
      subject: `You've been assigned to a bank account – ${accountCode}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0d6efd; text-align: center;">You've Been Assigned to a Bank Account</h2>
      
          <p>Hello ${staffName},</p>
      
          <p>
            You have been successfully assigned to manage a bank account within <strong>${companyName}</strong>'s financial system.
          </p>
      
          <div style="background: #f8f9fa; padding: 16px; font-size: 18px; font-weight: bold; text-align: center; border: 1px dashed #0d6efd; border-radius: 4px; margin: 20px 0;">
            Account Code: ${accountCode}
          </div>
      
          <p>
            Please log in to your dashboard to begin managing transactions, uploading statements, and performing reconciliation as required.
          </p>
      
          <p style="color: #dc3545;"><strong>Do not share this email or account details with anyone.</strong></p>
      
          <hr style="margin: 24px 0;">
          <p style="font-size: 12px; color: #6c757d;">
            This message was sent by ${companyName}'s Financial Reconciliation System. For support, contact your administrator.
          </p>
          <p style="font-size: 12px; color: #6c757d;">© ${new Date().getFullYear()} ${companyName}. All rights reserved.</p>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
