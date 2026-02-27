"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, ListenerEntity } from "../types";

type RequestDto = Pick<ListenerEntity, "podcast_id" | "username">;
type ResponseDto = ListenerEntity[];

export async function getListenerByPodcastIdAction({
  podcast_id,
  username,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("podcast_id", podcast_id)
    .ilike("username", `%${username}%`)

  return { data, error: error?.message };
}
