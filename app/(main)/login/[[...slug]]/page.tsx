import { Metadata } from "next";
import { LoginFormWidget } from "@/components/widgets/login-form-widget";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <main className="flex-centered min-h-[80svh] lg:mb-24 mb-12">
      <div className="w-full max-w-md">
        <LoginFormWidget />
      </div>
    </main>
  );
}
