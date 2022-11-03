import { twentyFourHourPartsToDateConverter } from './twenty-four-hour-parts-to-date.converter';
import { TwentyFourHourParts } from '../models';
import { cleanMinuteDateFactory } from '../datetime';

describe('twentyFourHourPartsToDate', () => {
  it('should be defined', () => {
    expect(twentyFourHourPartsToDateConverter).toBeDefined();
  });

  it('should return a date for the correct input', () => {
    const parts: TwentyFourHourParts = { hour: 13, minute: 32 };
    const expected = cleanMinuteDateFactory();
    expected.setHours(13);
    expected.setMinutes(32);
    expect(twentyFourHourPartsToDateConverter(parts)).toEqual(expected);
  });

  it('should return null if input is null', () => {
    // @ts-ignore
    expect(twentyFourHourPartsToDateConverter(null)).toEqual(null);
  });

  it('should return null if input is undefined', () => {
    // @ts-ignore
    expect(twentyFourHourPartsToDateConverter()).toEqual(null);
  });
});
