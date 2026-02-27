import { Metadata } from "next";
//
import { PageParams } from "@/types";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { COPY } from "@/constants/LOCALE";
//
import { Header, Host, Guests } from "@/features/podcasts/components/card";
import { ListenerFormWidget } from "@/features/podcasts/components/listener-form-widget";

export async function generateMetadata({
  params,
}: PageParams<string[]>): Promise<Metadata> {
  const item = await PodcastHelper.GetItemAsync(params);
  //
  return {
    title: `${item.appName} Design Session`,
  };
}

export default async function PodcastPage({ params }: PageParams<string[]>) {
  const item = await PodcastHelper.GetItemAsync(params);
  //
  return (
    <main className="flex-centered min-h-[80svh]">
      <div className="mx-auto mb-16 max-w-lg overflow-hidden rounded-4xl bg-[#9b63fa] shadow-2xl lg:rounded-2xl">
        <div className="grid gap-6 px-6 sm:px-8">
          <Header {...item} />
          <hgroup className="grid gap-2 py-4">
            <h1 className="grid text-3xl sm:text-4xl leading-[30px] sm:leading-[35px] font-black text-white uppercase_">
              {item.appName} Design Session
            </h1>
            <p className="text-foreground _font-[Montserrat] text-xs font-medium tracking-wide">
              {COPY.podcastSummary.replaceAll("%", item.appName)}
            </p>
          </hgroup>
        </div>
        <section className="px-6 sm:px-8">
          <ListenerFormWidget />
        </section>
        <footer className="flex-row-cb gap-2 bg-[#8253d1] px-6 sm:px-8 py-5 text-sm">
          <Host />
          <Guests podcast_id={item.id} />
        </footer>
      </div>
    </main>
  );
}
