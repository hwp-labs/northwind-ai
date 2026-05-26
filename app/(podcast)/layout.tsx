import { Modal } from "@/components/species/podcast-app/components/modal";
import { PageLayout } from "@/types";

export default function PodcastLayout({ children }: PageLayout) {
  return (
    <div className="dark">
      {children}
      <Modal />
    </div>
  );
}
