import { cleanDateFactory } from './clean-date.factory';
import { calendarDateFactory } from './calendar-date.factory';
import { generateEmptyArray } from '../utils';

export function calendarWeekFactory(refDate: Date = new Date()): Array<Date> {
  try {
    const cleanRefDate = cleanDateFactory(refDate);
    const dayOfWeekOffset = cleanRefDate.getDay();
    const refDateDate = cleanRefDate.getDate();
    const refDateMonth = cleanRefDate.getMonth() + 1;
    const refDateYear = cleanRefDate.getFullYear();

    return generateEmptyArray(7)
      .map((item: string, index: number) => {
        return refDateDate - dayOfWeekOffset + index;
      })
      .map((currentDate: number) => {
        return calendarDateFactory(currentDate, refDateMonth, refDateYear);
      });
  } catch (exception) {
    console.error(exception);
    return [];
  }
}
