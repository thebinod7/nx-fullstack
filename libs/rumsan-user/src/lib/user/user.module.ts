import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '@rumsan-prisma/prisma-db';

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService],
	exports: [UserService],
})
export class UserModule {}
