import { PropsWithChildren } from "react";
import { FaTwitter } from "react-icons/fa6";
import clsx from "clsx";
//
import { AnchorOutbound } from "@/components/atoms/anchor";
import { PodcastV2 } from "@/lib/supabase/services/podcasts/data-v2";

interface Props extends PropsWithChildren {
  podcast?: PodcastV2;
}

export const Speakers = ({ podcast }: Props) => {
  if (!podcast?.host && !podcast?.guest) return <div className="my-12" />;

  if (podcast?.guest && typeof podcast.guest === "string")
    return (
      <ul className="flex-row-cc debug_ mt-6 mb-6 w-[320px] -rotate-4 gap-8 text-sm">
        <Speaker label="host" value={podcast?.host || "@2gbeh"} invert />
        <Speaker label="guest" value={podcast.guest} />
      </ul>
    );

  // return item.customTag === PodcastCustomTagEnum.VERSE_RADIO ? (
  //   <div className="debug_ mt-4 mb-4 w-[320px] -rotate-0 text-sm">
  //     <Speaker label="host" value={item.guestUsername[0]} invert />
  //     <ul className="mt-4 grid grid-cols-2 gap-2">
  //       {item.guestUsername.map((item, i) =>
  //         i > 0 ? <Speaker key={item} label="guest" value={item} /> : null,
  //       )}
  //     </ul>
  //   </div>
  // ) : null;
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
        "flex-row-cs gap-2 bg-[#071228] px-1 py-0.5 text-white",
        invert && "invert",
      )}
    >
      {label}
      <FaTwitter size={12} />
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
