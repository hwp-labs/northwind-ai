"use server";

import { revalidatePath } from "next/cache";
import { supabaseAsync } from "@/lib/supabase/server";
import { ApiResponse } from "@/lib/supabase/types";
import { PrimaryKeyType } from "../types";

type RequestDto = {
  path?: string;
  table: string;
  id: PrimaryKeyType | PrimaryKeyType[];
};
type ResponseDto = number;

export async function deleteAction({
  path,
  table,
  id,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  const supabase = await supabaseAsync();
  const baseQuery = supabase.from(table).delete({ count: "exact" });

  const { count, error } = await (Array.isArray(id)
    ? baseQuery.in("id", id)
    : baseQuery.eq("id", id));

  if (count && path) revalidatePath(path);

  // console.log("🚀 ~ deleteAction ~ table:", table, id, data, count, error);
  return { data: count, error: error?.message };
}
