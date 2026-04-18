import { Metadata } from "next";
import { WelcomeEmail } from "@/components/emails/welcome-email";
import { PageParams } from "@/types";
//
import mockData from "@/lib/supabase/services/contacts/data.json";

export const metadata: Metadata = {
  title: "Welcome Email",
};

export default async function PreviewWelcomeEmailPage({
  searchParams,
}: PageParams) {
  const searchParamsAsync = await searchParams;
  const name = searchParamsAsync.displayName || mockData.name;
  //
  return <WelcomeEmail data={{ ...mockData, name }} />;
}
