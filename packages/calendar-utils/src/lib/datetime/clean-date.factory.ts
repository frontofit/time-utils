/**
 * Utility that zeros out the minutes, hours, seconds, etc...
 * for working with Date objects in terms of days, weeks and months.
 * This provides a good starting point.
 *
 * @param {Date} value Date to be scrubbed.
 * @returns {Date} Date with hours, minutes, seconds and milleseconds set to zero.
 */
export function cleanDateFactory(value: Date = new Date()): Date {
  const internalDate = new Date(value);
  internalDate.setHours(0);
  internalDate.setMinutes(0);
  internalDate.setSeconds(0);
  internalDate.setMilliseconds(0);

  return internalDate;
}
