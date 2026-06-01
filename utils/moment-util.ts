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

const TZ = "Africa/Lagos";

const now = () => moment().tz(TZ);

const fmt = (format: string, dt?: InputType) =>
  moment(dt).tz(TZ).format(format);

const isOngoing = (dt?: InputType) =>
  now().isSame(moment(dt), "day") && now().isSameOrAfter(moment(dt));

const isAfterDay = (dt?: InputType) => now().isAfter(moment(dt), "day");

// Sun, 1 Jan 1970 | 9:00 AM
const verbose = (dt?: InputType) => fmt("ddd, D MMM YYYY | h:mm A", dt);

// 1 Apr 2026
const shortDate = (dt?: InputType) => fmt("D MMM YYYY", dt);

export const momentUtil = {
  fmt,
  isOngoing,
  isAfterDay,
  verbose,
  shortDate,
};
