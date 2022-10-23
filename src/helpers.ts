import { User } from 'telegraf/types'

export const getNameByUser = (user: User): string =>
  [user.is_premium && 'Premium', user.first_name, user.last_name]
    .filter(Boolean)
    .join(' ') || 'stranger'
