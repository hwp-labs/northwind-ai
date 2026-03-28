import { redirect } from "next/navigation";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { PageIdParams } from "@/types";
import { PATH } from "@/constants/PATH";

export default async function PodcastKeynotePage({
  params,
}: PageIdParams) {
  const item = await PodcastHelper.GetIdItemAsync(params);
  const url = item.notionUrl || PATH.home;
  //
  redirect(url);
}
