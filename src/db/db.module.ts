import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseEntity } from 'src/entities/phrases.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [PhraseEntity],
      synchronize: true,
    }),
    // TypeOrmModule.forFeature([PhraseEntity]),
  ],
})
export class DatabaseModule {}

console.log(process.env.DB_HOST, ' ', process.env.DB_PASSWORD);
