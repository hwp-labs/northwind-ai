"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, ListenerEntity } from "../types";

type RequestDto = never;
type ResponseDto = ListenerEntity[];

export async function getListenersAction(): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("id", { ascending: false });
    
  return { data, error: error?.message };
}

export async function getListenersCountAction(): Promise<ApiResponse<number>> {
  const { count, error } = await supabase
    .from(TABLE)
    .select("id", { count: "estimated" });

  return { data: count, error: error?.message };
}
