import { TimeInOut } from '../models';

/**
 * Adds an empty TimeInOut object to the end of a list when the list is either
 * empty or all other items have been added.
 *
 * @param {Array<TimeInOut>} value Source list.
 * @returns {Array<TimeInOut>} Formatted list.
 */
export function editableTimeInOutListParser(
  value: Array<TimeInOut> = []
): Array<TimeInOut> {
  if (value.length > 0) {
    // filter out all rows where both values are null.
    const _value = [...value];

    const lastItem = _value[_value.length - 1];
    const { timeIn, timeOut } = lastItem;

    if (timeIn instanceof Date || timeOut instanceof Date) {
      return _value.concat([{ timeIn: null, timeOut: null }]);
    } else {
      return _value;
    }
  } else {
    return [{ timeIn: null, timeOut: null }];
  }
}
