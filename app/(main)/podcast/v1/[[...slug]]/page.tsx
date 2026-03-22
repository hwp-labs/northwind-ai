import { Metadata } from "next";
//
import { PageParams } from "@/types";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
//
import { Header, Host, Guests } from "@/features/podcasts/components/card";
import { RsvpFormWidget } from "@/features/podcasts/components/rsvp-form-widget";

export async function generateMetadata({
  params,
}: PageParams<string[]>): Promise<Metadata> {
  const item = await PodcastHelper.GetItemAsync(params);
  //
  return {
    title: `${item.title} Design Session`,
  };
}

export default async function PodcastPageV1({ params }: PageParams<string[]>) {
  const item = await PodcastHelper.GetItemAsync(params);
  //
  return (
    <main className="flex-centered min-h-[80svh]">
      <div className="mx-auto mb-16 max-w-lg overflow-hidden rounded-4xl bg-[#9b63fa] shadow-2xl lg:rounded-2xl">
        <div className="grid gap-6 px-6 sm:px-8">
          <Header {...item} />
          <hgroup className="grid gap-2 py-4">
            <h1 className="uppercase_ grid text-2xl leading-[35px] font-black text-white sm:text-4xl sm:leading-[45px]">
              {item.title} Design Session
            </h1>
            <p
              className="text-foreground _font-[Montserrat] mt-0 text-[11px] font-medium tracking-wide sm:text-xs"
              dangerouslySetInnerHTML={{
                __html: `${item.richTextLine1} ${item.richTextLine2}`,
              }}
            />
          </hgroup>
        </div>
        <section className="px-6 sm:px-8">
          <RsvpFormWidget />
        </section>
        <footer className="flex-row-cb gap-2 bg-[#8253d1] px-6 py-5 text-sm sm:px-8">
          <Host />
          <Guests podcast_id={item.id} />
        </footer>
      </div>
    </main>
  );
}
