import clsx from "clsx";
import { IconExternalLink } from "@tabler/icons-react";
import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

interface Props {
  variant: "hero" | "list" | "preview" | "snap";
  episode?: TransformedEpisode;
  topic?: React.ReactNode;
  className?: string;
}

export const Topic = ({ variant, episode, topic, className }: Props) => {
  const safeTopic = topic || episode?.topic;
  const h1ClassName =
    "font-f3 [&>span]:font-f2 pr-4 text-[32px] leading-[36px] font-semibold tracking-wide text-white";

  if (variant === "snap") {
    return (
      <hgroup className="space-y-2">
        {episode?.topicRichText ? (
          <h1
            className={clsx(h1ClassName, className)}
            dangerouslySetInnerHTML={{ __html: episode.topicRichText }}
          />
        ) : (
          <h1 className={clsx(h1ClassName, className)}>{safeTopic}</h1>
        )}
        {episode?.summary ? (
          <p className="text-[#bbb]_ pr-8 text-xs leading-[18px] text-blue-200 underline underline-offset-2">
            {episode.summary}
            <IconExternalLink className="mx-1.5 inline" size={16} />
          </p>
        ) : null}
      </hgroup>
    );
  }

  return (
    <strong
      className={clsx(
        variant === "hero" &&
          "font-f4 text-[26px] leading-[28px] font-medium tracking-[3px]",
        variant === "list" && "line-clamp-2 min-h-[25px] text-sm text-white",
        variant === "preview" && "text-center text-lg text-white",
      )}
    >
      {safeTopic}
    </strong>
  );
};
