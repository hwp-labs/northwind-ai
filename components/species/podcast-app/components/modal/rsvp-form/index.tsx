"use client";

import Image from "next/image";
import { IconSparkles } from "@tabler/icons-react";
//
import { Spinner } from "@/components/shadcn/ui/spinner";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { Topic } from "../../topic";
import { Datetime } from "../../datetime";
import { OpayWidget } from "../../opay-widget";
import { useRsvpForm } from "./hook";

interface Props {
  onClose?: () => void;
}

export const RsvpForm = ({ onClose = () => undefined }: Props) => {
  const {
    episode,
    value,
    setValue,
    submitting,
    success,
    canSubmit,
    inputError,
    handleSubmit,
  } = useRsvpForm(onClose);
  //
  return episode ? (
    <div className="grid w-full gap-4 px-4 pb-8">
      <figure className="flex-col-cc gap-4">
        <Image
          src={episode.displayAvatar!}
          alt=""
          width={56}
          height={56}
          className="size-[56px] rounded-[12px]"
        />
        <figcaption className="flex-col-cc gap-1">
          <Topic episode={episode} variant="preview" />
          <Datetime episode={episode} />
        </figcaption>
      </figure>
      <form className="mt-4 grid gap-2.5">
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
      <OpayWidget variant="link" />
    </div>
  ) : null;
};
