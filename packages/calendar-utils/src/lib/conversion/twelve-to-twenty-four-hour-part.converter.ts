import { TwelveHourParts, TwentyFourHourParts } from '../models';

export function twelveToTwentyFourHourPartConverter(
  value: TwelveHourParts
): TwentyFourHourParts {
  const payload = new TwentyFourHourParts();
  const { hour, minute, isMorning } = value;

  if (isMorning) {
    payload.hour = hour === 12 ? 0 : hour;
  } else {
    payload.hour = hour === 12 ? hour : hour + 12;
  }

  payload.minute = minute;
  return payload;
}
