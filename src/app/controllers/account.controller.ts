import { Controller, Post, Body } from '@nestjs/common';
//dtos
import { CreateAccountDto } from '../dtos/account/create-account.dto';
//services
import { AccountService } from '../services/account.service';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.createAccount(createAccountDto);
  }
}