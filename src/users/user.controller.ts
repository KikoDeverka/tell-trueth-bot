import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersEntity } from 'src/entities/users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<UsersEntity[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(chat_id: number): Promise<void> {
    return await this.userService.create(chat_id);
  }
}
