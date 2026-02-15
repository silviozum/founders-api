import { IsEmail, IsNotEmpty, MinLength, IsString, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsEmail({}, { message: 'Invalid email' })
  @IsString({ message: 'Email must be a string' })
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsString({ message: 'Password must be a string' })
  password: string;

  @IsString({ message: 'Role must be a string' })
  @IsIn(['superadmin', 'admin', 'user'], { message: 'Role must be either superadmin, admin or user' })
  role: 'superadmin' | 'admin' | 'user';

  @IsString({ message: 'Profile picture must be a string' })
  profile_pic: string;

  @IsNotEmpty({ message: 'Account ID is required' })
  @IsString({ message: 'Account ID must be a string' })
  accountId: string;
}
