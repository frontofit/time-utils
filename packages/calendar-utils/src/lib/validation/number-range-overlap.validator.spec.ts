import { numberRangeOverlapValidator } from './number-range-overlap.validator';

describe('numberRangeOverlapValidator', () => {
  it('should be defined', () => {
    expect(numberRangeOverlapValidator).toBeDefined();
  });

  it('should create a list of range index values that overlap with other values', () => {
    const ranges = [
      { index: 0, begin: 1, end: 10 },
      { index: 1, begin: 11, end: 15 }, // overlapped
      { index: 2, begin: 14, end: 20 }, // overlap
      { index: 3, begin: 22, end: 30 }, // overlapped
      { index: 4, begin: 31, end: 60 }, // overlapped
      { index: 5, begin: 85, end: 122 }, // overlapped
      { index: 6, begin: 90, end: 160 }, // overlap
      { index: 7, begin: 70, end: 80 },
      { index: 8, begin: 61, end: 65 },
      { index: 9, begin: 23, end: 32 }, // overlap two
      { index: 10, begin: 169, end: 189 },
    ];

    const expected = [1, 2, 3, 4, 5, 6, 9];

    const results = numberRangeOverlapValidator(ranges);
    expect(results.length).toEqual(7);
    expect(results[0]).toEqual(expected[0]);
    expect(results[1]).toEqual(expected[1]);
    expect(results[2]).toEqual(expected[2]);
    expect(results[3]).toEqual(expected[3]);
    expect(results[4]).toEqual(expected[4]);
    expect(results[5]).toEqual(expected[5]);
    expect(results[6]).toEqual(expected[6]);
  });
});
