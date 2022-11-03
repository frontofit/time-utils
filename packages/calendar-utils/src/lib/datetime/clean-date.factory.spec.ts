import {cleanDateFactory} from "./clean-date.factory";

describe('Clean Date Factory', () => {

  let testDate: Date;

  beforeEach(() => {
    testDate = new Date();
  });

  it('should be defined', () => {
    expect(cleanDateFactory).toBeDefined();
  });

  it('should provide an output date when no params have been provided', () => {
    const result = cleanDateFactory();
    expect(result).toBeTruthy();
    expect(result?.getHours()).toEqual(0);
    expect(result?.getMinutes()).toEqual(0);
    expect(result?.getSeconds()).toEqual(0);
    expect(result?.getMilliseconds()).toEqual(0);
  });

  it('should accept a JS Date, copy it, and scrub minutes, seconds, and milliseconds', () => {
    const testDateTimeStr = `${testDate.getHours()}${testDate.getMinutes()}${testDate.getSeconds()}${testDate.getMilliseconds()}`
    const expected = '0000';
    const result = cleanDateFactory(testDate);
    const resultDateTimeStr = `${result?.getHours()}${result?.getMinutes()}${result?.getSeconds()}${result?.getMilliseconds()}`

    expect(testDate).not.toEqual(result);
    expect(testDateTimeStr).not.toEqual(expected);
    expect(resultDateTimeStr).toEqual(expected);
  })


})
