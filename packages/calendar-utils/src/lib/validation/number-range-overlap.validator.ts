import { NumberRangeItem } from '../models';

export function numberRangeOverlapValidator(
  value: Array<NumberRangeItem>
): Array<number> {
  return value
    .reduce(
      (
        acc: Array<number>,
        curr: NumberRangeItem,
        index: number,
        array: Array<NumberRangeItem>
      ) => {
        array.forEach((item: NumberRangeItem) => {
          const testItemIndex = curr.index,
            testItemBegin = curr.begin;

          if (
            testItemBegin >= item.begin &&
            testItemBegin <= item.end &&
            testItemIndex !== item.index
          ) {
            if (acc.indexOf(testItemIndex) === -1) {
              acc.push(testItemIndex);
            }

            if (acc.indexOf(item.index) === -1) {
              acc.push(item.index);
            }
          }
        });

        return acc;
      },
      []
    )
    .sort();
}
