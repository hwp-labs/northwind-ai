import { useState } from "react";
import { usePodcastStore } from "@/store/podcastStore";
import { getListenerByPodcastIdAction } from "@/lib/supabase/services/listeners/actions/getListenerAction";
import { createListenerAction } from "@/lib/supabase/services/listeners/actions/createListenerAction";
import { isValidEmail, isValidTel, sleep } from "@/utils";
import { PATH } from "@/constants/PATH";
import { MOCK } from "@/constants/MOCK";
import { ERROR } from "@/constants/ERROR";

const M = MOCK.podcastRsvp;

export function useRsvpForm(onClose?: () => void) {
  const episode = usePodcastStore((s) => s.episode);

  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit =
    episode &&
    value.trim().length >= 6 &&
    (isValidEmail(value) || isValidTel(value));

  const inputError = value.trim().length > 0 && !canSubmit;

  const handleSubmit = async () => {
    if (canSubmit) {
      setSuccess(false);
      setSubmitting(true);

      if (M.action) {
        await sleep();
      } else {
        const payload = {
          podcast_id: episode.id,
          username: value,
        };

        const { data } = await getListenerByPodcastIdAction(payload);

        if (data?.length) {
          setError(ERROR.duplicateListenerUsername);
          setSubmitting(false);
          return;
        }

        const { error } = await createListenerAction(payload, PATH.podcast);
        if (error) {
          setError(error);
          setSubmitting(false);
          return;
        }
      }

      setValue("");
      setSubmitting(false);

      setSuccess(true);
      await sleep(1.5);
      setSuccess(false);

      M.router ? null : onClose?.();
    }
  };

  return {
    episode,
    value,
    setValue,
    submitting,
    success,
    canSubmit,
    inputError,
    handleSubmit,
  }
}
