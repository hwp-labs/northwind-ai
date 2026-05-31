import { AnalyticsDto } from "./types";

export const mockData: AnalyticsDto = {
  listeners: {
    total: 917,
    average: 83,
    averageRate: 9,
  },
  episodes: {
    total: 11,
    firesideChat: 4,
    designSession: 6,
    caseStudy: 1,
  },
  guests: {
    male: 13,
    location: {
      NG: 11,
      US: 1,
      UK: 1,
      CA: 1,
    },
    female: 1,
    total: 14,
    maleRate: 93,
    femaleRate: 7,
  },
};
