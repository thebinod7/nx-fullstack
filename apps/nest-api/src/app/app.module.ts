import { Module } from '@nestjs/common';
import { join } from 'path';
import { RsUserModule } from '@nx-verse/rumsan-user';
import { PrismaDbModule, PrismaService } from '@nx-verse/prisma-db';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';

const STATIC_FILES_PATH = join(__dirname, 'assets');

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: STATIC_FILES_PATH,
		}),
		PrismaDbModule,
		RsUserModule,
	],
	controllers: [AppController],
	providers: [AppService, PrismaService],
})
export class AppModule {}
