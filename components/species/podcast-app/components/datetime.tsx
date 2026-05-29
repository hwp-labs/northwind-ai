import {
  IconCalendarEventFilled,
  IconClockHour8Filled,
} from "@tabler/icons-react";

import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";

interface Props {
  episode: TransformedEpisodeDto;
  variant?: "text" | "icon";
}

export const Datetime = ({ episode, variant = "icon" }: Props) => {
  return variant === "icon" ? (
    <div className="flex-row-cs font-f3_ _font-medium gap-2 text-sm tracking-wide">
      <IconCalendarEventFilled size={18} />
      <span>{episode.dateTextShort}</span>
      <IconClockHour8Filled size={18} />
      <time dateTime={episode.datetime}>{episode.timeText} (WAT)</time>
    </div>
  ) : (
    <p className="text-muted-foreground text-[12px]">
      {episode.datetimeTextShort}
    </p>
  );
};
