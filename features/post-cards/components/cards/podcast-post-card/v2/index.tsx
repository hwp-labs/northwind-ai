import clsx from "clsx";
import { Header, Footer } from "./builder";
import { data } from "@/lib/supabase/services/podcasts/data-v2";

interface Props {
  page?: number;
}

export const PodcastV2PostCard = ({ page = 1 }: Props) => {
  const item = data[0];
  const isFiresideChat = item.series === "fireside-chat";
  //
  return (
    <>
      <Header podcast={item} />
      <main className="bg-foreground relative flex-1 overflow-hidden">
        <div className="absolute inset-0 z-1 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat opacity-8 grayscale filter" />
        <img
          src={`/uploads/podcast/${isFiresideChat ? "sony.png" : "halim.png"}`}
          className={clsx(
            "absolute size-full object-cover",
            isFiresideChat
              ? "_scale-x-[-1] object-top-left"
              : "object-top-right",
          )}
          alt=""
        />
        <div className="debug_ absolute bottom-16 left-8 z-1">
          {/* <PodcastPostCardBuilder.Datetime {...item} />
                  <PodcastPostCardBuilder.Venue {...item} />
                  {item.guestUsername ? (
                    <PodcastPostCardBuilder.Speakers {...item} />
                  ) : (
                    <p className="my-12" />
                  )}
                  <PodcastPostCardBuilder.Hero {...item} /> */}
        </div>
        <Footer podcast={item} />
      </main>
    </>
  );
};
