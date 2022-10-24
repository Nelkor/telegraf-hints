import { Telegraf } from 'telegraf'

import { helpMessage, buttonsMessage, firstActionMessage } from '@/messages'
import { buttonsMarkup, keyboard } from '@/markups'
import { getNameByUser } from '@/helpers'

const buttonsHandler = Telegraf.command('buttons', ctx =>
  ctx.replyWithHTML(buttonsMessage, buttonsMarkup)
)

export const setBot = (bot: Telegraf) => {
  bot.start(ctx => {
    const { from } = ctx.message
    const name = getNameByUser(from)

    ctx.reply(`Hi ${name}, id${from.id}, lang ${from.language_code}`)
  })

  bot.command('buttons', buttonsHandler)

  bot.action('btn-1', ctx => {
    ctx
      .reply(firstActionMessage, {
        ['disable_web_page_preview']: true,
      })
      .then(() => ctx.answerCbQuery())
  })

  bot.action('btn-2', ctx => {
    ctx
      .replyWithPhoto({ source: './img/ibra.jpg' }, { caption: 'Ибрагим' })
      .then(() => ctx.answerCbQuery())
  })

  bot.action('btn-4', ctx => {
    ctx.answerCbQuery('Это сообщение супер важное!', { ['show_alert']: true })
  })

  bot.action('btn-5', ctx => {
    ctx.reply('Держи клавиатуру', keyboard).then(() => ctx.answerCbQuery())
  })

  bot.action('btn-6', ctx => {
    ctx
      .reply('Отмена клавиатуры', {
        ['reply_markup']: { ['remove_keyboard']: true },
      })
      .then(() => ctx.answerCbQuery())
  })

  bot.help(ctx => ctx.reply(helpMessage))
  bot.launch().then()
}
