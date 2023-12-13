import { Controller, Get, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import {
	AbilitiesGuard,
	CheckAbilities,
	JwtGuard,
} from '@rumsan-prisma/rumsan-user';

@Controller('app')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@CheckAbilities({ action: 'read', subject: 'user' })
	@UseGuards(JwtGuard, AbilitiesGuard)
	@Get()
	getData() {
		return this.appService.getData();
	}
}
