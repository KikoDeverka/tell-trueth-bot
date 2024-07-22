import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhraseEntity } from '../entities/phrases.entity';

@Injectable()
export class PhraseService {
  constructor(
    @InjectRepository(PhraseEntity)
    private readonly phraseRepository: Repository<PhraseEntity>,
  ) {}

  findAll(): Promise<PhraseEntity[]> {
    return this.phraseRepository.find();
  }
}
