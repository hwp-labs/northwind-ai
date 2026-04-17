import { ListenerSchema } from "@/lib/supabase/services/listeners/types";
import { MOCK } from "@/constants/MOCK";

export const M = MOCK.podcastRsvp;

export const defaultValues: ListenerSchema = M.formData
  ? {
      username: process.env.NEXT_PUBLIC_SUPABASE_AUTH_USER!,
    }
  : {
      username: "",
    };
