import {
  IconMoodSmileFilled,
  IconPigFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import { APP } from "./APP";
import {
  PodcastDto,
  PodcastFormatEnum,
} from "@/lib/supabase/services/podcasts/types";

export const COPY = {
  prompt: `How can ${APP.name} help automate my business?`,
  promptWithHi: `Hi, how can ${APP.name} help automate my business?`,
  promptWithCool: (
    <>
      We'll reach out shortly to discuss how{" "}
      <span className="text-white">{APP.name}</span> can help automate your
      business. Cool?
    </>
  ),
  automate: `Automate virtual workflows and Point-of-Sale (POS) systems with ${APP.name}`,
  automateRichText: (
    <>
      Automate virtual workflows and Point-of-Sale (POS) systems with{" "}
      <strong className="font-semibold">{APP.name}</strong>
    </>
  ),
  transform:
    "-transform repetitive business processes into smart, autonomous AI agents.",
  transformRichText: (
    <>
      -transform repetitive business processes into{" "}
      <strong className="font-medium">smart, autonomous AI agents</strong>.
    </>
  ),
  transformRichTextWithLink: (
    <>
      -transform repetitive business processes into smart, autonomous{" "}
      <a
        href="https://agent.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand font-medium underline underline-offset-2"
      >
        AI agents.
      </a>
    </>
  ),
  whatWeDo:
    "We design, integrate and deploy AI-powered solutions for small and medium-sized enterprises (SMEs).",
  email: {
    subject: `Welcome to ${APP.name}`,
    welcome: "Welcome aboard, ",
  },
  valueProposition: [
    {
      Icon: IconPigFilled,
      title: "Save Time & Money",
      description: `Reduce operational costs by up to 40% and save hours on repetitive tasks. 
            AI agents run 24/7, and free up time for you and your team to focus on innovation and leads generation.`,
    },
    {
      Icon: IconMoodSmileFilled,
      title: "Improve Quality of Service",
      description: (
        <>
          Deliver fast and reliable services with AI-powered automation. AI
          agents ensure 99% accuracy across internal business processes,{" "}
          <span className="_font-medium text-white">learning and adapting</span>{" "}
          as your business grows.
        </>
      ),
    },
    {
      Icon: IconStarFilled,
      title: "Satisfy Your Customers",
      description: `AI agents provide seamless multi-channel integration and personalized experiences that 
      exceed customer expectations, builds trust and loyalty, and converts 10x more sales leads.`,
    },
  ],
  podcastSummary:
    "An open discussion on %'s system design, core features, GTM, tech stack, data models, APIs, KPIs, and more.",
  podcastSummaryRichText: ({
    appName,
    guestName,
    guestCareerTitle,
    format,
  }: PodcastDto) => {
    const isFiresideChat = format === PodcastFormatEnum.FIRESIDE_CHAT;
    //
    return isFiresideChat ? (
      <>
        A fireside chat with <strong>{guestName}</strong> ({guestCareerTitle})
        on
        <br />
        the application areas of AI automation in the Nigerian Aviation
        industry.
      </>
    ) : (
      <>
        A design session with <strong>{guestName}</strong> ({guestCareerTitle})
        on
        <br />
        <strong>{appName}</strong>'s system design, features, tech stack, data
        models, GTM, KPIs & more 💃
      </>
    );
  },
};
