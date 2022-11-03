import { timeInOutToTimeInOutCalcConverter } from './time-in-out-to-time-in-out-calc.converter';
import { dateFromInputParser } from '../parsers';
import { TimeInOut, TimeInOutCalc } from '../models';
import { cleanMinuteDateFactory } from '../datetime';

function timeInOutFactory(
  inTime: Date | null,
  outTime: Date | null
): TimeInOut {
  const timeInOut = new TimeInOut();
  timeInOut.timeIn = inTime;
  timeInOut.timeOut = outTime;
  return timeInOut;
}

describe('timeInOutToTimeInOutCalcConverter', () => {
  it('should be defined', () => {
    expect(timeInOutToTimeInOutCalcConverter).toBeDefined();
  });

  it('should calculate the time worked between two date objects', () => {
    const baseDate = cleanMinuteDateFactory();
    const timeBlock = timeInOutFactory(
      dateFromInputParser('8:00am', baseDate),
      dateFromInputParser('11:31am', baseDate)
    );
    const expected: TimeInOutCalc = { hours: 3, minutes: 31 };
    expect(timeInOutToTimeInOutCalcConverter(timeBlock)).toEqual(expected);
  });

  it('should calculate zero hours and the minutes worked between two date objects', () => {
    const baseDate = cleanMinuteDateFactory();
    const timeBlock = timeInOutFactory(
      dateFromInputParser('8:00am', baseDate),
      dateFromInputParser('8:31am', baseDate)
    );
    const expected: TimeInOutCalc = { hours: 0, minutes: 31 };
    expect(timeInOutToTimeInOutCalcConverter(timeBlock)).toEqual(expected);
  });

  it('should return null when the out time is before the in time', () => {
    const baseDate = cleanMinuteDateFactory();
    const timeBlock = timeInOutFactory(
      dateFromInputParser('8:00pm', baseDate),
      dateFromInputParser('11:31am', baseDate)
    );
    expect(timeInOutToTimeInOutCalcConverter(timeBlock)).toEqual(null);
  });

  it('should return null when the input is junk', () => {
    // @ts-ignore
    expect(timeInOutToTimeInOutCalcConverter({ in: 'aksbjdkabsd' })).toEqual(
      null
    );
  });

  it('should return null when the input is null', () => {
    // @ts-ignore
    expect(timeInOutToTimeInOutCalcConverter(null)).toEqual(null);
  });

  it('should return null when the input is undefined', () => {
    // @ts-ignore
    expect(timeInOutToTimeInOutCalcConverter()).toEqual(null);
  });
});
