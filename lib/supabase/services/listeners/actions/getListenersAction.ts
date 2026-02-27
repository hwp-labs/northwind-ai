"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, ListenerEntity } from "../types";

type RequestDto = Pick<ListenerEntity, "podcast_id">;
type ResponseDto = ListenerEntity[];

export async function getListenersAction(
  req?: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const baseQuery = supabase
    .from(TABLE)
    .select("*")
    .order("id", { ascending: false });

  const { data, error } = await (req?.podcast_id
    ? baseQuery.eq("podcast_id", req.podcast_id)
    : baseQuery);

  return { data, error: error?.message };
}

export async function getListenersCountAction(
  req?: RequestDto,
): Promise<ApiResponse<number>> {
  const baseQuery = supabase.from(TABLE).select("id", { count: "estimated" });

  const { count, error } = await (req?.podcast_id
    ? baseQuery.eq("podcast_id", req.podcast_id)
    : baseQuery);

  return { data: count, error: error?.message };
}
