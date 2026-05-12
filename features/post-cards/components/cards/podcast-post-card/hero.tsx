import { PropsWithChildren } from "react";
import { PodcastV2 } from "@/lib/supabase/services/podcasts/data-v2";

interface Props extends PropsWithChildren {
  podcast?: PodcastV2;
}

export const Hero = ({ children, podcast }: Props) => (
  <section
    style={{
      background:
        "linear-gradient(to right, black, black, rgba(255,255,255,0))",
    }}
    className="debug_ min-w-[520px]"
  >
    {children ? (
      <h1
        dangerouslySetInnerHTML={{ __html: children }}
        className="px-4 py-2 text-[28px] leading-[35px] font-black text-white"
      />
    ) : (
      <>
        <hgroup className="text-[52px] leading-[45px] font-black text-white uppercase">
          {podcast?.title ? (
            <h1 dangerouslySetInnerHTML={{ __html: podcast.title }} />
          ) : null}
          <h1>{podcast?.isLongTitle ? null : "Design Session"}</h1>
        </hgroup>
        {podcast?.summary ? (
          <p
            className="text-foreground p-1 font-[Montserrat] text-sm font-medium tracking-wide"
            dangerouslySetInnerHTML={{ __html: podcast.summary }}
          />
        ) : null}
      </>
    )}
  </section>
);
