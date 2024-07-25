import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from 'src/entities/categories.entity';
import { PhraseService } from 'src/phrases/phrase.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private readonly categoryRepository: Repository<CategoriesEntity>,
    private readonly phraseService: PhraseService,
  ) {}

  findAll(): Promise<CategoriesEntity[]> {
    return this.categoryRepository.find();
  }

  create(text: string): Promise<void> {
    const newCategory = this.categoryRepository.create({
      name: text,
    });

    this.categoryRepository.save(newCategory);
    return;
  }

  removeAll(): Promise<void> {
    this.phraseService.removeAll();
    this.categoryRepository.delete({});
    return;
  }
}
