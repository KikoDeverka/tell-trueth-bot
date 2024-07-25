import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropositionEntity } from 'src/entities/propositions.entity';

@Injectable()
export class PropositionService {
  constructor(
    @InjectRepository(PropositionEntity)
    private readonly propositionRepository: Repository<PropositionEntity>,
  ) {}

  findAll(): Promise<PropositionEntity[]> {
    return this.propositionRepository.find();
  }

  async create(phrase: string): Promise<PropositionEntity> {
    const newProposition = await this.propositionRepository.create({
      phrase: phrase,
    });

    return await this.propositionRepository.save(newProposition);
  }

  async update(id: number, categoryId: number): Promise<void> {
    const proposition = await this.propositionRepository.findOneBy({ id });
    proposition.categoryId = categoryId;
    await this.propositionRepository.save(proposition);
  }

  removeAll(): Promise<void> {
    this.propositionRepository.delete({});
    return;
  }
}
