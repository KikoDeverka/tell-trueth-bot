import { Module } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { PhraseController } from './phrase.controller';
import { DatabaseModule } from '../db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseEntity } from 'src/entities/phrases.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([PhraseEntity])],
  controllers: [PhraseController],
  providers: [PhraseService],
  exports: [PhraseService],
})
export class PhrasesModule {}
