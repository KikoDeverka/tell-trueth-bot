import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'phrases' })
export class PhraseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  phrase: string;

  @Column({ type: 'text' })
  type: string;

  @Column({ type: 'text' })
  subtype: string;
}
