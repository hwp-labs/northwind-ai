import type { Metadata } from "next";
import { IconInfoCircle } from "@tabler/icons-react";
//
import { Header } from "@/components/species/podcast-app/components/header";
import { KpiCards } from "@/components/species/podcast-app/components/kpi-cards";
import { RingChart } from "@/components/species/podcast-app/components/ring-chart";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "Podcast Analytics",
};

export default async function PodcastAnalyticsPage() {
  const d = PodcastHelper.ComputeAnalytics();
  //
  return (
    <main className="grid gap-4">
      <Header title="Analytics" fromPath={PATH.podcast} />
      <div className="debug_ mx-auto flex w-full flex-col flex-wrap gap-4 px-4 md:w-[768px]">
        <KpiCards data={d} />
        <RingChart
          title="Listeners Overview"
          label={
            <div className="flex-row-cs gap-1">
              <span>Average LPE </span>
              <IconInfoCircle size={16} title="Listeners Per Episode" />
            </div>
          }
          value={d.listeners?.averageRate}
          valueText={`${d.listeners?.averageRate}%`}
          keys={[
            { label: "Total Listeners", value: d.listeners?.total },
            { label: "Avg. Listeners", value: d.listeners?.average },
          ]}
        />
      </div>
      <p></p>
    </main>
  );
}
