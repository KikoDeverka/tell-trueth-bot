import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'phrases' })
export class PhraseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phrase: string;

  @Column()
  type: string;

  @Column()
  subtype: string;
}
