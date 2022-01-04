export type IconType = 'income' | 'expense' | 'home' | 'recurring' | string

export const getIcon = (type: IconType) => {
  switch (type) {
    case 'food':
      return '/static/icons/food.svg'
    case 'expense':
      return '/static/icons/expense.svg'
    case 'home':
      return '/static/icons/home.svg'
    case 'income':
      return '/static/icons/income.svg'
    case 'recurring':
      return '/static/icons/refresh.svg'
    default:
      return '/static/null'
  }
}
