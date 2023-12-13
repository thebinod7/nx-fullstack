import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
	constructor(private mailerService: MailerService) {}

	async sendOTPMail(context: any) {
		await this.mailerService.sendMail({
			to: context.to,
			subject: context.subject || 'Subject not sent',
			template: context.template,
			context: {
				name: context.name,
				otp: context.otp,
			},
		});
	}
}
