export const formatPrice = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatter.format(value)
}

export const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('pt-BR')

  return formatter.format(date)
}
