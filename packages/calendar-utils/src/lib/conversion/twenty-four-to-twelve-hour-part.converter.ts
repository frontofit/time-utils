import { TwelveHourParts, TwentyFourHourParts } from '../models';

export function twentyFourToTwelveHourPartConverter(
  value: TwentyFourHourParts
): TwelveHourParts {
  const payload = new TwelveHourParts();
  const { hour, minute } = value;

  if (hour === 0) {
    payload.hour = 12;
    payload.isMorning = true;
  } else if (hour === 12) {
    payload.hour = 12;
    payload.isMorning = false;
  } else {
    if (hour < 12) {
      payload.hour = hour;
      payload.isMorning = true;
    } else {
      payload.hour = hour - 12;
      payload.isMorning = false;
    }
  }

  payload.minute = minute;
  return payload;
}
