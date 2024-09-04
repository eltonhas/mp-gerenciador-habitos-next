export function isFucture(date: Date): boolean {
  const today = new Date()

  today.setHours(0, 0, 0, 0)
  date.setHours(0, 0, 0, 0)

  return date > today
}
