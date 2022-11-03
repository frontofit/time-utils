import { cleanMinuteDateFactory } from '../datetime';
import { twentyFourHourPartParser } from '../parsers';

export function twentyFourHourTimeParser(value: string, baseDate: Date): Date {
  const payload = cleanMinuteDateFactory(baseDate);
  const parts = twentyFourHourPartParser(value);
  const { hour, minute } = parts;
  payload.setHours(hour);
  payload.setMinutes(minute);
  return payload;
}
