export function getCurrentWeekDates(): string[] {
  const today = new Date()
  const firstDayOfWeek = today.getDate() - today.getDay()
  const datesOfWeek: string[] = []

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today)
    currentDate.setDate(firstDayOfWeek + i)
    const formattedDate = currentDate.toISOString().split('T')[0]
    datesOfWeek.push(formattedDate)
  }

  return datesOfWeek
}
