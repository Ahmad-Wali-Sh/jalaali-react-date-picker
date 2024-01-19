import { Month } from "../types/global.types";

const gregorianMonths: Month[] = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "February",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];
const jalaaliMonths: Month[] = [
  {
    id: 1,
    name: "حمل",
  },
  {
    id: 2,
    name: "ثور",
  },
  {
    id: 3,
    name: "جوزا",
  },
  {
    id: 4,
    name: "سرطان",
  },
  {
    id: 5,
    name: "اسد",
  },
  {
    id: 6,
    name: "سنبله",
  },
  {
    id: 7,
    name: "میزان",
  },
  {
    id: 8,
    name: "عقرب",
  },
  {
    id: 9,
    name: "قوس",
  },
  {
    id: 10,
    name: "جدی",
  },
  {
    id: 11,
    name: "دلو",
  },
  {
    id: 12,
    name: "حوت",
  },
];

const jalaaliDayLabels = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const gregorianDayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export { gregorianMonths, jalaaliMonths, jalaaliDayLabels, gregorianDayLabels };
