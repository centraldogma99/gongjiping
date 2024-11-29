export const isDateExpired = (date: Date) => {
  const now = new Date()
  return !date || date.getTime() < resetTimeToMidnight(now).getTime()
}

export function resetTimeToMidnight(date: Date): Date {
  const newDate = new Date(date)
  newDate.setHours(0, 0, 0, 0)
  return newDate
}
