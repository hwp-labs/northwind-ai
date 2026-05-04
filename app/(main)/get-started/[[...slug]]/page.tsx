import type { Metadata } from "next";
import { PageContainer } from "@/components/widgets/contact-form-widget/ui/page-container";
import { ContactFormWidget } from "@/components/widgets/contact-form-widget";

export const metadata: Metadata = {
  title: "Get Started",
};

export default function GetStartedPage() {
  return (
    <PageContainer>
      <ContactFormWidget />
    </PageContainer>
  );
}
