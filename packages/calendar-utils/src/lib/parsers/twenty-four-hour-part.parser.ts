import { TwentyFourHourParts } from '../models';

export function twentyFourHourPartParser(value: string): TwentyFourHourParts {
  const _value = value.toLowerCase();
  const payload = new TwentyFourHourParts();
  const parts = _value.trim().split(':');
  payload.hour = parseInt(parts[0], 10);
  payload.minute = parseInt(parts[1], 10);
  return payload;
}
