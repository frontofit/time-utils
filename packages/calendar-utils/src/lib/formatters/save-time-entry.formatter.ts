import { TimeInOut } from '../models';
import { getMsTimeFromDate } from '../utils';

export function saveTimeEntryFormatter(
  value: Array<TimeInOut> = []
): Array<TimeInOut> {
  return value
    .filter((item: TimeInOut) => {
      try {
        const { timeIn, timeOut } = item;
        return !(timeIn === null && timeOut === null);
      } catch (exception) {
        return false;
      }
    })
    .sort((a: TimeInOut, b: TimeInOut) => {
      try {
        const timeStart = getMsTimeFromDate(a.timeIn); // a.timeIn!.getTime();
        const timeEnd = getMsTimeFromDate(b.timeOut); //.getTime();

        if (timeEnd === -1) {
          return 1;
        }

        if (timeStart < timeEnd) {
          return -1;
        }

        if (timeStart > timeEnd) {
          return 1;
        }

        return 0;
      } catch (exception) {
        return 0;
      }
    });
}
