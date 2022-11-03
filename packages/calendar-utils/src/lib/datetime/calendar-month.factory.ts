import { calendarDateFactory } from './calendar-date.factory';
import { generateEmptyArray } from '../utils/generate-empty-array.util';

export function calendarMonthFactory(month: number, year: number): Array<Date> {
  const startingDate = calendarDateFactory(1, month, year);
  const dayOfWeekOffset = startingDate.getDay();
  return generateEmptyArray(42)
    .map((item: string, index: number) => {
      return index + 1 - dayOfWeekOffset;
    })
    .map((currentDate: number) => {
      return calendarDateFactory(currentDate, month, year);
    });
}
