import { Controller, Get, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { JwtGuard } from '@rumsan-prisma/rumsan-user';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@UseGuards(JwtGuard)
	@Get()
	getData() {
		return this.appService.getData();
	}
}
