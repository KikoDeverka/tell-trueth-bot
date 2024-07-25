import { Controller, Delete, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoriesEntity } from 'src/entities/categories.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<CategoriesEntity[]> {
    return this.categoryService.findAll();
  }

  @Post()
  create(text: string): Promise<void> {
    return this.categoryService.create(text);
  }

  @Delete()
  removeAll(): Promise<void> {
    return this.categoryService.removeAll();
  }
}
