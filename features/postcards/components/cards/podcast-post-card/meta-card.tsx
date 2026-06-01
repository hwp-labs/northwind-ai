import { IconWorldUpload } from "@tabler/icons-react";
import { APP_PODCAST } from "@/constants/APP_PODCAST";

interface Props {
  meta?: {
    src: string;
    title?: string;
    url: string;
    cta: string;
  };
  _meta?: any;
}

export const MetaCard = ({ meta }: Props) => {
  return (
    <section
      className="mt-4 rounded-sm px-3 py-2.5 mr-4"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <figure className="flex-row-sx gap-3">
        <img
          src={meta?.src || "/icon-512.png"}
          width={40}
          alt=""
          className="rounded-[12px] border-2"
        />
        <figcaption className="flex flex-col gap-0.5">
          <div className="text-[13.5px] text-white">
            {meta?.title || APP_PODCAST.summary}
          </div>
          <div className="flex-row-cs gap-1.5 text-xs text-[#bbb]">
            <IconWorldUpload size={12} className="text-chart-4" />
            <span>{meta?.url || APP_PODCAST.domain}</span>
          </div>
        </figcaption>
      </figure>
      <button className="text-background flex-row-cc mt-4 h-[36px] w-full gap-2 rounded-sm bg-gradient-to-b from-[#f9f8f9] to-[#d0cdd4] text-sm font-medium">
        {meta?.cta || "Join the conversation"}
      </button>
    </section>
  );
};
