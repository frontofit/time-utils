import { TwentyFourHourParts } from '../models';
import { cleanMinuteDateFactory } from '../datetime';

export function twentyFourHourPartsToDateConverter(
  value: TwentyFourHourParts
): Date | null {
  if (!!value) {
    const _date = cleanMinuteDateFactory();
    _date.setHours(value.hour);
    _date.setMinutes(value.minute);
    return _date;
  } else {
    return null;
  }
}
