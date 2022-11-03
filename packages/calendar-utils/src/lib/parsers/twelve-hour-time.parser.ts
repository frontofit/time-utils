import { cleanMinuteDateFactory } from '../datetime';
import { twelveHourPartParser } from '../parsers';
import { twelveToTwentyFourHourPartConverter } from '../conversion';

export function twelveHourTimeParser(value: string, baseDate: Date): Date {
  const payload = cleanMinuteDateFactory(baseDate);
  const parts = twelveHourPartParser(value);
  const converted = twelveToTwentyFourHourPartConverter(parts);
  const { hour, minute } = converted;
  payload.setHours(hour);
  payload.setMinutes(minute);
  return payload;
}
