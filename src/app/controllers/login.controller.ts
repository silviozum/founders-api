import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { LoginDto } from '../dtos/login/login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto.email, loginDto.password);
  }
}