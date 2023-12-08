import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nx-verse/prisma-db';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  listRoles() {
    return this.prisma.role.findMany();
  }
  signup() {
    return 'Hello from Signup!';
  }
}
