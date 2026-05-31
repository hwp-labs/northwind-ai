import { Header } from "@/features/post-cards/components/header";
import { PageLayout } from "@/types";

export default function PreviewPostcardsLayout({ children }: PageLayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
