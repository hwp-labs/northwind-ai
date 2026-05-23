import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { ScrollToTop } from "@/components/organisms/scroll-to-top";
import { PageLayout } from "@/types";

export default function PodcastLayout({ children }: PageLayout) {
  return (
    <>
      <div className="_min-h-[75vh] dark">{children}</div>
    </>
  );
}
