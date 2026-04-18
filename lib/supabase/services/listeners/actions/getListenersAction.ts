"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse, defaultApiQueryParams } from "@/lib/supabase/types";
import { TABLE, ListenerEntity, QueryListenerDto } from "../types";

type RequestDto = QueryListenerDto;
type ResponseDto = ListenerEntity[];

export async function getListenersAction(
  req?: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { id, page, pageSize, sortBy, orderBy, filterByPodcastId } = {
    ...defaultApiQueryParams,
    ...req,
  };

  const baseQuery = supabase
    .from(TABLE)
    .select("*")
    .order(sortBy, { ascending: false });

  const { data, error } = await (filterByPodcastId
    ? baseQuery.eq("podcast_id", filterByPodcastId)
    : baseQuery);

  return { data, error: error?.message };
}

export async function getListenersCountAction(
  req?: RequestDto,
): Promise<ApiResponse<number>> {
  const baseQuery = supabase.from(TABLE).select("id", { count: "estimated" });

  const { count, error } = await (req?.filterByPodcastId
    ? baseQuery.eq("podcast_id", req.filterByPodcastId)
    : baseQuery);

  return { data: count, error: error?.message };
}
