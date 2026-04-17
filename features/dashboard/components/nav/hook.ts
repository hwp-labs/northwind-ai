import { useEffect, useState } from "react";
import { getVisitorsCountAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";

interface Totaled {
  visitors?: number;
  listeners?: number;
}

export const useNav = () => {
  const [totaled, setTotaled] = useState<Totaled>({});

  const fetchTotaled = async () => {
    const [{ data: visitors }, { data: listeners }] =
      await Promise.all([
        getVisitorsCountAction(),
        getListenersCountAction(),
      ]);

    if (visitors) setTotaled((prev) => ({ ...prev, visitors }));
    if (listeners) setTotaled((prev) => ({ ...prev, listeners }));
  };

  useEffect(() => {
    fetchTotaled();
  }, []);
  
  return {totaled}
};