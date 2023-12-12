import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PrismaDbModule, PrismaService } from '@nx-verse/prisma-db';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MailService } from './mail/mail.service';
import { AbilityModule } from './ability/ability.module';
import { RolesModule } from './roles/roles.module';
import { RolesService } from './roles/roles.service';

@Module({
	controllers: [AuthController, UserController],
	providers: [
		AuthService,
		PrismaService,
		UserService,
		JwtService,
		MailService,
		RolesService,
	],
	imports: [
		AbilityModule,
		ConfigModule.forRoot({ isGlobal: true }),
		PrismaDbModule,
		AuthModule,
		UserModule,
		RolesModule,
	],
	exports: [AuthModule, UserModule],
})
export class RsUserModule {}
