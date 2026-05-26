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

// 1 Apr 2026
const shortDate = (dt?: InputType) => transform("D MMM YYYY", dt);

// Sunday, Mar 1st
const podcastDate = (dt?: InputType) => transform("dddd, MMM Do", dt);

// Sun, Mar 1
const podcastShortDate = (dt?: InputType) => transform("ddd, MMM D", dt);

// 8PM
const podcastTime = (dt?: InputType) => transform("hA", dt);

// Sunday, 22 Mar 2026 | 9PM
const podcastDatetime = (dt?: InputType) =>
  transform("dddd, D MMM YYYY | hA", dt);

// Sun, 22 Mar 2026 | 9PM
const podcastShortDatetime = (dt?: InputType) =>
  transform("ddd, D MMM YYYY | hA", dt);

export const momentUtil = {
  isPastDay,
  verbose,
  shortDate,
  podcastDate,
  podcastShortDate,
  podcastTime,
  podcastDatetime,
  podcastShortDatetime,
};
