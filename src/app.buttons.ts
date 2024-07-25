import { Markup } from 'telegraf';
import { CategoryService } from './categories/category.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Buttons {
  constructor(private readonly categoryService: CategoryService) {}

  actionButtons() {
    return Markup.inlineKeyboard([
      Markup.button.callback('Запропонувати', 'propose'),
      Markup.button.callback('Зрандомити', 'getRandom'),
      Markup.button.callback('Весь список', 'allList'),
    ]);
  }

  async categoryButtons() {
    const categories = await this.categoryService.findAll();
    let arrayNum = 0;
    const rowOfButtons = [[]];

    categories.forEach((value, index) => {
      if (index % 3 !== 0) {
        rowOfButtons[arrayNum].push(
          Markup.button.callback(value.name, `category${value.id}`),
        );
      } else {
        rowOfButtons.push([]);
        arrayNum += 1;
        rowOfButtons[arrayNum].push(
          Markup.button.callback(value.name, `category${value.id}`),
        );
      }
    });

    return Markup.inlineKeyboard(rowOfButtons);
  }
}
