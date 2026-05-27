import { PropsWithChildren } from "react";
import { IconWorldUpload } from "@tabler/icons-react";
import clsx from "clsx";
import { APP_QVERSE } from "@/constants/APP_QVERSE";

export const classNames = {
  brandBg: "bg-[#0a0a2c]",
  brandText: "text-[#0a0a2c]",
  accentBg: "bg-[#202b58]",
  whiteGradient: "bg-gradient-to-b from-[#f9f8f9] to-[#d0cdd4]",
  blueGradient: "bg-gradient-to-r from-purple-600 to-blue-500",
  heroGradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400",
  glass: `
  border-white/10 
  bg-gradient-to-br 
  from-white/10 
  to-white/5 
  shadow-inner 
  backdrop-blur-3xl
  `,
  glass2: `
  border-white/20 
  bg-white/10 
  shadow-2xl
  backdrop-blur-xl 
  `,
};

const Container = ({ children }: PropsWithChildren) => {
  return (
    <main
      className={clsx(
        "debug_ text-foreground h-[584px] bg-[url('/uploads/qverse/samantha.webp')] bg-cover px-8 py-6",
        classNames.brandBg,
      )}
    >
      {children}
    </main>
  );
};

const Hero = () => (
  <hgroup
    className={clsx(
      "font-f4 text-[118px] leading-24 font-bold tracking-wide text-transparent italic [&>h1]:bg-clip-text",
    )}
  >
    <h1 className={classNames.whiteGradient}>Discover</h1>
    <h1 className={classNames.whiteGradient}>Web3</h1>
    <h1 className={classNames.heroGradient}>Apps</h1>
  </hgroup>
);

interface EventProps {
  date: string;
  time?: string;
  venue?: string;
}

const Event = ({ date, time, venue }: EventProps) => (
  <div className={clsx("rounded-3xl border px-8 py-4", classNames.glass2)}>
    <div className="flex-row-cb font-f2 text-lg tracking-wide [&>div]:grid [&>div]:-space-y-1 [&>div>b]:whitespace-nowrap [&>div>small]:font-semibold">
      <div>
        <small>Date</small>
        <b>Sun, May 3rd</b>
      </div>
      <div>
        <small>Time</small>
        <b>{time || "8PM WAT"}</b>
      </div>
      <div className="flex-1_">
        <small>Venue</small>
        <b>{venue || "Twitter/X Spaces"}</b>
      </div>
    </div>
  </div>
);

const Address = () => (
  <address className="font-f2 text-[10px]">
    Powered by <b>Bitcoin Verse Ecosystem</b>, and Northstar Analytics.
  </address>
);

const CtaBtn = ({ children }: PropsWithChildren) => (
  <button
    className={clsx(
      "flex-row-cs gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold",
      classNames.whiteGradient,
      classNames.brandText,
    )}
  >
    <IconWorldUpload size={16} /> {children || APP_QVERSE.domainDisplayText}
  </button>
);

export const Builder = { Container, Hero, Event, Address, CtaBtn };
