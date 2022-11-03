import {
  checkIs12HourTimeValidator,
  checkIs24HourTimeValidator,
} from '../validation';
import { twelveHourTimeParser, twentyFourHourTimeParser } from '../parsers';

export function dateFromInputParser(
  value: string,
  baseDate: Date
): Date | null {
  const _value = value.toLowerCase();

  if (checkIs24HourTimeValidator(_value)) {
    return twentyFourHourTimeParser(_value, baseDate);
  } else if (checkIs12HourTimeValidator(_value)) {
    return twelveHourTimeParser(_value, baseDate);
  } else {
    return null;
  }
}
