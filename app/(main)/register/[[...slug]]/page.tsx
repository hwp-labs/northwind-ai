import { Metadata } from "next";
import { PageContainer } from "@/components/widgets/contact-form-widget/ui/page-container";
import { ContactFormWidget } from "@/components/widgets/contact-form-widget";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <PageContainer>
      <ContactFormWidget />
    </PageContainer>
  );
}
