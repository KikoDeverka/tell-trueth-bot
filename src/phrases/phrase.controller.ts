import { Controller, Delete, Get, Post } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { PhraseEntity } from '../entities/phrases.entity';

@Controller('phrases')
export class PhraseController {
  constructor(private readonly phraseService: PhraseService) {}

  @Get()
  findAll(): Promise<PhraseEntity[]> {
    return this.phraseService.findAll();
  }

  @Post()
  create(text: string): Promise<PhraseEntity[]> {
    return this.phraseService.create(text);
  }

  @Delete()
  removeAll(): Promise<void> {
    return this.phraseService.removeAll();
  }
}
