import { PropsWithChildren } from "react";
import clsx from "clsx";
import { PodcastV2 } from "@/lib/supabase/services/podcasts/data-v2";

interface Props extends PropsWithChildren {
  podcast?: PodcastV2;
}

export const HeroDesignSession = ({ children, podcast }: Props) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, black, black, rgba(255,255,255,0))",
      }}
    >
      {children || (
        <hgroup>
          <h1 className="grid text-[58px] leading-[45px] font-black text-white uppercase">
            {podcast?.title}
            <br />
            Design Session
          </h1>
          {podcast?.summary ? (
            <div className="text-foreground uppercase_ px-1 py-1 font-[Montserrat] text-sm font-medium tracking-wide">
              <p dangerouslySetInnerHTML={{ __html: podcast.summary }} />
            </div>
          ) : null}
        </hgroup>
      )}
    </section>
  );
};
