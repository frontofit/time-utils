import { twentyFourHourTimeParser } from './twenty-four-hour-time.parser';

describe('twentyFourHourTimeParser', () => {
  let baseDate: Date;

  beforeEach(() => {
    const newbaseDate = new Date();
    newbaseDate.setHours(0);
    newbaseDate.setMinutes(0);
    newbaseDate.setSeconds(0);
    newbaseDate.setMilliseconds(0);
    baseDate = newbaseDate;
  });

  it('should be defined', () => {
    expect(twentyFourHourTimeParser).toBeDefined();
  });

  /* 00:00
  -------------------------------------*/
  it('should parse 00:00 to a date object of midnight', () => {
    const input = '00:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(0);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 00:00 to a date object of the same day', () => {
    const input = '00:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(0);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 03:00
  -------------------------------------*/
  it('should parse 03:00 to a date object', () => {
    const input = '03:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(3);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 03:00 to a date object of the same day', () => {
    const input = '03:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(3);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 06:00
  -------------------------------------*/
  it('should parse 06:00 to a date object', () => {
    const input = '06:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(6);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 06:00 to a date object of the same day', () => {
    const input = '06:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(6);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 09:00
  -------------------------------------*/
  it('should parse 09:00 to a date object', () => {
    const input = '09:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(9);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 09:00 to a date object of the same day', () => {
    const input = '09:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(9);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 12:00
  -------------------------------------*/
  it('should parse 12:00 to a date object', () => {
    const input = '12:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(12);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 12:00 to a date object of the same day', () => {
    const input = '12:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(12);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 15:00
  -------------------------------------*/
  it('should parse 15:00 to a date object', () => {
    const input = '15:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(15);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 15:00 to a date object of the same day', () => {
    const input = '15:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(15);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 18:00
  -------------------------------------*/
  it('should parse 18:00 to a date object', () => {
    const input = '18:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(18);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 18:00 to a date object of the same day', () => {
    const input = '18:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(18);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 21:00
  -------------------------------------*/
  it('should parse 21:00 to a date object', () => {
    const input = '21:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(21);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 21:00 to a date object of the same day', () => {
    const input = '21:00';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(21);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 21:59
  -------------------------------------*/
  it('should parse 21:59 to a date object', () => {
    const input = '21:59';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(21);
    comparisonDate.setMinutes(59);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 21:59 to a date object of the same day', () => {
    const input = '21:59';
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(21);
    comparisonDate.setMinutes(59);
    const result = twentyFourHourTimeParser(input, baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });
});
