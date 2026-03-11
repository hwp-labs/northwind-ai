import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { SquareArrowOutUpRightIcon, CalendarClockIcon } from "lucide-react";
import clsx from "clsx";
//
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

export const Header = ({
  isOngoing,
  isConcluded,
  spaceUrl,
  dateText,
  timeText,
}: TransformedPodcastDto) => {
  return (
    <header className="flex-row-cb debug_ mt-6 font-[Poppins] text-xs sm:text-sm font-medium text-white">
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
          <a
            href={spaceUrl || "#"}
            title="Join"
            target="_blank"
            rel="noopener noreferrer"
            className="_debug flex-row-cs ml-auto gap-1.5"
          >
            Live
            <SquareArrowOutUpRightIcon size={16} strokeWidth={3} />
          </a>
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
