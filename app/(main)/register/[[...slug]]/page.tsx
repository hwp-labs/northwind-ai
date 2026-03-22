import { Metadata } from "next";
import { ContactFormWidget } from "@/components/widgets/contact-form-widget";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <main className="flex-centered lg:min-h-[80svh] lg:mb-24 mb-12">
      <div className="w-full max-w-2xl">
        <ContactFormWidget />
      </div>
    </main>
  );
}
