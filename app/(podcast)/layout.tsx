import type { Metadata } from "next";
import { PageLayout } from "@/types";
import { Modal } from "@/features/podcast/components/modal";
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
