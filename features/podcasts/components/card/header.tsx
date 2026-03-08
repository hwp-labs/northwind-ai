import { SquareArrowOutUpRightIcon, CalendarClockIcon } from "lucide-react";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import clsx from "clsx";

interface Props {
  isOngoing: boolean;
  spaceUrl: string | null;
  dateText: string;
  timeText: string;
}

export const Header = ({ isOngoing, spaceUrl, dateText, timeText }: Props) => {
  return (
    <header className="flex-row-cb debug_ mt-6 font-[Poppins] text-sm font-medium text-white">
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
        <p className="tracking-wide_">{isOngoing ? "Ongoing" : "Upcoming"}</p>
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
