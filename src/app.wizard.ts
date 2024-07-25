import { Action, Context, Wizard, WizardStep } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';
import { Buttons } from './app.buttons';
import { PropositionService } from './propositions/proposition.service';

@Wizard('proposition')
export class PropositionWizard {
  private propositionId: number;

  constructor(
    private readonly buttons: Buttons,
    private readonly propositionService: PropositionService,
  ) {}

  @WizardStep(1)
  async writeProposition(@Context() ctx: Scenes.WizardContext) {
    ctx.reply('Введіть Вашу фразу і ми її розглянемо.');
    ctx.wizard.next();
  }

  @WizardStep(2)
  async sendProposition(@Context() ctx: Scenes.WizardContext) {
    if ('text' in ctx.message) {
      const proposal = ctx.message.text;
      const proposition = await this.propositionService.create(proposal);
      this.propositionId = proposition.id;
      await ctx.reply(
        'Дякую! Тепер можете обрати категорію, куди її віднести. Якщо категорія обрана не буде - ми оберемо її самі.',
        await this.buttons.categoryButtons(),
      );
    } else {
      await ctx.reply('Ви ж нічо не написали...');
    }

    ctx.wizard.next();
  }

  @WizardStep(3)
  async saveProposition(@Context() ctx: Scenes.WizardContext) {
    await ctx.reply('Ваша пропозиція буде розглянута найблищим часом.');
    return ctx.scene.leave();
  }

  @Action(/category(\d+)/)
  async saveCategory(ctx: Scenes.WizardContext): Promise<void> {
    const callbackData = (ctx.callbackQuery as { data: string }).data;
    const match = callbackData.match(/category(\d+)/);
    const categoryId = match ? match[1] : null;
    await this.propositionService.update(
      this.propositionId,
      Number(categoryId),
    );
  }
}
