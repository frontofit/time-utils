import { singleDigitToDoubleDigitStringConverter } from './single-digit-to-double-digit-string.converter';

describe('singleDigitToDoubleDigitStringConverter', () => {
  it('should be defined', () => {
    expect(singleDigitToDoubleDigitStringConverter).toBeDefined();
  });

  it('should convert a single digit number to a string with a leading zero', () => {
    expect(singleDigitToDoubleDigitStringConverter(5)).toEqual('05');
  });

  it('should pass through any double digit values', () => {
    expect(singleDigitToDoubleDigitStringConverter(20)).toEqual('20');
  });
});
