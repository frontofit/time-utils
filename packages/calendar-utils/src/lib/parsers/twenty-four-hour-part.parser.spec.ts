import { twentyFourHourPartParser } from './twenty-four-hour-part.parser';
import { TwentyFourHourParts } from '../models';

describe('parseTwentyFourHourParts', () => {
  it('should be defined', () => {
    expect(twentyFourHourPartParser).toBeDefined();
  });

  it('return time parts for 00:00', () => {
    const input = '00:00';
    const expected: TwentyFourHourParts = { hour: 0, minute: 0 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 00:01', () => {
    const input = '00:01';
    const expected: TwentyFourHourParts = { hour: 0, minute: 1 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 03:01', () => {
    const input = '03:01';
    const expected: TwentyFourHourParts = { hour: 3, minute: 1 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 06:01', () => {
    const input = '06:01';
    const expected: TwentyFourHourParts = { hour: 6, minute: 1 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 09:01', () => {
    const input = '09:01';
    const expected: TwentyFourHourParts = { hour: 9, minute: 1 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 12:01', () => {
    const input = '12:01';
    const expected: TwentyFourHourParts = { hour: 12, minute: 1 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 15:01', () => {
    const input = '15:01';
    const expected: TwentyFourHourParts = { hour: 15, minute: 1 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 18:00', () => {
    const input = '18:00';
    const expected: TwentyFourHourParts = { hour: 18, minute: 0 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 21:01', () => {
    const input = '21:01';
    const expected: TwentyFourHourParts = { hour: 21, minute: 1 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });

  it('return time parts for 21:59', () => {
    const input = '21:59';
    const expected: TwentyFourHourParts = { hour: 21, minute: 59 };
    const result = twentyFourHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
  });
});
