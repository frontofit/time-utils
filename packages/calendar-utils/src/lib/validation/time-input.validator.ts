import { checkIs12HourTimeValidator } from './check-is-12-hour-time.validator';
import { checkIs24HourTimeValidator } from './check-is-24-hour-time.validator';

export function timeInputValidator(value: string): boolean {
  const is12HourTime = checkIs12HourTimeValidator(value);
  const is24HourTime = checkIs24HourTimeValidator(value);
  return is12HourTime || is24HourTime;
}
