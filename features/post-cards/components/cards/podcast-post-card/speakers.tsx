import { PropsWithChildren } from "react";
import { FaXTwitter } from "react-icons/fa6";
import clsx from "clsx";
//
import { AnchorOutbound } from "@/components/atoms/anchor";
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

interface Props extends PropsWithChildren {
  podcast: TransformedPodcastDto;
}

export const Speakers = ({ podcast }: Props) => {
  const hostSafe = podcast?.host || "@2gbeh";

  if (!podcast?.host && !podcast?.guest) return <div className="my-12" />;

  if (typeof podcast.guest === "string")
    return (
      <ul className="flex-row-cc debug_ mt-6 mb-6 w-[320px] -rotate-4 gap-8 text-sm">
        <Speaker label="host" value={hostSafe} />
        <Speaker label="guest" value={podcast.guest} invert />
      </ul>
    );

  return (
    <div className="debug_ my-4 w-[320px] -rotate-0 text-sm">
      <Speaker label="host" value={hostSafe} invert />
      <ul className="mt-4 grid grid-cols-2 gap-2">
        {podcast.guest?.map((item, i) => (
          <Speaker key={i} label="guest" value={item} />
        ))}
      </ul>
    </div>
  );
};

interface SpeakerProps {
  label: string;
  value: string;
  invert?: boolean;
}

const Speaker = ({ label, value, invert }: SpeakerProps) => (
  <li className="flex-row-cs flex-col gap-1">
    <span
      className={clsx(
        "flex-row-cs gap-1 bg-[#071228] px-1 py-0.5 text-white font-semibold",
        invert && "bg-foreground! text-[#071228]!",
      )}
    >
      {label}
      <i className="border-muted border-l pl-1">
        <FaXTwitter size={12} />
      </i>
    </span>
    <AnchorOutbound
      href={`https://x.com/${value.replace("@", "")}`}
      style={{ textShadow: "-1px 1px 1px white" }}
      className="font-semibold"
    >
      {value}
    </AnchorOutbound>
  </li>
);
