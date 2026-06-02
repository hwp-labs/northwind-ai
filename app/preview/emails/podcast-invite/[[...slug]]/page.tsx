import { Metadata } from "next";
import { PodcastInviteEmail } from "@/components/emails/podcast-invite-email";
import { transformEpisode } from "@/lib/podcast/episodes/utils";

export const metadata: Metadata = {
  title: "Podcast Invite Email",
};

export default async function PreviewPodcastInviteEmailPage() {
  return <PodcastInviteEmail data={transformEpisode()} />;
}
