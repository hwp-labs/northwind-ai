import { momentUtil } from "@/utils/moment-util";
import { CUR_DATE, CUR_HOUR_UTC } from "@/constants";
//
import { PodcastDto, TransformedPodcastDto } from "./types";
import { data } from "./data";

export class PodcastHelper {
  static _transform = (item: PodcastDto): TransformedPodcastDto => {
    const isConcluded =
      item.listeners > 0 || momentUtil.isPastDay(item.datetime);
    const titleNobr = item.title.replaceAll("<br/>", " ");
    const summaryNobr = item?.summary
      ? item.summary.replaceAll("<br/>", " ")
      : "";
    const seriesText = item?.series ? "" : "Design Session";

    return {
      ...item,
      dateText: momentUtil.podcastDate(item.datetime),
      timeText: momentUtil.podcastTime(item.datetime),
      datetimeText: momentUtil.podcastDatetime(item.datetime),
      isOngoing: this.IsOngoing(item.datetime),
      isConcluded,
      titleNobr,
      summaryNobr,
      seriesText,
      titleSeriesText: item.isLongTitle
        ? titleNobr
        : `${item.title} ${seriesText}`,
      displayAvatar: item.displayAvatar || "/images/icon-hwp.png",
      displayAvatars: this.DisplayAvatars(item),
      guestList: item.guest
        ? Array.isArray(item.guest)
          ? item.guest.map(({ username }) => username)
          : []
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
}
