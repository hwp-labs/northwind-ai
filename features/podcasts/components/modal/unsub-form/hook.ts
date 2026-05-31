import { useState } from "react";
import { trashListenersByUsernameAction } from "@/lib/supabase/services/listeners/actions/deleteListenerAction";
import { isValidEmail, sleep } from "@/utils";
import { APP } from "@/constants/APP";
import { MOCK } from "@/constants/MOCK";

const M = MOCK.podcastUnsub;

export function useUnsubForm(onClose?: () => void) {
  const [value, setValue] = useState(M.formData ? APP.email : "");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = isValidEmail(value);
  const inputError = value.trim().length > 0 && !canSubmit;

  const handleSubmit = async () => {
    if (canSubmit) {
      setSuccess(false);
      setSubmitting(true);

      if (M.action) {
        await sleep();
      } else {
        const payload = { username: value.trim() };
        const { error } = await trashListenersByUsernameAction(payload);
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
    value,
    setValue,
    submitting,
    success,
    canSubmit,
    inputError,
    handleSubmit,
  };
}
