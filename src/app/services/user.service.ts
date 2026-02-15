import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/user/create-user.dto';
//repositories
import { UserRepository } from '../repositories/user.repository';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  getAllUsers(user) {
    const account = user.account
    return this.userRepository.getAll(account);
  }
  getUserById(id: string) {
    return this.userRepository.getById(id);
  }
  async createUser(user: any) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    return this.userRepository.create(user);
  }
  updateUser(id: string, user: any) {
    return this.userRepository.update(id, user);
  }
  deleteUser(id: string) {
    return this.userRepository.delete(id);
  }
}