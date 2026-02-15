import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

// controllers
import { UserController } from './controllers/user.controller';
import { LoginController } from './controllers/login.controller';
import { AccountController } from './controllers/account.controller';

// services
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { AccountService } from './services/account.service';

// repositories
import { UserRepository } from './repositories/user.repository';
import { AccountRepository } from './repositories/account.repository';

// prisma
import { PrismaModule } from '../../prisma/prisma.module';

// auth
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),

    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [
    UserController,
    LoginController,
    AccountController,
  ],
  providers: [
    UserService,
    UserRepository,
    LoginService,
    AccountService,
    AccountRepository,

    JwtStrategy,
  ],
})
export class AppModule {}
