import { PromptBar } from "@/components/molecules/prompt-bar";
import { Hero } from "@/components/molecules/hero";
import { CTAButtons } from "@/components/molecules/cta-buttons";
import { CoverImage } from "@/components/atoms/cover-image";
import { StatisticsWidget } from "@/components/widgets/statistics-widget";
import { ValuePropositionCards } from "@/components/molecules/value-proposition-cards";

export default function HomePage() {
  return (
    <main>
      <PromptBar />
      <Hero />
      <CTAButtons />
      <CoverImage />
      <StatisticsWidget />
      <ValuePropositionCards />
    </main>
  );
}
