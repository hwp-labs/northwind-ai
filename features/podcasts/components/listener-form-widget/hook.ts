import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { useQueryParams } from "@/hooks/use-query-params";
import { useToast } from "@/hooks/use-toast";
import { getListenerByPodcastIdAction } from "@/lib/supabase/services/listeners/actions/getListenerAction";
import { createListenerAction } from "@/lib/supabase/services/listeners/actions/createListenerAction";
import { sleep } from "@/utils";
import {
  listenerSchema,
  ListenerSchema,
} from "@/lib/supabase/services/listeners/types";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { PATH } from "@/constants/PATH";
import { ERROR } from "@/constants/ERROR";
//
import { M, defaultValues } from "./utils";

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

  const { isOngoing, isConcluded, ...item } = PodcastHelper.GetSlugItem(
    getSlug(0, 1),
  );

  const onRedirect = () => window.open(item.spaceUrl!);

  const onSubmit = async (formData: ListenerSchema) => {
    // console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSuccess(false);
    setSubmitting(true);
    if (M.action) {
      await sleep();
    } else {
      const payload = {
        podcast_id: item.id,
        username: formData.username,
      };

      const { data } = await getListenerByPodcastIdAction(payload);
      if (data?.length) {
        toast.error(ERROR.duplicateListenerUsername);
        setSubmitting(false);
        return;
      }

      const { error } = await createListenerAction(payload, PATH.podcast);
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
    M.router || isOngoing ? onRedirect() : null;
  };

  return {
    form,
    submitting,
    success,
    onSubmit,
    onRedirect,
    isOngoing,
    isConcluded,
  };
}
