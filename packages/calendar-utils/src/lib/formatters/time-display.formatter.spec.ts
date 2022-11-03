import { timeDisplayFormatter } from './time-display.formatter';

describe('timeDisplayFormatter', () => {
  it('should be defined', () => {
    expect(timeDisplayFormatter).toBeDefined();
  });

  it('should display time based on a TimeBlockCalc object', () => {
    const input = { hours: 1, minutes: 31 };
    const expected = '1h 31m';
    expect(timeDisplayFormatter(input)).toEqual(expected);
  });

  it('should only display minutes when hours are zero', () => {
    const input = { hours: 0, minutes: 31 };
    const expected = '31m';
    expect(timeDisplayFormatter(input)).toEqual(expected);
  });

  it('should display an empty string when input is null', () => {
    // @ts-ignore
    expect(timeDisplayFormatter(null)).toEqual('');
  });

  it('should display an empty string when input is junk', () => {
    // @ts-ignore
    expect(timeDisplayFormatter({ inasd: 'asdsdasd' })).toEqual('');
  });

  it('should display an empty string when input is undefined', () => {
    // @ts-ignore
    expect(timeDisplayFormatter()).toEqual('');
  });
});
