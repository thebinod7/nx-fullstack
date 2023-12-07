import { Module } from '@nestjs/common';
import { RsUserModule } from '@nx-verse/rs-user';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RsUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
