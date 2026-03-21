"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE as visitorsTable } from "../../visitors/types";
import { TABLE as contactsTable } from "../../contacts/types";

type RequestDto = never;
type ResponseDto = {
  totalVisitors: number;
  retentionRate: number;
  totalContacts: number;
};

export async function getStatisticsAction(): Promise<ApiResponse<ResponseDto>> {
  const res: ResponseDto = {
    totalVisitors: 0,
    retentionRate: 0,
    totalContacts: 0,
  };

  const [{ data: visitors }, { count: totalContacts }] = await Promise.all([
    supabase.from(visitorsTable).select("ip_address, created_at").order("id"),
    supabase.from(contactsTable).select("id", { count: "exact" }),
  ]);

  if (totalContacts) res.totalContacts = totalContacts;

  if (visitors?.length) {
    const ipFrequency: Record<string, number> = {};

    visitors.forEach(({ ip_address }) => {
      ip_address in ipFrequency
        ? (ipFrequency[ip_address] += 1)
        : (ipFrequency[ip_address] = 1);
    });

    const totalVisitors = (res.totalVisitors = Object.keys(ipFrequency).length);
    
    const duplicateVisitors = Object.values(ipFrequency).filter(
      (count) => count > 1,
    ).length;
    
    res.retentionRate = duplicateVisitors
      ? Math.round((duplicateVisitors * 100) / totalVisitors)
      : 0;

    // console.log(
    //   "🚀 ~ getStatisticsAction ~ res:",
    //   // visitors,
    //   res,
    // );
  }

  return {
    data: res,
    error: undefined,
  };
}
