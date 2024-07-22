import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PhraseEntity } from '../entities/phrases.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      // entities: [PhraseEntity],
      autoLoadEntities: true,
      // entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    // TypeOrmModule.forFeature([PhraseEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
