import { checkIs24HourTimeValidator } from './check-is-24-hour-time.validator';

describe('checkIs24HourTime', () => {
  it('should be defined', () => {
    expect(checkIs24HourTimeValidator).toBeDefined();
  });

  it('should return true when a supplied value is recognized as 24 hour time', () => {
    expect(checkIs24HourTimeValidator('05:00')).toEqual(true);
    expect(checkIs24HourTimeValidator('5:00')).toEqual(true);
    expect(checkIs24HourTimeValidator('23:55')).toEqual(true);
    expect(checkIs24HourTimeValidator('9:02')).toEqual(true);
    expect(checkIs24HourTimeValidator('9:53')).toEqual(true);
    expect(checkIs24HourTimeValidator('9:43')).toEqual(true);
    expect(checkIs24HourTimeValidator('9:33')).toEqual(true);
    expect(checkIs24HourTimeValidator('9:23')).toEqual(true);
    expect(checkIs24HourTimeValidator('9:13')).toEqual(true);
    expect(checkIs24HourTimeValidator('9:03')).toEqual(true);
    expect(checkIs24HourTimeValidator('09:02')).toEqual(true);
    expect(checkIs24HourTimeValidator('09:53')).toEqual(true);
    expect(checkIs24HourTimeValidator('09:43')).toEqual(true);
    expect(checkIs24HourTimeValidator('09:33')).toEqual(true);
    expect(checkIs24HourTimeValidator('09:23')).toEqual(true);
    expect(checkIs24HourTimeValidator('09:13')).toEqual(true);
    expect(checkIs24HourTimeValidator('09:03')).toEqual(true);
    expect(checkIs24HourTimeValidator('10:02')).toEqual(true);
    expect(checkIs24HourTimeValidator('11:02')).toEqual(true);
    expect(checkIs24HourTimeValidator('12:02')).toEqual(true);
    expect(checkIs24HourTimeValidator('13:02')).toEqual(true);
    expect(checkIs24HourTimeValidator('15:04')).toEqual(true);
    expect(checkIs24HourTimeValidator('16:17')).toEqual(true);
    expect(checkIs24HourTimeValidator('16:26')).toEqual(true);
    expect(checkIs24HourTimeValidator('16:36')).toEqual(true);
    expect(checkIs24HourTimeValidator('16:46')).toEqual(true);
    expect(checkIs24HourTimeValidator('16:56')).toEqual(true);
    expect(checkIs24HourTimeValidator('17:50')).toEqual(true);
    expect(checkIs24HourTimeValidator('18:50')).toEqual(true);
    expect(checkIs24HourTimeValidator('19:50')).toEqual(true);
    expect(checkIs24HourTimeValidator('20:50')).toEqual(true);
    expect(checkIs24HourTimeValidator('21:50')).toEqual(true);
    expect(checkIs24HourTimeValidator('22:50')).toEqual(true);
    expect(checkIs24HourTimeValidator('23:50')).toEqual(true);
    expect(checkIs24HourTimeValidator('00:50')).toEqual(true);
  });

  it('should return false when a value is not recognized as 24 hour time', () => {
    expect(checkIs24HourTimeValidator('09:13pm')).toEqual(false);
    expect(checkIs24HourTimeValidator('09:03am')).toEqual(false);
    expect(checkIs24HourTimeValidator('10:02pm')).toEqual(false);
    expect(checkIs24HourTimeValidator('11:02pm')).toEqual(false);
    expect(checkIs24HourTimeValidator('12:02pm')).toEqual(false);
    expect(checkIs24HourTimeValidator('13:02pm')).toEqual(false);
  });

  it('should return false when provided with an invalid value', () => {
    expect(checkIs24HourTimeValidator('kjabsdkhbasd')).toEqual(false);
  });

  it('should return false when provided with a value of the wrong type', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(checkIs24HourTimeValidator({ val: 'aksjdbakjsd' })).toEqual(false);
  });

  it('should return false when provided with a value of null', () => {
    // @ts-ignore
    expect(checkIs24HourTimeValidator(null)).toEqual(false);
  });

  it('should return false when provided with undefined', () => {
    // @ts-ignore
    expect(checkIs24HourTimeValidator()).toEqual(false);
  });
});
