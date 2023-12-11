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

@Module({
  controllers: [AuthController, UserController],
  providers: [AuthService, PrismaService, UserService, JwtService, MailService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaDbModule,
    AuthModule,
    UserModule,
  ],
  exports: [AuthModule, UserModule],
})
export class RsUserModule {}
