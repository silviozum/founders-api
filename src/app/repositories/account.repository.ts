import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateAccountDto } from '../dtos/account/create-account.dto'; 

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateAccountDto) {
    return this.prisma.account.create({
      data: {
        ...data,
      },
    });
  }
}