import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionEntity } from 'src/entities/propositions.entity';

@Controller('propositions')
export class PropositionController {
  constructor(private readonly propositionService: PropositionService) {}

  @Get()
  findAll(): Promise<PropositionEntity[]> {
    return this.propositionService.findAll();
  }

  @Post()
  async create(phrase: string): Promise<PropositionEntity> {
    return await this.propositionService.create(phrase);
  }

  @Put()
  update(id: number, categoryId: number): Promise<void> {
    return this.propositionService.update(id, categoryId);
  }

  @Delete()
  removeAll(): Promise<void> {
    return this.propositionService.removeAll();
  }
}
