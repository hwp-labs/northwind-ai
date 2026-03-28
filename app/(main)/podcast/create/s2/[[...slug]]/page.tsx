import { redirect } from "next/navigation";
import { PATH } from "@/constants/PATH";

export default function CreatePodcastSeries2Page() {
  const url = process.env.CREATE_FIRESIDE_CHAT_URL || PATH.home;
  //
  redirect(url);
}