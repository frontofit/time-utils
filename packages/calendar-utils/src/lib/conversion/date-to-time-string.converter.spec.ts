import { dateToTimeStringConverter } from './date-to-time-string.converter';

describe('convertDateToTimeString', () => {
  let dateReference: Date;

  beforeEach(() => {
    dateReference = new Date(1546656089025);
    dateReference.setHours(0);
    dateReference.setMinutes(0);
    dateReference.setSeconds(0);
    dateReference.setMilliseconds(0);
  });

  it('should be defined', () => {
    expect(dateToTimeStringConverter).toBeDefined();
  });

  it('should return a date string for am time', () => {
    dateReference.setHours(5);
    dateReference.setMinutes(0);
    const expected = '5:00am';
    expect(dateToTimeStringConverter(dateReference)).toEqual(expected);
  });

  it('should return a date string for pm time', () => {
    dateReference.setHours(14);
    dateReference.setMinutes(0);
    const expected = '2:00pm';
    expect(dateToTimeStringConverter(dateReference)).toEqual(expected);
  });

  it('should return a date string for midnight time', () => {
    dateReference.setHours(0);
    dateReference.setMinutes(0);
    const expected = '12:00am';
    expect(dateToTimeStringConverter(dateReference)).toEqual(expected);
  });

  it('should return a date string for afternoon time', () => {
    dateReference.setHours(0);
    dateReference.setMinutes(0);
    const expected = '12:00am';
    expect(dateToTimeStringConverter(dateReference)).toEqual(expected);
  });

  it('will fail gracefully when passed a null value', () => {
    // @ts-ignore
    expect(dateToTimeStringConverter(null)).toEqual('');
  });

  it('will fail gracefully when passed a junk value', () => {
    // @ts-ignore
    expect(dateToTimeStringConverter({ iam: 'junk' })).toEqual('');
  });

  it('will fail gracefully when passed an undefined value', () => {
    // @ts-ignore
    expect(dateToTimeStringConverter()).toEqual('');
  });
});
