import { Module } from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionController } from './proposition.controller';
import { DatabaseModule } from '../db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropositionEntity } from 'src/entities/propositions.entity';
@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([PropositionEntity])],
  controllers: [PropositionController],
  providers: [PropositionService],
  exports: [PropositionService],
})
export class PropositionsModule {}
