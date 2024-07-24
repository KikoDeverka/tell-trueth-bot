import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PhraseEntity } from './phrases.entity';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chat_id: number;

  @OneToMany(() => PhraseEntity, (phrase) => phrase.id)
  usedPhrases: PhraseEntity[];
}
