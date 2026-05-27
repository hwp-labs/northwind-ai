import type { Metadata } from "next";
import { IconInfoCircle } from "@tabler/icons-react";
//
import { AppBar } from "@/components/species/podcast-app/components/app-bar";
import { KpiCards } from "@/components/species/podcast-app/components/kpi-cards";
import { RingChart } from "@/components/species/podcast-app/components/charts/ring-chart";
import { computeAnalytics } from "@/lib/supabase/services/podcasts/utils/compute-analytics";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "Podcast Analytics",
};

export default async function PodcastAnalyticsPage() {
  const d = computeAnalytics();
  //
  return (
    <>
      <AppBar title="Analytics" backTo={PATH.podcast} />
      <main className="debug_ mx-auto flex w-full flex-col flex-wrap gap-4 px-4 md:w-[768px]">
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
      </main>
    </>
  );
}
