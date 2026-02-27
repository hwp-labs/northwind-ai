import { SquareArrowOutUpRightIcon, CalendarClockIcon } from "lucide-react";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import clsx from "clsx";
//
import { PodcastDto } from "@/lib/supabase/services/podcasts/types";
import { CUR_DATE, CUR_HOUR_UTC } from "@/constants";

export const Header = ({
  date,
  dateText,
  hour = 0,
  timeText,
  spaceUrl,
}: PodcastDto) => {
  const ongoing = CUR_DATE === date && CUR_HOUR_UTC >= hour;
  //
  return (
    <header className="flex-row-cb debug_ mt-6 font-[Poppins] text-sm font-medium text-white">
      {/* LEFT */}
      <section className="flex-row-cs gap-2">
        <div className="relative">
          {ongoing ? (
            <FaMicrophoneAlt size={20} />
          ) : (
            <FaMicrophoneAltSlash size={20} />
          )}
          <div
            className={clsx(
              "absolute top-0 right-0 size-2 rounded-full",
              ongoing ? "bg-emerald-500" : "bg-rose-500",
            )}
          ></div>
        </div>
        <p className="tracking-wide_">{ongoing ? "Ongoing" : "Upcoming"}</p>
      </section>
      {/* RIGHT */}
      <section>
        {ongoing ? (
          <a
            href={spaceUrl || "#"}
            title="Join"
            target="_blank"
            rel="noopener noreferrer"
            className="_debug ml-auto"
          >
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
