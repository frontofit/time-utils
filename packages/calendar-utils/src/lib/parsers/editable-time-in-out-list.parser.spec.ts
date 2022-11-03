import { editableTimeInOutListParser } from './editable-time-in-out-list.parser';
import { cleanMinuteDateFactory } from '../datetime';
import { dateFromInputParser } from './date-from-input.parser';

describe('editableTimeInOutListParser', () => {
  it('should be defined', () => {
    expect(editableTimeInOutListParser).toBeDefined();
  });

  it('should add a blank row to an empty list', () => {
    const input: any = [];
    const expected = [{ timeIn: null, timeOut: null }];
    const result = editableTimeInOutListParser(input);
    expect(result).toEqual(expected);
  });

  it('should add a blank row to a list of items that have a final row that is complete', () => {
    const baseDate = cleanMinuteDateFactory();
    const input = [
      {
        timeIn: dateFromInputParser('8:00am', baseDate),
        timeOut: dateFromInputParser('11:00am', baseDate),
      },
      {
        timeIn: dateFromInputParser('11:30am', baseDate),
        timeOut: dateFromInputParser('5:00pm', baseDate),
      },
    ];
    const expected = [
      {
        timeIn: dateFromInputParser('8:00am', baseDate),
        timeOut: dateFromInputParser('11:00am', baseDate),
      },
      {
        timeIn: dateFromInputParser('11:30am', baseDate),
        timeOut: dateFromInputParser('5:00pm', baseDate),
      },
      { timeIn: null, timeOut: null },
    ];
    const result = editableTimeInOutListParser(input);
    expect(result).toEqual(expected);
  });

  it('should not add a blank row to a list of items that have incomplete rows', () => {
    const baseDate = cleanMinuteDateFactory();
    const input = [
      {
        timeIn: dateFromInputParser('8:00am', baseDate),
        timeOut: dateFromInputParser('11:00am', baseDate),
      },
      { timeIn: dateFromInputParser('11:30am', baseDate), timeOut: null },
    ];
    const expected = [
      {
        timeIn: dateFromInputParser('8:00am', baseDate),
        timeOut: dateFromInputParser('11:00am', baseDate),
      },
      { timeIn: dateFromInputParser('11:30am', baseDate), timeOut: null },
      { timeIn: null, timeOut: null },
    ];
    const result = editableTimeInOutListParser(input);
    expect(result).toEqual(expected);
  });
});
