import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { DatabaseModule } from '../db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/entities/categories.entity';
@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([CategoriesEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoriesModule {}
