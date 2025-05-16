import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);
/**
 * Returns today's date in YYYY-MM-DD format.
 */
export const getToday = (): string => {
  return dayjs().format('YYYY-MM-DD');
};

/**
 * Returns a date N days ago in YYYY-MM-DD format.
 * @param daysAgo Number of days before today (default: 30)
 */
export const getNDaysAgo = (daysAgo: number = 30): string => {
  return dayjs().subtract(daysAgo, 'day').format('YYYY-MM-DD');
};

/**
 * Validates if a string is a valid date in YYYY-MM-DD format.
 */
export const isValidDate = (dateStr: string): boolean => {
  return dayjs(dateStr, 'YYYY-MM-DD', true).isValid();
};

/**
 * Returns true if date1 is before or equal to date2.
 */
export const isBeforeOrEqual = (date1: string, date2: string): boolean => {
  return dayjs(date1).isSameOrBefore(dayjs(date2));
};
