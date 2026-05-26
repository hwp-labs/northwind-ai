import { PodcastAnalyticsDto } from "../types";
import { data } from "../data/episodes";

export function computeAnalytics() {
  const res: PodcastAnalyticsDto = {};
  const guestUsernames = new Set();

  data.forEach((d) => {
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

      if (d.guest) {
        if (Array.isArray(d.guest)) {
          d.guest.forEach(({ username }) => guestUsernames.add(username));
        } else {
          guestUsernames.add(d.guest.username);
        }
      }
    }
  });

  const listeners = res.listeners?.total || 1;
  const episodes = res.episodes?.total || 1;
  const average = listeners / episodes;
  const averageRate = (average * 100) / listeners;

  res.guests = { ...res.guests, total: guestUsernames.size };
  res.listeners = {
    ...res.listeners,
    average: Math.floor(average),
    averageRate: Math.round(averageRate),
  };

  // console.log("🚀 ~ computeAnalytics ~ res:", res);
  return res;
}
