import { generateEmptyArray } from './generate-empty-array.util';

describe('generate empty array', () => {
  it('should be defined', () => {
    expect(generateEmptyArray).toBeDefined();
  });

  it('should provide an array of zero length when no params have been provided', () => {
    expect(generateEmptyArray()).toHaveLength(0);
  });

  it('should generate an empty array of a specified length', () => {
    const result = generateEmptyArray(50);
    expect(result).toHaveLength(50);

    // empty check
    expect(result.filter((item) => !!item)).toHaveLength(0);
  });
});
