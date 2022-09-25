import { TimeType } from ".";

export const EORZEA_HOUR = 175 * 1000;
export const EORZEA_8_HOUR = 8 * EORZEA_HOUR;
export const EORZEA_DAY = 24 * EORZEA_HOUR;

// 00:00~07:59 is 8
// 08:00~15:59 is 16
// 16:00~23:59 is 0
const getIncrement = (time: number) => (
  (time + 8 - (time % 8)) % 24
);

/**
 * Calculates the weather value given a timestamp
 * @param {number} time - A unix timestamp in milliseconds
 * @returns {number} - the weather value 
 */
export const calculateWeatherValue = (time: number): number => {
  const eorzeanHoursFromEpoch = time / EORZEA_HOUR;
  const eorzeanDaysFromEpoch = time / EORZEA_DAY;

  const increment = getIncrement(eorzeanHoursFromEpoch);

  const step1 = (eorzeanDaysFromEpoch << 32) >>> 0;
  const step2 = (step1 * 100 + increment);
  const step3 = ((step2 << 11) ^ step2) >>> 0;
  const step4 = ((step3 >>> 8) ^ step3) >>> 0;

  return step4 % 100;
};

export const convertToNearestRealIntervalStart = (time: number): Date => {
  const result = time - time % EORZEA_8_HOUR;

  return new Date(result);
};

export const convertToNearestEorzeanInterval = (time: number): number => {
  const eorzeanHoursFromEpoch = time / EORZEA_HOUR;
  const eorzeaTimeHour = (eorzeanHoursFromEpoch - (eorzeanHoursFromEpoch % 8)) % 24;

  return eorzeaTimeHour;
};

export const convertTimeHourToString = (eorzeaTimeHour: number): string => {
  return (eorzeaTimeHour < 10 ? '0' : '') + eorzeaTimeHour + ':00';
}

export const convertToNearestEorzeanIntervalStart = (time: number): TimeType => {
  const eorzeaTimeHour = convertToNearestEorzeanInterval(time);

  return convertTimeHourToString(eorzeaTimeHour) as TimeType;
};