import type { Metadata } from "next";
import { IconInfoCircle } from "@tabler/icons-react";
//
import { AppBar } from "@/components/species/podcast-app/components/app-bar";
import { KpiCards } from "@/components/species/podcast-app/components/kpi-cards";
import { GeolocationChart } from "@/components/species/podcast-app/components/charts/geolocation-chart";
import { RingChart } from "@/components/species/podcast-app/components/charts/ring-chart";
import { computeAnalytics } from "@/lib/supabase/services/podcasts/utils/compute-analytics";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "Analytics",
};

export default async function AnalyticsPage() {
  const { episodes, guests, listeners } = computeAnalytics();
  //
  return (
    <>
      <AppBar title="Analytics" backTo={PATH.podcast} />
      <main className="debug_ mx-auto flex w-full flex-col flex-wrap gap-4 px-4 pb-4 md:w-[768px]">
        <KpiCards episodes={episodes} guests={guests} />
        <GeolocationChart title="Guests Location" data={guests?.location} />
        <RingChart
          title="Listeners Overview"
          label={
            <div className="flex-row-cs gap-1">
              <span>Average LPE </span>
              <IconInfoCircle size={16} title="Listeners Per Episode" />
            </div>
          }
          value={listeners?.averageRate}
          valueText={`${listeners?.averageRate}%`}
          keys={[
            { label: "Total Listeners", value: listeners?.total },
            { label: "Avg. Listeners", value: listeners?.average },
          ]}
        />
      </main>
    </>
  );
}
