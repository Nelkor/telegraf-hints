import { Telegraf } from 'telegraf'

import { token } from '@/token'
import { setBot } from '@/bot-engine'

const bot = new Telegraf(token)

setBot(bot)

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
