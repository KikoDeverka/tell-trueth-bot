import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.inlineKeyboard([
    Markup.button.callback('Запропонувати', 'propose'),
    Markup.button.callback('Зрандомити', 'getRandom'),
  ]);
}
