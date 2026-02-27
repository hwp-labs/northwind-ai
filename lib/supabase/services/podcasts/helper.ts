import { CUR_DATE, CUR_HOUR_UTC } from "@/constants";
import { PodcastDto } from "./types";
import data from "./data.json";

export class PodcastHelper {
  static async GetItemAsync(paramsAsync: Promise<{ slug: string[] }>) {
    const params = await paramsAsync;
    const i = Number(params.slug?.[0] || 1) - 1;
    const item = (data[i] || data[0]) as PodcastDto;
    return item;
  }

  static GetSlugItem(slugId: string) {
    const i = Number(slugId) - 1;
    const item = (data[i] || data[0]) as PodcastDto;
    return item;
  }

  static IsOngoing = ({ date, hour = 0 }: Partial<PodcastDto>) =>
    CUR_DATE === date && CUR_HOUR_UTC >= hour;
}
