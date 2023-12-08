import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nx-verse/prisma-db';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getData() {
    const d = await this.prisma.user.findMany();
    return { message: 'Hello API', data: d };
  }
}
