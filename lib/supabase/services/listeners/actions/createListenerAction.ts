"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { CreateListenerDto, TABLE, ListenerEntity } from "../types";

type RequestDto = CreateListenerDto;
type ResponseDto = ListenerEntity;

export async function createListenerAction(
  body: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(body)
    .select()
    .single();

  return { data, error: error?.message };
}
