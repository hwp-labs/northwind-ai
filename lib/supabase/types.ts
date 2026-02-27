import { Session, User, WeakPassword } from "@supabase/supabase-js";
import { BaseEntity } from "./services/base/types";

export interface SupabaseAuthResponse {
  user: User | null;
  session: Session | null;
  weakPassword?: WeakPassword | null;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | undefined;
}

export interface ApiQueryParams<T = {}> {
  id?: number | null;
  page?: number;
  pageSize?: number;
  sortBy?: keyof (BaseEntity & T);
  orderBy?: "asc" | "desc";
}

export const defaultApiQueryParams: Required<ApiQueryParams> = {
  id: null,
  page: 1,
  pageSize: 10,
  sortBy: "id",
  orderBy: "desc",
};
