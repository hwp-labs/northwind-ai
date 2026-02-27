"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { CreateListenerDto, TABLE, ListenerEntity } from "../types";

type RequestDto = CreateListenerDto;
type ResponseDto = ListenerEntity;

export async function createListenerAction(
  body: RequestDto,
  path?: string,
): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(body)
    .select()
    .single();

  if (data && path) revalidatePath(path);

  return { data, error: error?.message };
}
