import { redirect } from "next/navigation";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

export default function PodcastFormPage() {
  const text = COPY.teachMe;
  const textEncoded = encodeURIComponent(text);
  const url = `${APP.whatsappSalesUrl}?text=${textEncoded}`;
  //
  redirect(url);
}
