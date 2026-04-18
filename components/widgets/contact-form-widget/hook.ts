import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { createContactAction } from "@/lib/supabase/services/contacts/actions/createContactAction";
import { useToast } from "@/hooks/use-toast";
import { sleep } from "@/utils";
import { ApiResponse } from "@/lib/supabase/types";
import {
  contactSchema,
  ContactSchema,
} from "@/lib/supabase/services/contacts/types";
import { PATH } from "@/constants/PATH";
//
import { M, defaultValues, prepareCreateContactPayload } from "./utils";

interface Params {
  sendEmail?: (formData: ContactSchema) => Promise<ApiResponse<string>>;
}

export function useContactFormWidget(params?: Params) {
  const router = useRouter();
  const toast = useToast();
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(Boolean(M.portal));

  const onSubmitted = async () => {
    setSuccess(false);
    form.reset();
    M.router ? null : router.replace(PATH.home);
  };

  const onSubmit = async (formData: ContactSchema) => {
    // console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSubmitting(true);
    if (M.action) {
      await sleep();
    } else {
      const payload = prepareCreateContactPayload(formData);
      const { error } = await createContactAction(payload);

      if (error) {
        toast.error(error);
        setSubmitting(false);
        return;
      }

      if (params?.sendEmail) {
        const { error } = await params.sendEmail(formData);

        if (error) {
          toast.error(error);
          setSubmitting(false);
          return;
        }
      }
    }

    setSubmitting(false);
    setSuccess(true);
  };

  return {
    form,
    submitting,
    success,
    setSuccess,
    onSubmit,
    onSubmitted,
  };
}
