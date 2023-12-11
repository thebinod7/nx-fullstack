import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { SignupDto } from '../auth/dto';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { JwtGuard } from '../auth/guard';

// @UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  createRole(@Body() dto: SignupDto) {
    return this.userService.createUser(dto);
  }

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    if (user.otp) delete user.otp;
    return user;
  }

  //   @HttpCode(HttpStatus.OK)
  //   @Patch('profile')
  //   updateProfile(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
  //     return this.userService.updateProfile(+userId, dto);
  //   }
  @HttpCode(HttpStatus.OK)
  @Get('')
  listAll() {
    return this.userService.listUsers();
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':userId')
  editUser(@Param('userId') userId: number, @Body() dto: EditUserDto) {
    return this.userService.updateProfile(+userId, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':userId')
  deleteUser(@Param('userId') userId: number) {
    return this.userService.deleteUser(+userId);
  }
}
