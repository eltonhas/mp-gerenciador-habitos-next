export function createSlug(habit: string): string {
  habit = habit.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  habit = habit.toLowerCase()

  habit = habit.replace(/[^a-z0-9\s-]/g, '')

  habit = habit.replace(/\s+/g, '-')

  habit = habit.replace(/-+/g, '-')

  habit = habit.replace(/^-+|-+$/g, '')

  return habit
}
