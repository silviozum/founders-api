import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dtos/account/create-account.dto';
//repositories
import { AccountRepository } from '../repositories/account.repository';
@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}
  async createAccount(account: CreateAccountDto) {
    return this.accountRepository.create(account);
  }
}   