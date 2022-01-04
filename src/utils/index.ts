export const parseData = (data: IncomeRegisterType[]) => {
  const getPrice = (item: IncomeRegisterType) => item.price
  const sum = (total: number, current: number) => total + current
  const filterPositive = (item: IncomeRegisterType) => item.price >= 0
  const filterNegative = (item: IncomeRegisterType) => !filterPositive(item)

  return {
    income: data.filter(filterPositive).map(getPrice).reduce(sum, 0),
    expenses: data.filter(filterNegative).map(getPrice).reduce(sum, 0),
    total: data.map(getPrice).reduce(sum, 0),
    items: data,
  }
}
