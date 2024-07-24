import { Scenes, Context as TelegrafContext } from 'telegraf';

export interface WizardContext extends TelegrafContext {
  scene: Scenes.SceneContextScene<WizardContext>;
  //   wizard: Scenes.WizardContextWizard<WizardContext>;
}
