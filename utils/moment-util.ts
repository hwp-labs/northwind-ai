import moment from "moment-timezone";

type InputType = Date | string | null;

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const QUARTER = ["Q1", "Q2", "Q3", "Q4"];

const transform = (format: string, dt?: InputType) =>
  moment(dt).tz("Africa/Lagos").format(format);

const isPastDay = (dt: InputType) =>
  moment.utc(dt).isBefore(moment.utc(), "day");

// Sun, 1 Jan 1970 | 9:00 AM
const verbose = (dt?: InputType) => transform("ddd, D MMM YYYY | h:mm A", dt);

// 1 April 2026
const shortDate = (dt?: InputType) => transform("D MMM YYYY", dt);

// Sunday, March 1st
const podcastDate = (dt?: InputType) => transform("dddd, MMMM Do", dt);

// 8 PM
const podcastTime = (dt?: InputType) => transform("h A", dt);

// Sunday, 22 March 2026 | 9 PM (WAT)
const podcastDatetime = (dt?: InputType) =>
  transform("dddd, D MMMM YYYY | h A", dt);

export const momentUtil = { isPastDay, verbose, shortDate, podcastDate, podcastTime, podcastDatetime };
