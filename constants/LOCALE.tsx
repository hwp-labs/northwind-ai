import {
  IconMoodSmileFilled,
  IconPigFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import { AnchorOutbound } from "@/components/atoms/anchor";
import { APP } from "./APP";

export const COPY = {
  teachMe: `Hello ${APP.name}, I'd like to *Learn More* about the ongoing \`AI Product Engineering\` and \`ML Data Engineering\` training..`,
  prompt: `How can ${APP.name} help automate my business?`,
  promptWithHi: `Hi, how can ${APP.name} help automate my business?`,
  promptShort: `Automate My Business w/${APP.name}`,
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
  hyphenTransform:
    "-transform repetitive business processes into smart, autonomous AI agents.",
  transform:
    "Transform repetitive business processes into smart, autonomous AI agents.",
  transformRichText: (
    <>
      -transform repetitive business processes into{" "}
      <strong className="font-medium">smart, autonomous AI agents</strong>.
    </>
  ),
  transformRichTextWithLink: (
    <>
      -transform repetitive business processes into smart, autonomous{" "}
      <AnchorOutbound
        href="https://agent.ai/"
        className="text-brand font-medium underline underline-offset-2"
      >
        AI agents.
      </AnchorOutbound>
    </>
  ),
  TransformRichTextWithLink: (
    <>
      Transform repetitive business processes into smart, autonomous{" "}
      <AnchorOutbound
        href="https://agent.ai/"
        className="text-brand font-medium underline underline-offset-2"
      >
        AI agents.
      </AnchorOutbound>
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
      description: `Reduce operational costs by up to 40%. 
            AI agents run 24/7, and free up time for you and your team to focus on innovation and leads generation.`,
    },
    {
      Icon: IconMoodSmileFilled,
      title: "Improve Quality of Service",
      description: (
        <>
          {/* Deliver fast and reliable services with AI-powered automation. */}
          AI-powered automation ensures 99% accuracy across internal business
          processes, and{" "}
          <span className="_font-medium text-white">learns and adapts</span> as
          your business grows.
        </>
      ),
    },
    {
      Icon: IconStarFilled,
      title: "Satisfy Your Customers",
      description: `Convert 10x more sales leads with seamless multi-channel integrations
      that exceed customer expectations, builds trust and brand loyalty.`,
    },
  ],
};
