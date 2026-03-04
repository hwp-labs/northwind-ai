import { redirect } from "next/navigation";
import { PATH } from "@/constants/PATH";

export default function CreatePodcastTranscriptPage() {
  const url = process.env.CREATE_PODCAST_TRANSCRIPT_URL || PATH.home;
  //
  redirect(url);
}
