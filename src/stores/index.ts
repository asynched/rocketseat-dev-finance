import { parseData } from '@/utils'
import { writable } from 'svelte/store'

export const expenseStore = writable(
  parseData([
    {
      title: 'Desenvolvimento de site',
      price: 12000,
      category: 'income',
      date: new Date(),
    },
    {
      title: 'Hamburguer',
      price: -59,
      category: 'food',
      date: new Date(),
    },
    {
      title: 'Aluguel do apartamento',
      price: -1200,
      category: 'home',
      date: new Date(),
    },
  ])
)
