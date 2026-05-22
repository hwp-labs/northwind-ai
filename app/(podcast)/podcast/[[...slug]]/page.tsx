import { LucideIconButton } from "@/components/atoms/icon-button";
import { Logo } from "@/components/logo";
import {
  ArrowLeftIcon,
  ChartCandlestickIcon,
  ChartPieIcon,
  ChevronLeftIcon,
  FunnelIcon,
  LucideIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import { PropsWithChildren } from "react";

export default async function PodcastPage() {
  return (
    <main className="grid gap-4">
      <header className="flex-row-cb debug_ h-[60px] border-b px-4">
        <div className="flex-row-cs gap-2.5">
          <Logo iconOnly />
          <strong className="font-[Bebas_Neue] text-lg tracking-widest">
            Podcast
          </strong>
        </div>
        <div className="flex-row-cs _gap-8">
          <LucideIconButton Icon={SearchIcon} />
          {/* <ChartCandlestickIcon /> */}
          <LucideIconButton Icon={ChartPieIcon} />
        </div>
      </header>
      <section className="px-4">
        <div className="flex-row-cb gap-2">
          <LucideIconButton Icon={ArrowLeftIcon} />
          <div className="bg-muted flex-row-ce h-[40px] flex-1 gap-2 rounded-full pr-1 pl-4">
            <input
              type="text"
              className="debug flex-1"
              placeholder="Search episodes, guests..."
            />
            <LucideIconButton Icon={SearchIcon} />
            {/* <XIcon size={24} /> */}
          </div>
          <LucideIconButton Icon={FunnelIcon} />
        </div>
      </section>
    </main>
  );
}
