import { Header } from "@/components/species/dashboard/components/header";
import { PageLayout } from "@/types";

export default function DashboardLayout({ children }: PageLayout) {
  return (
    <>
      <Header />
      <div className="px-6">{children}</div>
    </>
  );
}
