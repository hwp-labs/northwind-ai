import { PromptBar } from "@/components/molecules/prompt-bar";
import { Hero } from "@/components/molecules/hero";
import { CTAButtons } from "@/components/molecules/cta-buttons";
import { CoverImage } from "@/components/atoms/cover-image";
import { StatisticsWidget } from "@/components/widgets/statistics-widget";
import { ValuePropositionCards } from "@/components/molecules/value-proposition-cards";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

export default function HomePage() {
  return (
    <main>
      <PromptBar />
      <Hero title={COPY.automate} subtitle={COPY.transformRichTextWithLink}>
        {APP.title}
      </Hero>
      <CTAButtons />
      <CoverImage />
      <StatisticsWidget />
      <ValuePropositionCards />
    </main>
  );
}
