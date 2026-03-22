import { Header } from "@/features/post-cards/components/header";
import { PageLayout } from "@/types";

export default function PreviewPostsLayout({ children }: PageLayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
