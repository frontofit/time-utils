export function getMsTimeFromDate(value: Date | null): number {
  try {
    return value ? value.getTime() : -1;
  } catch (exception) {
    return -1;
  }
}
