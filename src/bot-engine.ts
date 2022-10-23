import { Telegraf } from 'telegraf'

import { helpMessage, buttonsMessage } from '@/messages'
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

  bot.help(ctx => ctx.reply(helpMessage))
  bot.launch().then()
}
