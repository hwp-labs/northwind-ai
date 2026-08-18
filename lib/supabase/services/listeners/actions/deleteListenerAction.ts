"use server";

import { supabaseAsync } from "@/lib/supabase/server";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, ListenerEntity } from "../types";

type RequestDto = { username: ListenerEntity["username"] };
type ResponseDto = ListenerEntity;

export async function trashListenersByUsernameAction({
  username,
}: RequestDto): Promise<ApiResponse<ResponseDto[]>> {
  const supabase = await supabaseAsync();
  const { data, error } = await supabase
    .from(TABLE)
    .update({ deleted_at: new Date().toISOString() })
    .eq("username", username)
    .select();

  return { data, error: error?.message };
}

export async function restoreListenersByUsernameAction({
  username,
}: RequestDto): Promise<ApiResponse<ResponseDto[]>> {
  const supabase = await supabaseAsync();
  const { data, error } = await supabase
    .from(TABLE)
    .update({ deleted_at: null })
    .eq("username", username)
    .select();

  return { data, error: error?.message };
}

export async function deleteListenersByPodcastIdAndUsernamesAction({
  podcast_id,
  usernames,
}: {
  podcast_id: ListenerEntity["podcast_id"];
  usernames: ListenerEntity["username"][];
}): Promise<ApiResponse<ResponseDto[]>> {
  const supabase = await supabaseAsync();
  const { data, error } = await supabase
    .from(TABLE)
    .delete({ count: "exact" })
    .in("username", usernames)
    .eq("podcast_id", podcast_id);

  return { data, error: error?.message };
}
