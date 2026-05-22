import { PropsWithChildren } from "react";
import { FaXTwitter } from "react-icons/fa6";
import clsx from "clsx";
//
import { AnchorOutbound } from "@/components/atoms/anchor";
import {
  PodcastSpeakerDto,
  TransformedPodcastDto,
} from "@/lib/supabase/services/podcasts/types";

interface Props extends PropsWithChildren {
  podcast: TransformedPodcastDto;
}

export const Speakers = ({ podcast }: Props) => {
  if (!podcast.host && !podcast.guest) return <div className="my-12" />;

  if (Array.isArray(podcast.guest)) {
    return (
      <div className="debug_ my-4 w-[320px] -rotate-0 text-sm">
        <li>
          <Speaker label="host" {...podcast.host} invert />
        </li>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {podcast.guest.map((item, i) => (
            <li key={i}>
              <Speaker label="guest" {...item} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <ul className="flex-row-cc debug_ mt-6 mb-6 w-[320px] -rotate-4 gap-8 text-sm">
        <li>
          <Speaker label="host" {...podcast.host} />
        </li>
        <li>
          <Speaker label="guest" {...podcast.guest} invert />
        </li>
      </ul>
    );
  }
};

interface SpeakerProps extends Partial<PodcastSpeakerDto> {
  label: string;
  invert?: boolean;
}

const Speaker = ({ label, invert, ...speaker }: SpeakerProps) => {
  const username = speaker.username || "@2gbeh";
  //
  return (
    <div className="flex-col-cc gap-1">
      <div
        className={clsx(
          "flex-row-cs bg-podcast gap-1 px-1 py-0.5 font-semibold text-white",
          invert && "bg-foreground! text-podcast!",
        )}
      >
        {label}
        <i className="border-muted border-l pl-1">
          <FaXTwitter size={12} />
        </i>
      </div>
      <div
        className="flex-col-cc text-white_"
        style={{ textShadow: "-1px 1px 1px white" }}
      >
        {speaker.name ? <b>{speaker.name}</b> : null}
        <AnchorOutbound
          href={`https://x.com/${username.replace("@", "")}`}
          className="flex-row-cs gap-1.5"
        >
          <strong>{username}</strong>
          {speaker.flag ? <img src={speaker.flag} alt="" width={20} /> : null}
        </AnchorOutbound>
      </div>
    </div>
  );
};
