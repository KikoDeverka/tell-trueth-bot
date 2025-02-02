import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
// import * as LocalSession from 'telegraf-session-local';
import { ConfigModule } from '@nestjs/config';
import { PhrasesModule } from './phrases/phrase.module';
import { UsersModule } from './users/user.module';
import { DatabaseModule } from './db/db.module';
import { PropositionWizard } from './app.wizard';
import { session } from 'telegraf';
import { CategoriesModule } from './categories/category.module';
import { Buttons } from './app.buttons';
import { PropositionsModule } from './propositions/proposition.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
      middlewares: [session()],
    }),
    DatabaseModule,
    PhrasesModule,
    CategoriesModule,
    UsersModule,
    PropositionsModule,
  ],
  providers: [AppService, AppUpdate, PropositionWizard, Buttons],
  exports: [Buttons],
})
export class AppModule {}
