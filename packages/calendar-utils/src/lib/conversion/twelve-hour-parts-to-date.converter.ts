import { TwelveHourParts } from '../models';
import { twelveToTwentyFourHourPartConverter } from '../conversion';
import { cleanMinuteDateFactory } from '../datetime';

export function twelveHourPartsToDateConverter(
  value: TwelveHourParts
): Date | null {
  if (!!value) {
    const _parts = twelveToTwentyFourHourPartConverter(value);
    const _date = cleanMinuteDateFactory();
    _date.setHours(_parts.hour);
    _date.setMinutes(_parts.minute);
    return _date;
  } else {
    return null;
  }
}
