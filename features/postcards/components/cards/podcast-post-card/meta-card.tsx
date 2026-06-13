import {
  IconWorldUpload,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { APP_PODCAST } from "@/constants/APP_PODCAST";
import { EpisodeDto } from "@/lib/podcast/episodes/types";

interface Props {
  meta: EpisodeDto["meta"];
}

export const MetaCard = ({ meta }: Props) => {
  return (
    <div
      className="mt-4 mr-4 rounded-sm px-3 py-2.5"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <figure className="flex-row-sx gap-3">
        <img
          src={meta!.src}
          width={40}
          alt=""
          className="size-[40px] rounded-[12px] border-2"
        />
        <figcaption className="flex flex-col gap-0.5">
          <div className="line-clamp-2_ text-[13.5px] text-white">
            {meta!.title}
          </div>
          <div className="flex-row-cs gap-1.5 text-xs text-[#bbb]">
            <span className="text-chart-4">
              {meta?.social === "fb" ? (
                <IconBrandFacebook size={14} />
              ) : meta?.social === "ig" ? (
                <IconBrandInstagram size={14} />
              ) : (
                <IconWorldUpload size={12} />
              )}
            </span>
            <span>{meta!.url}</span>
          </div>
        </figcaption>
      </figure>
      <button className="text-background flex-row-cc mt-4 h-[36px] w-full gap-2 rounded-sm bg-gradient-to-b from-[#f9f8f9] to-[#d0cdd4] text-sm font-medium">
        {APP_PODCAST.tagline}
      </button>
    </div>
  );
};
