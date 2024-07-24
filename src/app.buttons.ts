import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.inlineKeyboard([
    Markup.button.callback('Запропонувати', 'propose'),
    Markup.button.callback('Зрандомити', 'getRandom'),
    Markup.button.callback('Весь список', 'allList'),
  ]);
}

export function categoryButtons() {
  // get categories from database
  // ----
  // return Markup.inlineKeyboard([
  //   Markup.button.callback('Запропонувати', 'propose'),
  //   Markup.button.callback('Зрандомити', 'getRandom'),
  //   Markup.button.callback('Весь список', 'allList'),
  // ]);
}
