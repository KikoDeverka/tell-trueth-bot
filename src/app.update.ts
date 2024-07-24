import { Action, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { actionButtons } from './app.buttons';
import { WizardContext } from './app.context';
import { UserService } from './users/user.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly userService: UserService,
  ) {}

  @Start()
  async startCommand(ctx: Context): Promise<void> {
    const chat_id = ctx.chat.id;
    this.userService.create(chat_id);

    await ctx.reply(
      'Вітаю! Як Ви бажаєте образити росіян сьогодні?',
      actionButtons(),
    );
  }

  @Action('propose')
  async proposeCommand(ctx: WizardContext): Promise<void> {
    await ctx.scene.enter('proposition');
  }
}
