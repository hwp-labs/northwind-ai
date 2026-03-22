import { momentUtil } from "@/utils/moment-util";
import { CUR_DATE, CUR_HOUR_UTC } from "@/constants";
//
import { PodcastDto, PodcastFormatEnum } from "./types";
import data from "./data.json";

export class PodcastHelper {
  static _transform = (item: PodcastDto) => ({
    ...item,
    dateText: momentUtil.podcastDate(item.datetime),
    timeText: momentUtil.podcastTime(item.datetime),
    datetimeText: momentUtil.podcastDatetime(item.datetime),
    isOngoing: this.IsOngoing(item.datetime),
    isConcluded: momentUtil.isPastDay(item.datetime),
    isFiresideChat: this.IsFiresideChat(item.format),
  });

  static async GetItemAsync(paramsAsync: Promise<{ slug: string[] }>) {
    const params = await paramsAsync;
    const i = Number(params.slug?.[0] || 1) - 1;
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

  static IsOngoing(dt: string) {
    const date = dt.slice(0, 10);
    const hour = Number(dt.slice(11, 13));
    return CUR_DATE === date && CUR_HOUR_UTC >= hour;
  }

  static IsFiresideChat = (format?: PodcastFormatEnum) =>
    format === PodcastFormatEnum.FIRESIDE_CHAT;
}
