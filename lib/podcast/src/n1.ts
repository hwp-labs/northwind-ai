/**
 * N+1 Problem Query Optimization (TypeScript)
 *
 * @author Northwind AI <northwindai.org>
 * @date 2026-06-19
 */

import { useState } from "react";

interface IGuest {
  id: number; // 15
  displayName: string; // Temi Adegoke, PSM
  bio: string; // IT Project Manager, Powertech
  website?: string; // https://instagram.com/awo_oore
}

interface IEpisode {
  id: number; // 16
  topic: string; // ACID Traits for Agile Workflows
  guestId: number; // 15
  datetime: string; // 2026-06-19T20:00:00.000Z
}

type EpisodeDto = Omit<IEpisode, "guestId"> & { guest: IGuest };

const API_URL = process.env.NEXT_PUBLIC_API_URL; // https://podcast.northwindai.org/api

export function useGetEpisodesQuery() {
  const [query, setQuery] = useState<{
    loading?: boolean;
    error?: string;
    data?: EpisodeDto[];
  }>({});

  const fetcher = async () => {
    setQuery((prev) => ({ ...prev, loading: true, error: "" }));
    try {
      const res = await fetch(`${API_URL}/episodes`);
      const episodes: IEpisode[] = await res.json();

      if (res.ok) {
        const transformedEpisodes = episodes.map(
          async ({ guestId, ...episode }) => {
            const res = await fetch(`${API_URL}/guests/${guestId}`);
            if (!res.ok) throw new Error(res.statusText);
            const guest: IGuest = await res.json();
            return { ...episode, guest };
          },
        );
        const data = await Promise.all(transformedEpisodes);
        setQuery((prev) => ({ ...prev, data }));
      } else {
        setQuery((prev) => ({ ...prev, error: res.statusText }));
      }
    } catch (err) {
      setQuery((prev) => ({ ...prev, error: (err as Error).message }));
    } finally {
      setQuery((prev) => ({ ...prev, loading: false }));
    }
  };

  return { query, fetcher };
}
