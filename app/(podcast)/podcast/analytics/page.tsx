import type { Metadata } from "next";
import { IconInfoCircle } from "@tabler/icons-react";
//
import { AppBar } from "@/features/podcast/components/app-bar";
import { KpiCards } from "@/features/podcast/components/kpi-cards";
import { GeolocationChart } from "@/features/podcast/components/charts/geolocation-chart";
import { RingChart } from "@/features/podcast/components/charts/ring-chart";
import { computeAnalytics } from "@/lib/podcast/analytics/utils";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "Analytics",
};

export default async function AnalyticsPage() {
  const { episodes, guests, listeners } = computeAnalytics();
  //
  return (
    <>
      <AppBar title="Analytics" backTo={PATH.podcast} noOptions />
      <main className="debug_ container-md-podcast mt-2 flex flex-col flex-wrap gap-5 px-4 pb-6">
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
