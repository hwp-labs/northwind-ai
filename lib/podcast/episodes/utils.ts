import { momentUtil } from "@/utils/moment-util";
import { HYPHENS } from "@/constants";
//
import { EpisodeDto } from "./types";
import { SpeakerDto } from "../speakers/types";
import { data } from "./data";
import { data as Speakers } from "../speakers/data";
import { TransformedSpeaker, transformSpeaker } from "../speakers/utils";
import { APP_PODCAST } from "@/constants/APP_PODCAST";

export type TransformedEpisode = ReturnType<typeof transformEpisode>;

export const transformEpisode = (id?: number | string | null) => {
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
    cover: {
      ds: "/uploads/podcast/cover-halim.png",
      fc: "/uploads/podcast/cover-sony.png",
      cs: "/uploads/podcast/cover-sony.png",
      se: "/uploads/podcast/cover-git.png",
      ml: "/uploads/podcast/cover-forest.png",
    }[e.series || "ds"],
    coverPosition: {
      ds: "85% top",
      fc: "52% top",
      cs: "52% top",
      se: "80% -55px",
      ml: "bottom left",
    }[e.series || "ds"],
    thumbnail: e?.thumbnail || "/icon-512.png",
    displayAvatars: getDisplayAvatars(e),
    topic: e?.topicShort || e?.topic || HYPHENS,
    tags: !e?.tags
      ? []
      : (Array.isArray(e.tags) ? e.tags : e.tags.split(" ")).filter(
          (t) => t && !t.startsWith("_"),
        ) || [],
    Speakers: getSpeakers(e),
    canPlay: !e?.virtualLink.startsWith("#") && e?.listeners,
    ctaText: getCtaText(e),
    meta: e?.meta || {
      src: "/icon-512.png",
      title: APP_PODCAST.summaryRichText,
      url: APP_PODCAST.domain,
      cta: APP_PODCAST.tagline,
    },
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
  return row?.listeners || momentUtil.isAfterDay(row?.datetime)
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
