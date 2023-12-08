import { Module } from '@nestjs/common';
import { RsUserModule } from '@nx-verse/rs-user';
import { PrismaDbModule, PrismaService } from '@nx-verse/prisma-db';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaDbModule, RsUserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
