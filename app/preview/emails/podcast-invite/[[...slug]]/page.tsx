import { Metadata } from "next";
import { PodcastInviteEmail } from "@/components/emails/podcast-invite-email";
import { EpisodeHelper } from "@/lib/podcast/episodes/helper";

export const metadata: Metadata = {
  title: "Podcast Invite Email",
};

export default async function PreviewPodcastInviteEmailPage() {
  return <PodcastInviteEmail data={EpisodeHelper.GetMostRecentItem()} />;
}
