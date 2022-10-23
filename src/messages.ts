const wrap = (arr: string[]) => arr.join('\n')

export const helpMessage = wrap([
  '/start — перезапустить бота',
  '/help — помощь',
  '/buttons — посмотреть кнопки',
])

export const buttonsMessage = wrap([
  '<b>Заголовок сообщения</b>',
  '',
  'Обычный текст сообщения. Он <i>может</i> быть довольно <u>длинным</u>,' +
    ' это просто <s>рассказ</s> повествование',
  '',
  '<code>Нажми и скопируй</code>',
  '<a href="https://aviata.nelkor.kz">Сайт</a>',
])

export const firstActionMessage = wrap([
  'Зафиксировано успешное нажатие на первую кнопку!',
  'https://youtube.com',
])
