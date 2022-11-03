import { twelveHourPartsToDateConverter } from './twelve-hour-parts-to-date.converter';
import { TwelveHourParts } from '../models';
import { cleanMinuteDateFactory } from '../datetime';

describe('twelveHourPartsToDateConverter', () => {
  it('should be defined', () => {
    expect(twelveHourPartsToDateConverter).toBeDefined();
  });

  it('should convert twelve hour parts to time', () => {
    const parts: TwelveHourParts = { hour: 1, minute: 0, isMorning: false };
    const expected = cleanMinuteDateFactory();
    expected.setHours(13);
    expected.setMinutes(0);
    expect(twelveHourPartsToDateConverter(parts)).toEqual(expected);
  });

  it('should return null if input is null', () => {
    // @ts-ignore
    expect(twelveHourPartsToDateConverter(null)).toEqual(null);
  });

  it('should return null if input is undefined', () => {
    // @ts-ignore
    expect(twelveHourPartsToDateConverter()).toEqual(null);
  });
});
