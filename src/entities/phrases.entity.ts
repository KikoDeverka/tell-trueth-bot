import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoriesEntity } from './categories.entity';

@Entity({ name: 'phrases' })
export class PhraseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phrase: string;

  @ManyToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'categoryId' })
  category: CategoriesEntity;

  @Column()
  categoryId: number;
}
