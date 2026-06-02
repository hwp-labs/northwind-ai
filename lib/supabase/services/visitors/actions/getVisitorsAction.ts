"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse, defaultApiQueryParams } from "@/lib/supabase/types";
import { QueryVisitorDto, TABLE, VisitorEntity } from "../types";

type RequestDto = QueryVisitorDto;
type ResponseDto = VisitorEntity[];

export async function getVisitorsAction(
  req?: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { id, page, pageSize, sortBy, orderBy, filterByScreen } = {
    ...defaultApiQueryParams,
    ...req,
  };

  const baseQuery = supabase
    .from(TABLE)
    .select("*")
    .order(sortBy, { ascending: false });

  if (pageSize) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data, error } = await baseQuery.range(from, to);

    return { data, error: error?.message };
  }

  const { data, error } = await baseQuery;

  return { data, error: error?.message };
}

export async function getVisitorsCountAction(): Promise<ApiResponse<number>> {
  const { count, error } = await supabase
    .from(TABLE)
    .select("id", { count: "estimated" });

  return { data: count, error: error?.message };
}
