import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthModule],
  imports: [AuthModule],
})
export class RsUserModule {}
