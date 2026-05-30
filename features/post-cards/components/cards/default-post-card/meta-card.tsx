import { IconWorldUpload } from "@tabler/icons-react";
import { APP_PODCAST } from "@/constants/APP_PODCAST";

interface Props {
  meta?: {
    src: string;
    title: string;
    url: string;
    cta: string;
  };
  _meta?: any;
}

export const MetaCard = ({ meta }: Props) => {
  return (
    <section
      className="mt-4 rounded-sm px-2.5 py-2.5"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <figure className="flex-row-cs gap-3">
        <img
          src={meta?.src || "/icon-512.png"}
          width={40}
          alt=""
          className="rounded-[12px] border-2"
        />
        <figcaption className="flex flex-col gap-0.5">
          <div className="line-clamp-2 text-sm text-white">
            {meta?.title || APP_PODCAST.title}
          </div>
          <div className="flex-row-cs gap-1.5 text-xs text-[#bbb]">
            <IconWorldUpload size={12} />
            <span>{meta?.url || APP_PODCAST.domain}</span>
          </div>
        </figcaption>
      </figure>
      <button className="bg-foreground text-background flex-row-cc mt-4 h-[36px] w-full gap-2 rounded-sm text-sm font-medium">
        {meta?.cta || "Join the conversation"}
      </button>
    </section>
  );
};
