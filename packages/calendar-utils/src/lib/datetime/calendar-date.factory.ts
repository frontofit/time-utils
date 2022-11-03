import { cleanDateFactory } from './clean-date.factory';

export function calendarDateFactory(day: number, month: number, year: number) {
  const internalDate: Date = new Date();
  // need to set year first for daylight savings time calculations
  // very important!
  internalDate.setFullYear(year);
  internalDate.setMonth(month - 1);
  internalDate.setDate(day);

  return cleanDateFactory(internalDate);
}
