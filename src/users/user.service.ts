import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  findAll(): Promise<UsersEntity[]> {
    return this.userRepository.find();
  }

  async create(chat_id: number): Promise<void> {
    const isUserExist = await this.userRepository.findOne({
      where: { chat_id },
    });
    if (isUserExist) {
      return;
    }
    const newUser = this.userRepository.create({
      chat_id: chat_id,
    });
    this.userRepository.save(newUser);
  }

  delete(chat_id: number): Promise<void> {
    this.userRepository.delete({ chat_id });
    return;
  }
}
