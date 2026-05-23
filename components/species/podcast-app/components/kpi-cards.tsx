import { IconMicrophoneFilled, IconUsers } from "@tabler/icons-react";
import { PodcastAnalyticsDto } from "@/lib/supabase/services/podcasts/types";
import { KpiCard } from "./kpi-card";

export const KpiCards = ({ data: d }: { data: PodcastAnalyticsDto }) => {
  return (
    <>
      <KpiCard
        Icon={<IconMicrophoneFilled size={14} strokeWidth={2.5} />}
        label="Total Episodes"
        value={d.episodes?.total}
        keyTitle="Series"
        keys={[
          {
            label: "Design Session",
            value: d.episodes?.designSession,
            color: "bg-chart-3!",
          },
          {
            label: "Fireside Chat",
            value: d.episodes?.firesideChat,
            color: "bg-ring!",
          },
          {
            label: "Case Study",
            value: d.episodes?.caseStudy,
            color: "bg-chart-2!",
          },
        ]}
      />
      <KpiCard
        Icon={<IconUsers size={14} strokeWidth={2.5} />}
        label="Total Guests"
        value={d.guests?.total}
        keyTitle="Diversity"
        keys={[
          {
            label: "Male",
            value: 100,
            valueText: "100%",
            color: "bg-chart-1!",
          },
          {
            label: "Female",
            value: 0,
            color: "bg-chart-4!",
          },
        ]}
      />
    </>
  );
};
