import clsx from "clsx";
import { IconExternalLink } from "@tabler/icons-react";
import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

interface Props {
  episode?: TransformedEpisode;
  topic?: string;
  variant: "hero" | "list" | "preview" | "snap";
}

export const Topic = ({ episode, topic, variant }: Props) => {
  if (variant === "snap")
    return (
      <hgroup className="space-y-2">
        <h1 className="font-f3 pr-4 text-[32px] leading-[36px] font-semibold tracking-wide text-white">
          {topic || episode?.topic}
        </h1>
        {episode?.series === "cs" ? (
          <p className="text-[#bbb]_ pr-8 text-xs leading-[18px] text-blue-200 underline underline-offset-2">
            {episode?.summary}
            <IconExternalLink className="mx-1.5 inline" size={16} />
          </p>
        ) : null}
      </hgroup>
    );

  return (
    <strong
      className={clsx(
        variant === "hero" &&
          "font-f4 text-[26px] leading-[28px] font-medium tracking-[3px]",
        variant === "list" && "line-clamp-2 min-h-[25px] text-sm text-white",
        variant === "preview" && "text-center text-lg text-white",
      )}
    >
      {topic || episode?.topic}
    </strong>
  );
};
