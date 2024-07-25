import { Action, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { WizardContext } from './app.context';
import { UserService } from './users/user.service';
import { Buttons } from './app.buttons';
import { CategoryService } from './categories/category.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
    private readonly buttons: Buttons,
  ) {}

  @Start()
  async startCommand(ctx: Context): Promise<void> {
    const chat_id = ctx.chat.id;
    this.userService.create(chat_id);
    this.categoryService.removeAll();
    this.categoryService.create('Напад');
    this.categoryService.create('Оборона');
    this.categoryService.create('Невизначеність');
    this.categoryService.create('Інша');

    await ctx.reply(
      'Вітаю! Як Ви бажаєте образити росіян сьогодні?',
      this.buttons.actionButtons(),
    );
  }

  @Action('propose')
  async proposeCommand(ctx: WizardContext): Promise<void> {
    await ctx.scene.enter('proposition');
  }
}
