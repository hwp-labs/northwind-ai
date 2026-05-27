import { PropsWithChildren } from "react";
import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";

interface Props extends PropsWithChildren {
  podcast: TransformedEpisodeDto;
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
        className="px-4 py-2 text-[38px] leading-[35px] font-black text-white"
      />
    ) : (
      <>
        <hgroup className="text-[42px] leading-[42px] font-black text-white uppercase">
          {podcast?.title ? (
            <h1 dangerouslySetInnerHTML={{ __html: podcast.title }} />
          ) : null}
          <h1>{podcast?.isLongTitle ? null : podcast.seriesText}</h1>
        </hgroup>
        {podcast?.summary ? (
          <p
            className="text-foreground font-f2 p-1 text-sm font-medium tracking-wide"
            dangerouslySetInnerHTML={{ __html: podcast.summary }}
          />
        ) : null}
      </>
    )}
  </section>
);
