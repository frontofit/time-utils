export function checkIs12HourTimeValidator(value: string): boolean {
  const timeTestRegex = new RegExp(
    '^(?:(?:[0])(?:[1-9])|(?:[1])(?:[0-2])|(?:[1-9])):(?:[0-5])(?:[0-9])(?:am|pm|AM|PM)$'
  );
  return timeTestRegex.test(value);
}
