import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from 'src/entities/categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private readonly categoryRepository: Repository<CategoriesEntity>,
  ) {}

  findAll(): Promise<CategoriesEntity[]> {
    return this.categoryRepository.find();
  }

  create(text: string): Promise<CategoriesEntity[]> {
    this.categoryRepository.create({
      name: text,
    });
    return this.findAll();
  }
}
