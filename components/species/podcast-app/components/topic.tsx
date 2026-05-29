import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";
import clsx from "clsx";

interface Props {
  episode: TransformedEpisodeDto;
  variant: "hero" | "list" | "preview";
}

export const Topic = ({ episode, variant }: Props) => {
  return (
    <strong
      className={clsx(
        variant === "hero" &&
          "font-f4 text-[26px] leading-[28px] font-medium tracking-[3px]",
        variant === "list" && "border_ line-clamp-2 min-h-[25px] text-white",
        variant === "preview" && "text-center text-lg text-white",
      )}
    >
      {episode.titleShort || episode.titleSeriesText}
    </strong>
  );
};
