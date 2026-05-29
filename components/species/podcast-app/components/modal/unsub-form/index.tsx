"use client";

import { Spinner } from "@/components/shadcn/ui/spinner";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { OpayWidget } from "../../opay-widget";
import { useUnsubForm } from "./hook";

interface Props {
  onClose?: () => void;
}

export const UnsubForm = ({ onClose = () => undefined }: Props) => {
  const {
    value,
    setValue,
    submitting,
    success,
    canSubmit,
    inputError,
    handleSubmit,
  } = useUnsubForm(onClose);
  //
  return (
    <div className="grid w-full gap-4 px-4 pb-8">
      <form className="mt-4 grid gap-2.5">
        <Input
          type="Search"
          placeholder="Email address"
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
          {submitting ? <Spinner /> : null}
          {success ? "Go away!" : "Unsubscribe"}
        </Button>
      </form>
      <OpayWidget variant="link" />
    </div>
  );
};
