import { ListenerSchema } from "@/lib/supabase/services/listeners/types";
import { MOCK } from "@/constants/MOCK";

export const M = MOCK.listener;

export const defaultValues: ListenerSchema = M.formData
  ? {
      podcast_id: "1",
      display_name: "Emanuel",
    }
  : {
      podcast_id: "",
      display_name: "",
    };

export const prepareListenerPayload = (formData: ListenerSchema) => ({
    ...formData,
    remember_me: formData.remember_me || false,
  })
