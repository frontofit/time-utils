export function generateEmptyArray(length = 0): Array<string> {
  const generatedArray = Array(length)
    .join(',')
    .split(',')
    .map((part: string) => {
      return '';
    });

  return generatedArray.length === 1 ? [] : generatedArray;
}
