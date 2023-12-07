import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('')
  signup() {
    return this.authService.signup();
  }

  @Get('')
  listUsers() {
    return 'I am user list!';
  }
}
