import { cleanDateFactory } from './clean-date.factory';
import { calendarWeekFactory } from './calendar-week.factory';

describe('calendarWeekFactory', () => {
  let refDate: Date;
  let refDateMidWeek: Date;
  let refDateEndWeek: Date;

  beforeEach(() => {
    const rawDate = new Date(1648408728596);
    const rawDateMidWeek = new Date(1648667928596);
    const rawDateEndWeek = new Date(1648927128596);
    refDate = cleanDateFactory(rawDate);
    refDateMidWeek = cleanDateFactory(rawDateMidWeek);
    refDateEndWeek = cleanDateFactory(rawDateEndWeek);
  });

  it('should be defined', () => {
    expect(calendarWeekFactory).toBeDefined();
  });

  it('refDate should remain static', () => {
    expect(refDate).toBeDefined();
    expect(refDate.getDate()).toEqual(27);
    expect(refDate.getMonth()).toEqual(2);
    expect(refDate.getFullYear()).toEqual(2022);
    expect(refDate.getHours()).toEqual(0);
    expect(refDate.getMinutes()).toEqual(0);
    expect(refDate.getSeconds()).toEqual(0);
    expect(refDate.getMilliseconds()).toEqual(0);
  });

  it('should output an array of date objects', () => {
    const result = calendarWeekFactory(refDate);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(7);
    // should be sunday
    expect(result[0].getDay()).toEqual(0);
    // should be the 27th
    expect(result[0].getDate()).toEqual(27);
    // should be march
    expect(result[0].getMonth()).toEqual(2);
    // should be 2022
    expect(result[0].getFullYear()).toEqual(2022);
    // should be saturday
    expect(result[6].getDay()).toEqual(6);
    // should be the 2nd
    expect(result[6].getDate()).toEqual(2);
    // should be april
    expect(result[6].getMonth()).toEqual(3);
    // should be 2022
    expect(result[6].getFullYear()).toEqual(2022);
  });

  it('should output an array of date objects from a midweek date', () => {
    const result = calendarWeekFactory(refDateMidWeek);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(7);
    // should be sunday
    expect(result[0].getDay()).toEqual(0);
    // should be the 27th
    expect(result[0].getDate()).toEqual(27);
    // should be march
    expect(result[0].getMonth()).toEqual(2);
    // should be 2022
    expect(result[0].getFullYear()).toEqual(2022);
    // should be saturday
    expect(result[6].getDay()).toEqual(6);
    // should be the 2nd
    expect(result[6].getDate()).toEqual(2);
    // should be april
    expect(result[6].getMonth()).toEqual(3);
    // should be 2022
    expect(result[6].getFullYear()).toEqual(2022);
  });

  it('should output an array of date objects from a midweek date', () => {
    const result = calendarWeekFactory(refDateEndWeek);

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(7);
    // should be sunday
    expect(result[0].getDay()).toEqual(0);
    // should be the 27th
    expect(result[0].getDate()).toEqual(27);
    // should be march
    expect(result[0].getMonth()).toEqual(2);
    // should be 2022
    expect(result[0].getFullYear()).toEqual(2022);
    // should be saturday
    expect(result[6].getDay()).toEqual(6);
    // should be the 2nd
    expect(result[6].getDate()).toEqual(2);
    // should be april
    expect(result[6].getMonth()).toEqual(3);
    // should be 2022
    expect(result[6].getFullYear()).toEqual(2022);
  });
});
