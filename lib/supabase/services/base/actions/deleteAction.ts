"use server";

import { revalidatePath } from "next/cache";
import { supabaseAsync } from "@/lib/supabase/server";
import { ApiResponse } from "@/lib/supabase/types";
import { PrimaryKeyType } from "../types";

type RequestDto = {
  path?: string;
  table: string;
  id: PrimaryKeyType;
};
type ResponseDto = number;

export async function deleteAction({
  path,
  table,
  id,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  const supabase = await supabaseAsync();
  const { data, count, error } = await supabase
    .from(table)
    .delete({ count: "exact" })
    .eq("id", id);

  if (count && path) revalidatePath(path);

  // console.log("🚀 ~ deleteAction ~ table:", table, id, data, count, error);
  return { data: count, error: error?.message };
}
