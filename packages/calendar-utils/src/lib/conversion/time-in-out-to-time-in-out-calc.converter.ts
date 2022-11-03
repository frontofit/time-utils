import { TimeInOut, TimeInOutCalc } from '../models';

export function timeInOutToTimeInOutCalcConverter(
  timeInOut: TimeInOut
): TimeInOutCalc | null {
  try {
    const { timeIn, timeOut } = timeInOut;

    if (!!timeIn && !!timeOut) {
      const timeInMs = timeIn.getTime();
      const timeOutMs = timeOut.getTime();

      // Return null when end time is before start time.
      if (timeOutMs < timeInMs) {
        return null;
      }

      const x = timeOutMs - timeInMs;
      const y = 60 * 60 * 1000;
      const h = Math.floor(x / y);
      const m = (x - h * y) / (y / 60);

      return {
        hours: h,
        minutes: m,
      };
    } else {
      return null;
    }
  } catch (exception) {
    return null;
  }
}
