import {
  IconBrandXFilled,
  IconBrandYoutubeFilled,
  IconCalendarEventFilled,
  IconClockHour8Filled,
  IconMapPinFilled,
} from "@tabler/icons-react";

import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

interface Props {
  episode: TransformedEpisode;
  variant?: "text" | "icon";
  tonight?: boolean;
  _tonight?: boolean;
  yt?: boolean;
  _yt?: boolean;
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
    <p className="text-muted-foreground text-sm text-[12px]">
      EP {episode.id0} &bull; {episode.datetimeShort}
    </p>
  );
};

export const DatetimeVenue = ({ episode, tonight, yt }: Props) => {
  return (
    <div className="flex-row-cs font-medium_ gap-2 text-xs tracking-wide whitespace-nowrap">
      <IconCalendarEventFilled size={16} />
      <span>{tonight ? "TONIGHT 🦊" : episode.dateShort}</span>
      <IconClockHour8Filled size={16} />
      <time dateTime={episode.datetime}>{episode.time} (WAT)</time>
      {yt ? (
        <>
          <IconBrandYoutubeFilled size={16} />
          <span>YouTube</span>
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
