import { PageLayout } from "@/types";

export const PageContainer = ({ children }: PageLayout) => {
  return (
    <main className="flex-centered mb-12 md:mb-24 md:min-h-[80svh]">
      <div className="w-full max-w-2xl">{children}</div>
    </main>
  );
};
