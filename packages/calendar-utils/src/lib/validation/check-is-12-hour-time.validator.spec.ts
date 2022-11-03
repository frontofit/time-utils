import { checkIs12HourTimeValidator } from './check-is-12-hour-time.validator';

describe('checkIs12HourTime', () => {
  it('should be defined', () => {
    expect(checkIs12HourTimeValidator).toBeDefined();
  });

  it('should return true if a supplied value is recognized as 12 hour time', () => {
    expect(checkIs12HourTimeValidator('1:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('2:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('3:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('4:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('5:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('6:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('7:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('8:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('9:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('10:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('11:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('12:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('01:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('02:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('03:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('04:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('05:22am')).toEqual(true);
    expect(checkIs12HourTimeValidator('06:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('07:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('08:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('09:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('10:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('11:22pm')).toEqual(true);
    expect(checkIs12HourTimeValidator('12:22pm')).toEqual(true);
  });

  it('should return false when the input value is not 12 hour time', () => {
    expect(checkIs12HourTimeValidator('13:22am')).toEqual(false);
    expect(checkIs12HourTimeValidator('24:22am')).toEqual(false);
    expect(checkIs12HourTimeValidator('3:65am')).toEqual(false);
    expect(checkIs12HourTimeValidator('22:22')).toEqual(false);
    expect(checkIs12HourTimeValidator('13:22am')).toEqual(false);
    expect(checkIs12HourTimeValidator('05:00')).toEqual(false);
    expect(checkIs12HourTimeValidator('00:22pm')).toEqual(false);
    expect(checkIs12HourTimeValidator('16:22pm')).toEqual(false);
  });

  it('should fail gracefully when supplied with bad input', () => {
    expect(checkIs12HourTimeValidator('sdfdfsdfsdf')).toEqual(false);
  });

  it('should fail gracefully when supplied with invalid input', () => {
    // @ts-ignore
    expect(checkIs12HourTimeValidator({ val: 'sdfdfsdfsdf' })).toEqual(false);
  });

  it('should fail gracefully when supplied with null input', () => {
    // @ts-ignore
    expect(checkIs12HourTimeValidator(null)).toEqual(false);
  });

  it('should fail gracefully when supplied with undefined input', () => {
    // @ts-ignore
    expect(checkIs12HourTimeValidator()).toEqual(false);
  });

  it('should fail gracefully when supplied with junk input', () => {
    // @ts-ignore
    expect(checkIs12HourTimeValidator(new RegExp('2334'))).toEqual(false);
  });
});
