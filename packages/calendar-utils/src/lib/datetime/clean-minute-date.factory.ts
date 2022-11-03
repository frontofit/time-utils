export function cleanMinuteDateFactory(value: Date = new Date()): Date {
  const internalDate = new Date(value);
  internalDate.setSeconds(0);
  internalDate.setMilliseconds(0);

  return internalDate;
}
