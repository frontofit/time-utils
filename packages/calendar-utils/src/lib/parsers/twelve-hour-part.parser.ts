import { TwelveHourParts } from '../models';

export function twelveHourPartParser(value: string): TwelveHourParts {
  const _value = value.toLowerCase();
  const payload = new TwelveHourParts();
  const parts = _value.trim().split(':');
  payload.hour = parseInt(parts[0], 10);
  payload.minute = parseInt(parts[1], 10);
  payload.isMorning = parts[1].indexOf('am') > -1;
  return payload;
}
