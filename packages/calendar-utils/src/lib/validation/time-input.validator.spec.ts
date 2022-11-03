import { timeInputValidator } from './time-input.validator';

describe('timeInputValidator', () => {
  it('should be defined', () => {
    expect(timeInputValidator).toBeDefined();
  });

  it('should return true when input is 12 hour time', () => {
    expect(timeInputValidator('1:00am')).toEqual(true);
    expect(timeInputValidator('11:00am')).toEqual(true);
    expect(timeInputValidator('01:00am')).toEqual(true);
    expect(timeInputValidator('12:00am')).toEqual(true);
    expect(timeInputValidator('12:00pm')).toEqual(true);
  });

  it('should return true when input is 24 hour time', () => {
    expect(timeInputValidator('0:00')).toEqual(true);
    expect(timeInputValidator('00:00')).toEqual(true);
    expect(timeInputValidator('05:00')).toEqual(true);
    expect(timeInputValidator('5:00')).toEqual(true);
    expect(timeInputValidator('15:00')).toEqual(true);
    expect(timeInputValidator('23:00')).toEqual(true);
    expect(timeInputValidator('23:59')).toEqual(true);
  });

  it('should return false when input is neither 12 or 24 hour time', () => {
    expect(timeInputValidator('25:00')).toEqual(false);
    expect(timeInputValidator('25:00pm')).toEqual(false);
    expect(timeInputValidator('15:00pm')).toEqual(false);
    expect(timeInputValidator('12')).toEqual(false);
    expect(timeInputValidator('abcdef')).toEqual(false);
  });

  it('should return false when input is junk', () => {
    // @ts-ignore
    expect(timeInputValidator({ time: 'akbhsdkbsd' })).toEqual(false);
  });

  it('should return false when input is null', () => {
    // @ts-ignore
    expect(timeInputValidator(null)).toEqual(false);
  });

  it('should return false when input is undefined', () => {
    // @ts-ignore
    expect(timeInputValidator()).toEqual(false);
  });
});
