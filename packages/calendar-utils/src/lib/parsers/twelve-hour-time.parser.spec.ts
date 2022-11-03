import { twelveHourTimeParser } from './twelve-hour-time.parser';

describe('twelveHourTimeParser', () => {
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
    expect(twelveHourTimeParser).toBeDefined();
  });

  /* 12:00am
  -------------------------------------*/
  it('should parse 12:00am to a date object of midnight', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(0);
    const result = twelveHourTimeParser('12:00am', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 12:00am to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(0);
    const result = twelveHourTimeParser('12:00am', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 3:00am
  -------------------------------------*/
  it('should parse 3:00am to a date object of midnight', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(3);
    const result = twelveHourTimeParser('3:00am', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 3:00am to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(3);
    const result = twelveHourTimeParser('3:00am', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 6:00am
  -------------------------------------*/
  it('should parse 6:00am to a date object of midnight', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(6);
    const result = twelveHourTimeParser('6:00am', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 6:00am to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(6);
    const result = twelveHourTimeParser('6:00am', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 9:00am
  -------------------------------------*/
  it('should parse 9:00am to a date object of midnight', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(9);
    const result = twelveHourTimeParser('9:00am', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 9:00am to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(9);
    const result = twelveHourTimeParser('9:00am', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 12:00pm
  -------------------------------------*/
  it('should parse 12:00pm to a date object of noon', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(12);
    const result = twelveHourTimeParser('12:00pm', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 12:00pm to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(12);
    const result = twelveHourTimeParser('12:00pm', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 3:00pm
  -------------------------------------*/
  it('should parse 3:00pm to a date object of noon', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(15);
    const result = twelveHourTimeParser('3:00pm', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 3:00pm to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(15);
    const result = twelveHourTimeParser('3:00pm', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 6:00pm
  -------------------------------------*/
  it('should parse 6:00pm to a date object of noon', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(18);
    const result = twelveHourTimeParser('6:00pm', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 6:00pm to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(18);
    const result = twelveHourTimeParser('6:00pm', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });

  /* 9:00pm
  -------------------------------------*/
  it('should parse 9:00pm to a date object of noon', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(21);
    const result = twelveHourTimeParser('9:00pm', baseDate);
    const resultHours = result.getHours();
    const comparisonHours = comparisonDate.getHours();

    expect(resultHours).toEqual(comparisonHours);
  });

  it('should parse 9:00pm to a date object of the same day', () => {
    const comparisonDate = new Date(baseDate);
    comparisonDate.setHours(21);
    const result = twelveHourTimeParser('9:00pm', baseDate);
    const resultDay = result.getDate();
    const comparisonDay = comparisonDate.getDate();

    expect(resultDay).toEqual(comparisonDay);
  });
});
