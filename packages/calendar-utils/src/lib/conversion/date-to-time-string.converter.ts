import { singleDigitToDoubleDigitStringConverter } from './single-digit-to-double-digit-string.converter';

export function dateToTimeStringConverter(value: Date): string {
  try {
    const currentHour = value.getHours();
    const currentMinute = value.getMinutes();
    const isMorning = currentHour >= 0 && currentHour < 12;

    const convertedHour = isMorning ? currentHour : currentHour - 12;
    const displayHour = convertedHour === 0 ? '12' : convertedHour;

    return `${displayHour}:${singleDigitToDoubleDigitStringConverter(
      currentMinute
    )}${isMorning ? 'am' : 'pm'}`;
  } catch (exception) {
    return '';
  }
}
