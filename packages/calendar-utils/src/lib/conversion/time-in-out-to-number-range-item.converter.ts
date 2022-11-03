import { NumberRangeItem, TimeInOut } from '../models';
import { getMsTimeFromDate } from '../utils';

export function timeInOutToNumberRangeItemConverter(
  value: TimeInOut
): NumberRangeItem {
  const numberRangeItem = new NumberRangeItem();

  if (!!value) {
    const { timeIn, timeOut } = value;
    const numberRangeItem = new NumberRangeItem();
    numberRangeItem.begin = getMsTimeFromDate(timeIn);
    numberRangeItem.end = getMsTimeFromDate(timeOut);
    return numberRangeItem;
  }

  return numberRangeItem;
}
