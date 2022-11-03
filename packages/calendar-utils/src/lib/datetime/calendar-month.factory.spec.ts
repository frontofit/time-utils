import { calendarMonthFactory } from './calendar-month.factory';

describe('calendar month factory', () => {
  it('should be defined', () => {
    expect(calendarMonthFactory).toBeDefined();
  });

  it('should return range of 42 calendar dates for a 02/2020 calendar', () => {
    const result = calendarMonthFactory(2, 2020);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(26);
    expect(firstDate.getMonth()).toEqual(0);
    expect(firstDate.getFullYear()).toEqual(2020);

    expect(lastDate.getDate()).toEqual(7);
    expect(lastDate.getMonth()).toEqual(2);
    expect(lastDate.getFullYear()).toEqual(2020);
  });

  it('should return range of 42 calendar dates for a 01/2022 calendar', () => {
    const result = calendarMonthFactory(1, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(26);
    expect(firstDate.getMonth()).toEqual(11);
    expect(firstDate.getFullYear()).toEqual(2021);

    expect(lastDate.getDate()).toEqual(5);
    expect(lastDate.getMonth()).toEqual(1);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 02/2022 calendar', () => {
    const result = calendarMonthFactory(2, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(30);
    expect(firstDate.getMonth()).toEqual(0);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(12);
    expect(lastDate.getMonth()).toEqual(2);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 03/2022 calendar', () => {
    const result = calendarMonthFactory(3, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(27);
    expect(firstDate.getMonth()).toEqual(1);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(9);
    expect(lastDate.getMonth()).toEqual(3);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 04/2022 calendar', () => {
    const result = calendarMonthFactory(4, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(27);
    expect(firstDate.getMonth()).toEqual(2);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(7);
    expect(lastDate.getMonth()).toEqual(4);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 05/2022 calendar', () => {
    const result = calendarMonthFactory(5, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(1);
    expect(firstDate.getMonth()).toEqual(4);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(11);
    expect(lastDate.getMonth()).toEqual(5);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 06/2022 calendar', () => {
    const result = calendarMonthFactory(6, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(29);
    expect(firstDate.getMonth()).toEqual(4);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(9);
    expect(lastDate.getMonth()).toEqual(6);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 07/2022 calendar', () => {
    const result = calendarMonthFactory(7, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(26);
    expect(firstDate.getMonth()).toEqual(5);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(6);
    expect(lastDate.getMonth()).toEqual(7);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 08/2022 calendar', () => {
    const result = calendarMonthFactory(8, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(31);
    expect(firstDate.getMonth()).toEqual(6);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(10);
    expect(lastDate.getMonth()).toEqual(8);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 09/2022 calendar', () => {
    const result = calendarMonthFactory(9, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(28);
    expect(firstDate.getMonth()).toEqual(7);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(8);
    expect(lastDate.getMonth()).toEqual(9);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 10/2022 calendar', () => {
    const result = calendarMonthFactory(10, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(25);
    expect(firstDate.getMonth()).toEqual(8);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(5);
    expect(lastDate.getMonth()).toEqual(10);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 11/2022 calendar', () => {
    const result = calendarMonthFactory(11, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(30);
    expect(firstDate.getMonth()).toEqual(9);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(10);
    expect(lastDate.getMonth()).toEqual(11);
    expect(lastDate.getFullYear()).toEqual(2022);
  });

  it('should return range of 42 calendar dates for a 12/2022 calendar', () => {
    const result = calendarMonthFactory(12, 2022);
    const firstDate = result[0];
    const lastDate = result[41];

    expect(result.length).toEqual(42);

    expect(firstDate.getDate()).toEqual(27);
    expect(firstDate.getMonth()).toEqual(10);
    expect(firstDate.getFullYear()).toEqual(2022);

    expect(lastDate.getDate()).toEqual(7);
    expect(lastDate.getMonth()).toEqual(0);
    expect(lastDate.getFullYear()).toEqual(2023);
  });
});
