export const TimeMetric = Object.freeze({
  MS: "millisecond",
  SEC: "second",
  MIN: "minute",
  HOUR: "hour",
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
  YEAR: "year",
});

export const CONSECUTIVE_NUMERICAL_TIME_CONVERSIONS = Object.freeze({
  /**
   * The numbers you need to divide from the previous key in the object to get
   * to the time representation.
   */
  millisecond: 1,
  second: 1000,
  minute: 60,
  hour: 60,
  day: 24,
  week: 7,
  month: 365 / 12 / 7,
  year: 12,
});

// methods

export function epochNumerialConverter(epochTime, convertTo) {
  let newNumericalTime = epochTime;
  for (const [key, value] of Object.entries(
    CONSECUTIVE_NUMERICAL_TIME_CONVERSIONS
  )) {
    newNumericalTime /= value;
    if (key === convertTo) break;
  }

  return newNumericalTime;
}

export function latestTimeAgo(epochTime) {
  /**
   * Get the longest time representation that's contained in the epoch time.
   */

  // return right away if the time was less than a minute ago to avoid
  // ssr errors from different server-client render results
  if (Date.now() - epochTime < 60 * 1000) return "less than a minute";

  for (const timeRepresentation of Object.keys(
    CONSECUTIVE_NUMERICAL_TIME_CONVERSIONS
  ).reverse()) {
    const convertedTime = epochNumerialConverter(
      Date.now() - epochTime,
      timeRepresentation
    );

    if (convertedTime > 1) {
      const flooredTime = Math.floor(convertedTime);

      return `${flooredTime} ${timeRepresentation}${flooredTime > 1 ? "s" : ""}`;
    }
  }

  return "n/a";
}
