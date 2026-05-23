import type { Metadata } from "next";
import { IconInfoCircle, IconMicrophone, IconMicrophoneFilled, IconUsers } from "@tabler/icons-react";
//
import { Header } from "@/components/species/podcast-app/components/header";
import { RingChart } from "@/components/species/podcast-app/components/ring-chart";
import { KpiCard } from "@/components/species/podcast-app/components/kpi-card";
import { PATH } from "@/constants/PATH";
import { data } from "@/lib/supabase/services/podcasts/data";

export const metadata: Metadata = {
  title: "Podcast Analytics",
};

export default async function PodcastAnalyticsPage() {
  const d = computeAnalytics();
  //
  return (
    <main className="grid gap-4">
      <Header title="Analytics" fromPath={PATH.podcast} />
      <div className="debug_ mx-auto flex w-full flex-col flex-wrap gap-6 px-4 lg:w-[1280px]">
        <KpiCard
          Icon={<IconMicrophoneFilled size={14} strokeWidth={2.5} />}
          label="Total Episodes"
          value={d.episodes?.total}
        />
        <KpiCard
          Icon={<IconUsers size={14} strokeWidth={2.5} />}
          label="Total Guests"
          value={d.guests?.total}
        />
        <RingChart
          title="Listeners Overview"
          label={
            <div className="flex-row-cs gap-1">
              <span>Average LPE </span>
              <IconInfoCircle size={16} title="Listeners Per Episode" />
            </div>
          }
          value={d.listeners?.averageRate}
          valueSuffix={"%"}
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

const computeAnalytics = () => {
  const res: AnalyticsDto = {};
  const guestUsernames = new Set();

  data.forEach((d) => {
    if (d.listeners) {
      if (res.listeners?.total) res.listeners.total += d.listeners;
      else res.listeners = { ...res.listeners, total: d.listeners };

      if (res.episodes?.total) res.episodes.total += 1;
      else res.episodes = { ...res.episodes, total: 1 };

      if (d.series) {
        if (d.series === "fc") {
          if (res.episodes?.firesideChat) res.episodes.firesideChat += 1;
          else res.episodes = { ...res.episodes, firesideChat: 1 };
        }
        if (d.series === "cs") {
          if (res.episodes?.caseStudy) res.episodes.caseStudy += 1;
          else res.episodes = { ...res.episodes, caseStudy: 1 };
        }
      } else {
        if (res.episodes?.designSession) res.episodes.designSession += 1;
        else res.episodes = { ...res.episodes, designSession: 1 };
      }

      if (d.guest) {
        if (Array.isArray(d.guest)) {
          d.guest.forEach(({ username }) => guestUsernames.add(username));
        } else {
          guestUsernames.add(d.guest.username);
        }
      }
    }
  });

  const listeners = res.listeners?.total || 1;
  const episodes = res.episodes?.total || 1;
  const average = listeners / episodes;
  const averageRate = (average * 100) / listeners;

  res.guests = { ...res.guests, total: guestUsernames.size };
  res.listeners = {
    ...res.listeners,
    average: Math.floor(average),
    averageRate: Math.round(averageRate),
  };

  // console.log("🚀 ~ computeAnalytics ~ res:", res);
  return res;
};

interface AnalyticsDto {
  episodes?: {
    total?: number;
    designSession?: number;
    firesideChat?: number;
    caseStudy?: number;
  };
  guests?: {
    total?: number;
    male?: number;
    maleRate?: number;
    female?: number;
    femaleRate?: number;
    location?: {
      country: string;
      total: number;
    }[];
  };
  listeners?: {
    total?: number;
    average?: number;
    averageRate?: number;
  };
}

const defaultAnalytics = {
  episodes: {
    total: 0,
    designSession: 0,
    firesideChat: 0,
    caseStudy: 0,
  },
  guests: {
    total: 0,
    male: 0,
    maleRate: 0,
    female: 0,
    femaleRate: 0,
    location: [],
  },
  listeners: {
    total: 0,
    average: 0,
    averageRate: 0,
  },
};

const mockGuestLocation = [
  {
    country: "Canada",
    total: 0,
  },
  {
    country: "Germany",
    total: 0,
  },
  {
    country: "Nigeria",
    total: 0,
  },
  {
    country: "UK",
    total: 0,
  },
  {
    country: "US",
    total: 0,
  },
];
