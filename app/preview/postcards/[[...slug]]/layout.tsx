import { Header } from "@/features/postcards/components/header";
import { PageLayout } from "@/types";

export default function PreviewPostcardsLayout({ children }: PageLayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
