import { momentUtil } from "@/utils/moment-util";
import { CUR_DATE, CUR_HOUR_UTC } from "@/constants";
//
import {
  PodcastAnalyticsDto,
  PodcastDto,
  TransformedPodcastDto,
} from "./types";
import { data } from "./data/episodes";

export class PodcastHelper {
  static _transform = (item: PodcastDto): TransformedPodcastDto => {
    const isConcluded =
      item.listeners > 0 || momentUtil.isPastDay(item.datetime);
    const titleNobr = item.title.replaceAll("<br/>", " ");
    const summaryNobr = item?.summary
      ? item.summary.replaceAll("<br/>", " ")
      : "";
    const seriesText = item.series ? "" : "Design Session";

    return {
      ...item,
      dateText: momentUtil.podcastDate(item.datetime),
      timeText: momentUtil.podcastTime(item.datetime),
      datetimeText: momentUtil.podcastDatetime(item.datetime),
      datetimeTextShort: momentUtil.podcastDatetimeShort(item.datetime),
      isOngoing: this.IsOngoing(item.datetime),
      isConcluded,
      titleNobr,
      summaryNobr,
      seriesText,
      cover: item.series
        ? "/uploads/podcast/sony.png"
        : "/uploads/podcast/halim.png",
      titleSeriesText: item.isLongTitle
        ? titleNobr
        : `${item.title} ${seriesText}`,
      displayAvatar: this.DisplayAvatar(item),
      displayAvatars: this.DisplayAvatars(item),
      guestList: item.guest
        ? Array.isArray(item.guest)
          ? item.guest.map(({ username }) => username)
          : [item.guest.username]
        : undefined,
    };
  };

  static async GetSlugItemAsync(paramsAsync: Promise<{ slug: string[] }>) {
    const params = await paramsAsync;
    const i = Number(params.slug?.[0] || 1) - 1;
    const item = (data[i] || data[0]) as PodcastDto;
    return this._transform(item);
  }

  static async GetIdItemAsync(paramsAsync: Promise<{ id: string }>) {
    const params = await paramsAsync;
    const i = Number(params.id || 1) - 1;
    const item = (data[i] || data[0]) as PodcastDto;
    return this._transform(item);
  }

  static GetSlugItem(slugId: string | number) {
    const i = Number(slugId) - 1;
    const item = (data[i] || data[0]) as PodcastDto;
    return this._transform(item);
  }

  static GetPageItem(page = 1) {
    const i = page - 1;
    const item = (data[i] || data[0]) as PodcastDto;
    return this._transform(item);
  }

  static GetMostRecentItem() {
    const i = data.length - 1;
    const item = data[i] as PodcastDto;
    return this._transform(item);
  }

  static IsOngoing(dt: string) {
    const date = dt.slice(0, 10);
    const hour = Number(dt.slice(11, 13));
    return CUR_DATE === date && CUR_HOUR_UTC >= hour;
  }

  static DisplayAvatar(item: PodcastDto) {
    if (item.displayAvatar) return item.displayAvatar;
    if (item.guest && !Array.isArray(item.guest)) return item.guest?.avatar;

    return "/icon-512.png";
  }

  static DisplayAvatars(item: PodcastDto) {
    if (item.displayAvatars) return item.displayAvatars;

    if (item.guest) {
      if (Array.isArray(item.guest)) {
        const arr = ["/images/avatar-etugbeh.png"];
        item.guest.forEach(({ avatar }) => (avatar ? arr.push(avatar) : null));
        return arr;
      } else {
        return [
          "/images/icon-hwp.png",
          "/images/avatar-etugbeh.png",
          item.guest.avatar || "",
        ];
      }
    }
  }

  static ComputeAnalytics = () => {
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
  };
}
