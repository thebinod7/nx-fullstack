import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'Hello from Signup!';
  }
}