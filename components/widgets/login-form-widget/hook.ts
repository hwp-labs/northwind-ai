import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { useToast } from "@/hooks/use-toast";
import { signInAction } from "@/lib/supabase/services/auth/actions/authActions";
import { loginSchema, LoginSchema } from "@/lib/supabase/services/auth/types";
import { sleep } from "@/utils";
import { PROTECTED_PATH, PATH } from "@/constants/PATH";
//
import { M, defaultValues, prepareLoginPayload } from "./utils";

export function useLoginFormWidget() {
  const router = useRouter();
  const toast = useToast();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (formData: LoginSchema) => {
    // console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSubmitting(true);
    if (M.action) {
      await sleep();
    } else {
      const payload = prepareLoginPayload(formData);
      const { error } = await signInAction(payload);

      if (error) {
        toast.error(error);
        setSubmitting(false);
        return;
      }
    }

    setSubmitting(false);
    setSuccess(true);
    await sleep(1.5);
    setSuccess(false);
    M.router ? null : router.replace(PROTECTED_PATH.listeners);
  };

  return {
    form,
    submitting,
    success,
    onSubmit,
  };
}
