import { TimeInOutCalc } from '../models';

export function timeDisplayFormatter(timeBlockCalc: TimeInOutCalc): string {
  try {
    const { hours, minutes } = timeBlockCalc;
    const hourDisplay = hours > 0 ? `${hours}h` : '';
    const minuteDisplay = minutes > 0 ? `${minutes}m` : '';
    return [hourDisplay, minuteDisplay].join(' ').trim();
  } catch (exception) {
    return '';
  }
}
