import { redirect } from "next/navigation";
import { PATH } from "@/constants/PATH";

export default function PodcastFormPage() {
  const url = process.env.CREATE_DESIGN_SESSION_URL || PATH.podcast;
  //
  redirect(url);
}