import { ListenerSchema } from "@/lib/supabase/services/listeners/types";
import { MOCK } from "@/constants/MOCK";

export const M = MOCK.podcast;

export const defaultValues: ListenerSchema = M.formData
  ? {
      display_name: "Emanuel",
    }
  : {
      display_name: "",
    };