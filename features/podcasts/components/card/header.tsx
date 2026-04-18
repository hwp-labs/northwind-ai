import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { SquareArrowOutUpRightIcon, CalendarClockIcon } from "lucide-react";
import clsx from "clsx";
//
import { AnchorOutbound } from "@/components/atoms/anchor";
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

export const Header = ({
  isOngoing,
  isConcluded,
  spaceUrl,
  dateText,
  timeText,
}: TransformedPodcastDto) => {
  return (
    <header className="flex-row-cb debug_ mt-6 font-[Poppins] text-xs font-medium text-white sm:text-sm">
      {/* LEFT */}
      <section className="flex-row-cs gap-2">
        <div className="relative">
          {isOngoing ? (
            <FaMicrophoneAlt size={20} />
          ) : (
            <FaMicrophoneAltSlash size={20} />
          )}
          <div
            className={clsx(
              "absolute top-0 right-0 size-2 rounded-full",
              isOngoing ? "bg-emerald-500" : "bg-rose-500",
            )}
          ></div>
        </div>
        <p className="tracking-wide_">
          {isConcluded ? "Concluded" : isOngoing ? "Ongoing" : "Upcoming"}
        </p>
      </section>
      {/* RIGHT */}
      <section>
        {isOngoing ? (
          <AnchorOutbound
            href={spaceUrl || undefined}
            title="Join"
            className="_debug flex-row-cs ml-auto gap-1.5"
          >
            Live
            <SquareArrowOutUpRightIcon size={16} strokeWidth={3} />
          </AnchorOutbound>
        ) : (
          <span className="flex-row-cs gap-2">
            <CalendarClockIcon size={18} />
            {`${dateText} | ${timeText}`}
          </span>
        )}
      </section>
    </header>
  );
};
