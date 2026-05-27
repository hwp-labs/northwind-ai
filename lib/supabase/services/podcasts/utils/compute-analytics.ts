import { PodcastAnalyticsDto } from "../types";
import { data as Episodes } from "../data/episodes";
import { data as Guests } from "../data/guests";

export function computeAnalytics() {
  const res: PodcastAnalyticsDto = {};

  Episodes.forEach((d) => {
    if (d.listeners) {
      if (res.listeners?.total) res.listeners.total += d.listeners;
      else res.listeners = { ...res.listeners, total: d.listeners };

      if (res.episodes?.total) res.episodes.total += 1;
      else res.episodes = { ...res.episodes, total: 1 };

      if (d.series) {
        if (d.series === "fc") {
          if (res.episodes?.firesideChat) res.episodes.firesideChat += 1;
          else res.episodes = { ...res.episodes, firesideChat: 1 };
        }
        if (d.series === "cs") {
          if (res.episodes?.caseStudy) res.episodes.caseStudy += 1;
          else res.episodes = { ...res.episodes, caseStudy: 1 };
        }
      } else {
        if (res.episodes?.designSession) res.episodes.designSession += 1;
        else res.episodes = { ...res.episodes, designSession: 1 };
      }
    }
  });

  const listeners = res.listeners?.total || 1;
  const episodes = res.episodes?.total || 1;
  const average = listeners / episodes;
  const averageRate = (average * 100) / listeners;

  res.listeners = {
    ...res.listeners,
    average: Math.floor(average),
    averageRate: Math.round(averageRate),
  };

  Guests.forEach((d) => {
    if (d.sex) {
      if (res.guests?.female) res.guests.female += 1;
      else res.guests = { ...res.guests, female: 1 };
    } else {
      if (res.guests?.male) res.guests.male += 1;
      else res.guests = { ...res.guests, male: 1 };
    }

    const country = d.location?.country || "NG";
    if (res.guests.location) {
      if (res.guests.location[country]) {
        res.guests.location[country] += 1;
      } else {
        res.guests.location[country] = 1;
      }
    } else {
      res.guests = { ...res.guests, location: { [country]: 1 } };
    }
  });

  const guests = Guests.length;
  const maleRate = ((res.guests?.male || 1) * 100) / guests;
  const femaleRate = ((res.guests?.female || 1) * 100) / guests;

  res.guests = {
    ...res.guests,
    total: guests,
    maleRate: Math.round(maleRate),
    femaleRate: Math.round(femaleRate),
  };

  // console.log("🚀 ~ computeAnalytics ~ res:", res);
  return res;
}
