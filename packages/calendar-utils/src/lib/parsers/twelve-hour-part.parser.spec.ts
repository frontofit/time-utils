import { twelveHourPartParser } from './twelve-hour-part.parser';
import { TwelveHourParts } from '../models';

describe('parseTwelveHourParts', () => {
  it('should be defined', () => {
    expect(twelveHourPartParser).toBeDefined();
  });

  it('should return time parts for 12:01am', () => {
    const input = '12:01am';
    const expected: TwelveHourParts = { hour: 12, minute: 1, isMorning: true };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 3:01am', () => {
    const input = '3:01am';
    const expected: TwelveHourParts = { hour: 3, minute: 1, isMorning: true };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 6:01am', () => {
    const input = '6:01am';
    const expected: TwelveHourParts = { hour: 6, minute: 1, isMorning: true };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 9:01am', () => {
    const input = '9:01am';
    const expected: TwelveHourParts = { hour: 9, minute: 1, isMorning: true };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 12:01pm', () => {
    const input = '12:01pm';
    const expected: TwelveHourParts = { hour: 12, minute: 1, isMorning: false };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 3:00pm', () => {
    const input = '3:00pm';
    const expected: TwelveHourParts = { hour: 3, minute: 0, isMorning: false };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 6:01pm', () => {
    const input = '6:01pm';
    const expected: TwelveHourParts = { hour: 6, minute: 1, isMorning: false };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 9:01pm', () => {
    const input = '9:01pm';
    const expected: TwelveHourParts = { hour: 9, minute: 1, isMorning: false };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });

  it('should return time parts for 11:59pm', () => {
    const input = '11:59pm';
    const expected: TwelveHourParts = {
      hour: 11,
      minute: 59,
      isMorning: false,
    };
    const result = twelveHourPartParser(input);
    expect(result.hour).toEqual(expected.hour);
    expect(result.minute).toEqual(expected.minute);
    expect(result.isMorning).toEqual(expected.isMorning);
  });
});
