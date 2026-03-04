import { redirect } from "next/navigation";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { PageParams } from "@/types";
import { PATH } from "@/constants/PATH";

export default async function PodcastTranscriptPage({
  params,
}: PageParams<string[]>) {
  const item = await PodcastHelper.GetItemAsync(params);
  const url = item.notionUrl || PATH.home;
  //
  redirect(url);
}
