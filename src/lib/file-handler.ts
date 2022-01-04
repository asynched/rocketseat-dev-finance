import { get } from 'svelte/store'
import { expenseStore } from '@/stores'

export const handleDownload = (data: string, filename: string) => {
  const link = document.createElement('a')

  const encodedURI = encodeURI(data)
  link.setAttribute('href', encodedURI)
  link.setAttribute('download', filename)

  document.body.appendChild(link)
  link.click()

  setTimeout(() => {
    document.body.removeChild(link)
  }, 50)
}

export const downloadIncomeRegisters = (expenses: IncomeRegisterType[]) => {
  const parseItem = ({ date, ...rest }: IncomeRegisterType) => ({
    ...rest,
    date: formatDate(date),
  })
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR').format(date)
  }
  const addSeparator = (source: string[]) => source.join(',')

  const keys = ['title', 'price', 'category', 'date'].join(',') + '\n'
  const values = expenses
    .map(parseItem)
    .map(Object.values)
    .map(addSeparator)
    .join('\n')

  const csv = keys + values
  const data = 'data:text/csv;charset=utf-8' + csv

  handleDownload(data, 'expenses.csv')
}
