import { TwelveHourParts, TwentyFourHourParts } from '../models';
import { twelveToTwentyFourHourPartConverter } from './twelve-to-twenty-four-hour-part.converter';

describe('convertTwelveToTwentyFourHourParts', () => {
  it('should be defined', () => {
    expect(twelveToTwentyFourHourPartConverter).toBeDefined();
  });

  it('should take twelve hour parts for 12:00am and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 12, minute: 0, isMorning: true };
    const expected: TwentyFourHourParts = { hour: 0, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 12:01am and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 12, minute: 1, isMorning: true };
    const expected: TwentyFourHourParts = { hour: 0, minute: 1 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 3:00am and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 3, minute: 0, isMorning: true };
    const expected: TwentyFourHourParts = { hour: 3, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 6:00am and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 6, minute: 0, isMorning: true };
    const expected: TwentyFourHourParts = { hour: 6, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 6:01am and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 6, minute: 1, isMorning: true };
    const expected: TwentyFourHourParts = { hour: 6, minute: 1 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 9:00am and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 9, minute: 0, isMorning: true };
    const expected: TwentyFourHourParts = { hour: 9, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 12:00pm and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 12, minute: 0, isMorning: false };
    const expected: TwentyFourHourParts = { hour: 12, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 12:01pm and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 12, minute: 1, isMorning: false };
    const expected: TwentyFourHourParts = { hour: 12, minute: 1 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 3:00pm and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 3, minute: 0, isMorning: false };
    const expected: TwentyFourHourParts = { hour: 15, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 6:00pm and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 6, minute: 0, isMorning: false };
    const expected: TwentyFourHourParts = { hour: 18, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 9:00pm and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 9, minute: 0, isMorning: false };
    const expected: TwentyFourHourParts = { hour: 21, minute: 0 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 9:01pm and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 9, minute: 1, isMorning: false };
    const expected: TwentyFourHourParts = { hour: 21, minute: 1 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('should take twelve hour parts for 11:59pm and return twenty four hour equivalent', () => {
    const input: TwelveHourParts = { hour: 11, minute: 59, isMorning: false };
    const expected: TwentyFourHourParts = { hour: 23, minute: 59 };
    const result = twelveToTwentyFourHourPartConverter(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });
});
