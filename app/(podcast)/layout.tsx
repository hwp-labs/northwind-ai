import type { Metadata } from "next";
import { Modal } from "@/components/species/podcast-app/components/modal";
import { PageLayout } from "@/types";
import { METADATA_PODCAST } from "@/constants/META_PODCAST";

export const metadata: Metadata = METADATA_PODCAST;

export default function PodcastLayout({ children }: PageLayout) {
  return (
    <div className="dark">
      {children}
      <Modal />
    </div>
  );
}
