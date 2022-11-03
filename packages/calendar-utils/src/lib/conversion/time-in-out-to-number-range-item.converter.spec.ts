import { timeInOutToNumberRangeItemConverter } from './time-in-out-to-number-range-item.converter';
import { TimeInOut } from '../models';

describe('timeInOutToNumberRangeItemConverter', () => {
  it('should be defined', () => {
    expect(timeInOutToNumberRangeItemConverter).toBeDefined();
  });

  it('should take in a TimeInOut object and return a timeBlockItem', () => {
    const timeInOut = new TimeInOut();
    timeInOut.timeIn = new Date(1546783200000);
    timeInOut.timeOut = new Date(1546795800000);

    const result = timeInOutToNumberRangeItemConverter(timeInOut);
    // @ts-ignore
    const { begin, end } = result;
    expect(begin).toEqual(1546783200000);
    expect(end).toEqual(1546795800000);
  });

  it('should take a partial TimeInOut object and return a timeBlockItem', () => {
    const timeInOut = new TimeInOut();
    timeInOut.timeIn = new Date(1546783200000);
    timeInOut.timeOut = null;

    const result = timeInOutToNumberRangeItemConverter(timeInOut);
    // @ts-ignore
    const { begin, end } = result;
    expect(begin).toEqual(1546783200000);
    expect(end).toEqual(-1);
  });
});
