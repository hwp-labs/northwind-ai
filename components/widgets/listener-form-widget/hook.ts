import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { useQueryParams } from "@/hooks/use-query-params";
import { useToast } from "@/hooks/use-toast";
import { createListenerAction } from "@/lib/supabase/services/listeners/actions/createListenerAction";
import { sleep } from "@/utils";
import {
  listenerSchema,
  ListenerSchema,
} from "@/lib/supabase/services/listeners/types";
import { PodcastItem } from "@/features/post-cards/components/cards/podcast-post-card/types";
//
import { M, defaultValues } from "./utils";
import data from "@/features/post-cards/components/cards/podcast-post-card/data.json";

export function useListenerFormWidget() {
  const { getSlug } = useQueryParams();
  const toast = useToast();
  const form = useForm<ListenerSchema>({
    resolver: zodResolver(listenerSchema),
    mode: "onBlur",
    defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const id = Number(getSlug(0, 1));
  const i = id - 1;
  const item = (data[i] || data[0]) as PodcastItem;

  const onSubmit = async (formData: ListenerSchema) => {
    // console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSubmitting(true);
    if (M.action) {
      await sleep();
    } else {
      const payload = {
        podcast_id: id,
        display_name: formData.display_name,
      };
      const { error } = await createListenerAction(payload);

      if (error) {
        toast.error(error);
        setSubmitting(false);
        return;
      }
    }

    // form.reset()
    setSubmitting(false);
    setSuccess(true);
    await sleep(1.5);
    // setSuccess(false);
    M.router || !item.spaceUrl ? null : window.open(item.spaceUrl);
  };

  return {
    form,
    submitting,
    success,
    onSubmit,
  };
}
