import {
  IconCalendarEventFilled,
  IconClockHour8Filled,
} from "@tabler/icons-react";

import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";

export const Datetime = ({ episode }: { episode: TransformedEpisodeDto }) => {
  return (
    <div className="flex-row-cs font-[Raleway]_ _font-medium gap-2 text-sm tracking-wide">
      <IconCalendarEventFilled size={18} />
      <span>{episode.dateTextShort}</span>
      <IconClockHour8Filled size={18} />
      <time dateTime={episode.datetime}>{episode.timeText} (WAT)</time>
    </div>
  );
};
