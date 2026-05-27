"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconClipboardCheck,
  IconHeartFilled,
  IconSparkles,
} from "@tabler/icons-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { isValidEmail, isValidTel, sleep } from "@/utils";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
import { Input } from "@/components/shadcn/ui/input";
import { SubmitButton } from "@/components/atoms/submit-button";
import Image from "next/image";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { MOCK } from "@/constants/MOCK";
import { getListenerByPodcastIdAction } from "@/lib/supabase/services/listeners/actions/getListenerAction";
import { ERROR } from "@/constants/ERROR";
import { createListenerAction } from "@/lib/supabase/services/listeners/actions/createListenerAction";

export const M = MOCK.podcastRsvp;

interface Props {
  onClose?: () => void;
}

export const RsvpForm = ({ onClose = () => undefined }: Props) => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit =
    value.trim().length >= 6 && (isValidEmail(value) || isValidTel(value));

  const inputError = value.trim().length > 0 && !canSubmit;

  const handleSubmit = async () => {
    if (canSubmit) {
      setSuccess(false);
      setSubmitting(true);

      if (M.action) {
        await sleep();
      } else {
        const payload = {
          podcast_id: 10,
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

      M.router ? null : onClose();
    }
  };
  //
  return (
    <div className="grid w-full gap-4 px-4 pb-8">
      <figure className="flex-col-cc gap-4">
        <Image
          src={"/uploads/logos/siiqo.png"}
          alt=""
          width={56}
          height={56}
          className="size-[56px] rounded-[12px]"
        />
        <figcaption className="flex-col-cc gap-1">
          <strong className="text-lg text-white">Siiqo Design Session</strong>
          <time dateTime="2026-05-28T19:00:00.000Z">Thu, May 28 | 8PM WAT</time>
        </figcaption>
      </figure>
      <form className="mt-4 grid gap-4">
        <Input
          type="Search"
          placeholder="Email or telephone"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          disabled={submitting}
          required
          className={inputError ? "border-destructive" : undefined}
        />
        <Button
          type="button"
          variant={success ? "success" : canSubmit ? "primary" : "default"}
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? <Spinner /> : success ? <IconSparkles /> : null}
          {success ? "Alright boss!" : "Notify me!"}
        </Button>
      </form>
    </div>
  );
};
