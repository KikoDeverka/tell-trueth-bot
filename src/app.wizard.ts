import { Context, Wizard, WizardStep } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';

@Wizard('proposition')
export class PropositionWizard {
  @WizardStep(1)
  async writeProposition(@Context() ctx: Scenes.WizardContext) {
    ctx.reply('Введіть Вашу фразу і ми її розглянемо.');
    ctx.wizard.next();
  }

  @WizardStep(2)
  async sendProposition(@Context() ctx: Scenes.WizardContext) {
    if ('text' in ctx.message) {
      const proposal = ctx.message.text;
      console.log(proposal);
      ctx.reply(
        'Дякую! Тепер можете обрати категорію, куди її віднести. Якщо категорія обрана не буде - ми оберемо її самі.',
      );
    } else {
      await ctx.reply('Ви ж нічо не написали...');
    }

    return ctx.scene.leave();
  }
}
