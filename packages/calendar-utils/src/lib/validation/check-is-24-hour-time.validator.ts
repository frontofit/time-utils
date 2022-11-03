export function checkIs24HourTimeValidator(value: string): boolean {
  const timeTestRegex = new RegExp(
    '^(?:(?:[0-1])(?:[0-9])|(?:[2])(?:[0-3])|(?:[0-9])):(?:(?:[0-5])(?:[0-9]))$'
  );
  return timeTestRegex.test(value);
}
