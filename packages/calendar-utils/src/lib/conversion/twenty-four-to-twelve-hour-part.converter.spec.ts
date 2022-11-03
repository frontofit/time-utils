import { TwelveHourParts, TwentyFourHourParts } from '../models';
import { twentyFourToTwelveHourPartConverter } from './twenty-four-to-twelve-hour-part.converter';

describe('convertTwentyFourToTwelveHourParts', () => {
  it('should be defined', () => {
    expect(twentyFourToTwelveHourPartConverter).toBeDefined();
  });

  it('should take twenty four hour parts for 00:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 0, minute: 0 };
    const expected: TwelveHourParts = { hour: 12, minute: 0, isMorning: true };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 03:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 3, minute: 0 };
    const expected: TwelveHourParts = { hour: 3, minute: 0, isMorning: true };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 06:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 6, minute: 0 };
    const expected: TwelveHourParts = { hour: 6, minute: 0, isMorning: true };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 06:01 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 6, minute: 1 };
    const expected: TwelveHourParts = { hour: 6, minute: 1, isMorning: true };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 09:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 9, minute: 0 };
    const expected: TwelveHourParts = { hour: 9, minute: 0, isMorning: true };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 12:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 12, minute: 0 };
    const expected: TwelveHourParts = { hour: 12, minute: 0, isMorning: false };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 15:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 15, minute: 0 };
    const expected: TwelveHourParts = { hour: 3, minute: 0, isMorning: false };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 18:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 18, minute: 0 };
    const expected: TwelveHourParts = { hour: 6, minute: 0, isMorning: false };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 21:00 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 21, minute: 0 };
    const expected: TwelveHourParts = { hour: 9, minute: 0, isMorning: false };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should take twenty four hour parts for 23:59 and return twelve hour equivalent', () => {
    const input: TwentyFourHourParts = { hour: 23, minute: 59 };
    const expected: TwelveHourParts = {
      hour: 11,
      minute: 59,
      isMorning: false,
    };
    const result = twentyFourToTwelveHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });
});
