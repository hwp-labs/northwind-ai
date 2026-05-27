import { IconMicrophoneFilled, IconUsers } from "@tabler/icons-react";
import { PodcastAnalyticsDto } from "@/lib/supabase/services/podcasts/types";
import { KpiCard } from "./charts/kpi-card";

interface Props {
  episodes?: PodcastAnalyticsDto["episodes"];
  guests?: PodcastAnalyticsDto["guests"];
}

export const KpiCards = ({ episodes, guests }: Props) => {
  return (
    <section className="grid gap-5 sm:grid-cols-2">
      <KpiCard
        Icon={<IconMicrophoneFilled size={14} strokeWidth={2.5} />}
        label="Total Episodes"
        value={episodes?.total}
        keyTitle="Series"
        keys={[
          {
            label: "Design Session",
            value: episodes?.designSession,
            color: "bg-chart-3!",
          },
          {
            label: "Fireside Chat",
            value: episodes?.firesideChat,
            color: "bg-ring!",
          },
          {
            label: "Case Study",
            value: episodes?.caseStudy,
            color: "bg-chart-2!",
          },
        ]}
      />
      <KpiCard
        Icon={<IconUsers size={14} strokeWidth={2.5} />}
        label="Total Guests"
        value={guests?.total}
        keyTitle="Diversity"
        keys={[
          {
            label: "Male",
            value: guests?.maleRate,
            valueText: `${guests?.maleRate}%`,
            color: "bg-chart-1!",
          },
          {
            label: "Female",
            value: guests?.femaleRate,
            valueText: `${guests?.femaleRate}%`,
            color: "bg-chart-4!",
          },
        ]}
      />
    </section>
  );
};
