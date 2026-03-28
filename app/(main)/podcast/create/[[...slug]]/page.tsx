import { redirect } from "next/navigation";
import { PATH } from "@/constants/PATH";

export default function CreatePodcastPage() {
  const url = process.env.CREATE_DESIGN_SESSION_URL || PATH.home;
  //
  redirect(url);
}