import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'propositions' })
export class PropositionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phrase: string;

  @Column({ nullable: true })
  categoryId?: number;
}
