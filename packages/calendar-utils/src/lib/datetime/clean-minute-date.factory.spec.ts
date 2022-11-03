import { cleanDateFactory } from './clean-date.factory';
import { cleanMinuteDateFactory } from './clean-minute-date.factory';

describe('Clean Minute Date Factory', () => {
  let testDate: Date;

  beforeEach(() => {
    testDate = new Date();
  });

  it('should be defined', () => {
    expect(cleanMinuteDateFactory).toBeDefined();
  });

  it('should provide an output date when no params have been provided', () => {
    const result = cleanDateFactory();
    expect(result).toBeTruthy();
    expect(result?.getSeconds()).toEqual(0);
    expect(result?.getMilliseconds()).toEqual(0);
  });

  it('should accept a JS Date, copy it, and scrub seconds, and milliseconds', () => {
    const testDateTimeStr = `${testDate.getSeconds()}${testDate.getMilliseconds()}`;
    const expected = '00';
    const result = cleanDateFactory(testDate);
    const resultDateTimeStr = `${result?.getSeconds()}${result?.getMilliseconds()}`;

    expect(testDate).not.toEqual(result);
    expect(testDateTimeStr).not.toEqual(expected);
    expect(resultDateTimeStr).toEqual(expected);
  });
});
