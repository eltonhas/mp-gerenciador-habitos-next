export function getDaysInMonth(year: number, month: number): (Date | null)[] {
  const daysInCalendar: (Date | null)[] = []

  // Obter o primeiro dia e o último dia do mês atual
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)

  // Verificar o dia da semana do primeiro dia do mês
  const firstWeekdayOfMonth = firstDayOfMonth.getDay()

  // Preencher os espaços com null para completar a primeira semana
  for (let i = 0; i < firstWeekdayOfMonth; i++) {
    daysInCalendar.push(null)
  }

  // Adicionar os dias do mês atual
  for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
    daysInCalendar.push(new Date(year, month, day))
  }

  return daysInCalendar
}
