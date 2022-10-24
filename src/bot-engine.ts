import { Telegraf } from 'telegraf'

import { helpMessage, buttonsMessage, firstActionMessage } from '@/messages'
import { buttonsMarkup } from '@/markups'
import { getNameByUser } from '@/helpers'

export const setBot = (bot: Telegraf) => {
  bot.start(ctx => {
    const { from } = ctx.message
    const name = getNameByUser(from)

    ctx.reply(`Hi ${name}, id${from.id}, lang ${from.language_code}`)
  })

  bot.command('buttons', ctx =>
    ctx.replyWithHTML(buttonsMessage, buttonsMarkup)
  )

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

  bot.help(ctx => ctx.reply(helpMessage))
  bot.launch().then()
}
