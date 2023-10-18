import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signup: SignupDto): Promise<{ token: string }> {
    return this.authService.signUp(signup);
  }

  @Get('/login')
  login(@Body() login: LoginDto): Promise<{ token: string }> {
    return this.authService.login(login);
  }
}
