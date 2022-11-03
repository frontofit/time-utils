import { calendarDateFactory } from './calendar-date.factory';

describe('Calendar Date Factory', () => {
  it('should be defined', () => {
    expect(calendarDateFactory).toBeDefined();
  });

  it('should accept a month, day and year to output a clean date object', () => {
    const params = [24, 8, 2022];
    const [day, month, year] = params;
    const result = calendarDateFactory(day, month, year);
    const timeResult = `${result?.getHours()}${result?.getMinutes()}${result?.getSeconds()}${result?.getMilliseconds()}`;
    const expectedTimeResult = '0000';

    expect(result.getDate()).toEqual(day);
    expect(result.getMonth()).toEqual(month - 1);
    expect(result.getFullYear()).toEqual(year);
    expect(timeResult).toEqual(expectedTimeResult);
  });
});
