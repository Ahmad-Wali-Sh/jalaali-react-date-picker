import { jIsLeapYear } from "moment-jalaali";
import { dayModelGenerator } from ".";
import { jalaaliMonths } from "../core/constants/datasets";

export const getDaysOfJalaaliMonth = (month: number, year: number) => {
  const isLeapYear = jIsLeapYear(year);

  if (month === 12) {
    if (isLeapYear) {
      return dayModelGenerator(30, month, year, true);
    }
    return dayModelGenerator(29, month, year, true);
  }

  if (jalaaliMonths.findIndex(({ id }) => id === month) <= 5) {
    return dayModelGenerator(31, month, year, true);
  }

  return dayModelGenerator(30, month, year, true);
};

export const getDaysOfGregorianMonth = (month: number, year: number) => {
  function isLeapYear(year: number) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }

  if (month === 2) {
    if (isLeapYear(year)) {
      return dayModelGenerator(29, month, year, false);
    }
    return dayModelGenerator(28, month, year, false);
  }

  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return dayModelGenerator(31, month, year, false);
  }

  return dayModelGenerator(30, month, year, false);
};
