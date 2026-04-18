import { momentUtil } from "@/utils/moment-util";
import { CUR_DATE, CUR_HOUR_UTC } from "@/constants";
//
import { PodcastDto, PodcastSeriesEnum } from "./types";
import data from "./data.json";

export class PodcastHelper {
  static _transform = (item: PodcastDto) => {
    const isFiresideChat = item.series === PodcastSeriesEnum.FIRESIDE_CHAT;
    const isConcluded =
      item.listeners > 0 || momentUtil.isPastDay(item.datetime);
    const seriesText = isFiresideChat ? "Fireside Chat" : "Design Session";
    const logoSafe = item.logo
      ? typeof item.logo === "string"
        ? [item.logo]
        : item.logo
      : [];
    const lastLogoIndex = logoSafe.length - 1;
    const guestUsernameSafe = item.guestUsername
      ? typeof item.guestUsername === "string"
        ? [item.guestUsername]
        : item.guestUsername
      : [];

    return {
      ...item,
      dateText: momentUtil.podcastDate(item.datetime),
      timeText: momentUtil.podcastTime(item.datetime),
      datetimeText: momentUtil.podcastDatetime(item.datetime),
      isOngoing: this.IsOngoing(item.datetime),
      isConcluded,
      isFiresideChat,
      seriesText,
      titleSeriesText: item.isLongTitle
        ? item.title
        : `${item.title} ${seriesText}`,
      lastLogoSrc: `/uploads/logos/${logoSafe[lastLogoIndex] || "hwp.png"}`,
      logoSafe,
      guestUsernameSafe,
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
}
