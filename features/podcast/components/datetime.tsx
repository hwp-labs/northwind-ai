import {
  IconBrandTiktokFilled,
  IconBrandXFilled,
  IconBrandYoutubeFilled,
  IconCalendarEventFilled,
  IconClockHour8Filled,
} from "@tabler/icons-react";

import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

interface Props {
  episode: TransformedEpisode;
  variant?: "text" | "icon";
  tonight?: boolean;
}

export const Datetime = ({ episode, variant = "icon" }: Props) => {
  return variant === "icon" ? (
    <div className="flex-row-cs gap-2 text-sm tracking-wide">
      <IconCalendarEventFilled size={18} />
      <span>{episode.dateShort}</span>
      <IconClockHour8Filled size={18} />
      <time dateTime={episode.datetime}>{episode.time} (WAT)</time>
    </div>
  ) : (
    <p className="text-muted-foreground line-clamp-1 text-sm text-[12px]">
      EP {episode.id0} &bull; {episode.datetimeShort}
    </p>
  );
};

export const DatetimeVenue = ({ episode, tonight }: Props) => {
  return (
    <div className="flex-row-cs font-medium_ gap-2 text-xs tracking-wide whitespace-nowrap">
      <IconCalendarEventFilled size={16} />
      <span>{tonight ? "TONIGHT 🦊" : episode.dateShort}</span>
      <IconClockHour8Filled size={16} />
      <time dateTime={episode.datetime}>{episode.time} (WAT)</time>
      {episode.virtualPlatform === "yt" ? (
        <>
          <IconBrandYoutubeFilled size={16} />
          <span>YouTube</span>
        </>
      ) : episode.virtualPlatform === "tk" ? (
        <>
          <IconBrandTiktokFilled size={16} />
          <span>TikTok LIVE</span>
        </>
      ) : (
        <>
          <IconBrandXFilled size={16} />
          <span>Spaces</span>
        </>
      )}
    </div>
  );
};
