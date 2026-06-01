import { momentUtil } from "@/utils/moment-util";
import { HYPHENS } from "@/constants";
//
import { EpisodeDto } from "./types";
import { SpeakerDto } from "../speakers/types";
import { data } from "./data";
import { data as Speakers } from "../speakers/data";
import { TransformedSpeaker, transformSpeaker } from "../speakers/utils";

export type TransformedEpisode = ReturnType<typeof transformEpisode>;

export const transformEpisode = (id?: number | string) => {
  let e: EpisodeDto = data[0]; // last

  const row = data.find((row) => row.id === Number(id));
  if (row) e = row;

  return {
    ...e,
    id0: String(e.id).padStart(2, "0"),
    id00: String(e.id).padStart(3, "0"),
    // Sun, 1 Mar 2026 | 8PM
    datetimeShort: momentUtil.fmt("ddd, D MMM YYYY | hA", e.datetime),
    // Sun, Mar 1
    dateShort: momentUtil.fmt("ddd, MMM D", e.datetime),
    // 8PM
    time: momentUtil.fmt("hA", e.datetime),
    cover: e.series
      ? "/uploads/podcast/sony.png"
      : "/uploads/podcast/halim.png",
    thumbnail: e?.thumbnail || "/icon-512.png",
    displayAvatars: getDisplayAvatars(e),
    topic: e?.topicShort || e?.topic || HYPHENS,
    tags: e?.tags?.filter((t) => !t.startsWith("#")) || [],
    Speakers: getSpeakers(e),
    canPlay: !e?.spaceUrl.startsWith("#"),
    ctaText: getCtaText(e),
  };
};

const getDisplayAvatars = (row?: EpisodeDto) => {
  if (row?.displayAvatars) return row.displayAvatars;

  if (!row?.guests)
    return [
      "/images/icon-hwp.png",
      "/images/avatar-etugbeh.png",
      "/images/avatar.png",
    ];

  const arr = ["/images/avatar-etugbeh.png"];

  row?.guests?.map((id) => {
    const s = Speakers.find((row) => row.id === id);
    if (s) arr.push(s.avatar);
  });

  if (arr.length === 2) arr.push(row?.thumbnail || "/images/avatar.png");

  return arr;
};

const getCtaText = (row?: EpisodeDto) => {
  return momentUtil.isAfterDay(row?.datetime)
    ? "Listen"
    : momentUtil.isOngoing(row?.datetime)
      ? "Attend"
      : "RSVP";
};

const getSpeakers = (row?: EpisodeDto) => {
  const arr: TransformedSpeaker[] = [transformSpeaker()];

  row?.guests?.forEach((id) => {
    arr.push(transformSpeaker(id));
  });

  return arr;
};
