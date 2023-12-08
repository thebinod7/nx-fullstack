import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PrismaDbModule, PrismaService } from '@nx-verse/prisma-db';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthModule],
  imports: [PrismaDbModule, AuthModule],
})
export class RsUserModule {}
