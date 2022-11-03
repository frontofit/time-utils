import { saveTimeEntryFormatter } from './save-time-entry.formatter';
import { cleanMinuteDateFactory } from '../datetime';
import { dateFromInputParser } from '../parsers';

describe('saveTimeEntryFormatter', () => {
  it('should be defined', () => {
    expect(saveTimeEntryFormatter).toBeDefined();
  });

  it('will remove unnecessary null rows and order by start time', () => {
    const baseDate = cleanMinuteDateFactory();
    const input = [
      {
        timeIn: dateFromInputParser('2:30pm', baseDate),
        timeOut: dateFromInputParser('5:00pm', baseDate),
      },
      { timeIn: null, timeOut: null },
      {
        timeIn: dateFromInputParser('11:30am', baseDate),
        timeOut: dateFromInputParser('2:00pm', baseDate),
      },
      { timeIn: null, timeOut: null },
      {
        timeIn: dateFromInputParser('8:00am', baseDate),
        timeOut: dateFromInputParser('11:00am', baseDate),
      },
      { timeIn: dateFromInputParser('6:00pm', baseDate), timeOut: null },
      { timeIn: null, timeOut: null },
      { timeIn: null, timeOut: null },
      { timeIn: null, timeOut: null },
    ];
    const expected = [
      {
        timeIn: dateFromInputParser('8:00am', baseDate),
        timeOut: dateFromInputParser('11:00am', baseDate),
      },
      {
        timeIn: dateFromInputParser('11:30am', baseDate),
        timeOut: dateFromInputParser('2:00pm', baseDate),
      },
      {
        timeIn: dateFromInputParser('2:30pm', baseDate),
        timeOut: dateFromInputParser('5:00pm', baseDate),
      },
      { timeIn: dateFromInputParser('6:00pm', baseDate), timeOut: null },
    ];
    const result = saveTimeEntryFormatter(input);
    expect(result).toEqual(expected);
  });
});
