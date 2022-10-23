import { Markup } from 'telegraf'
import { InlineKeyboardMarkup } from 'telegraf/types'

const createButton = (text: string, data: string) =>
  Markup.button.callback(text, data)

export const buttonsMarkup: Markup.Markup<InlineKeyboardMarkup> =
  Markup.inlineKeyboard([
    [createButton('Первая', 'btn-1'), createButton('Вторая', 'btn-2')],
    [createButton('Третья', 'btn-3')],
    [
      createButton('Четвёртая', 'btn-4'),
      createButton('Пятая', 'btn-5'),
      createButton('Шестая', 'btn-6'),
    ],
  ])
