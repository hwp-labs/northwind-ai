"use client";

import { FormProvider } from "react-hook-form";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { FieldSet } from "@/components/shadcn/ui/field";
import { SubmitButton } from "@/components/atoms/submit-button";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
//
import { useRsvpFormWidget } from "./hook";

export const RsvpFormWidget = () => {
  const {
    form,
    submitting,
    success,
    onSubmit,
    onRedirect,
    isOngoing,
    isConcluded,
  } = useRsvpFormWidget();
  //
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
        className="text-background rounded-t-2xl bg-white px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-4"
      >
        {isConcluded ? (
          <Button type="button" onClick={onRedirect} className="w-full">
            <IconPlayerPlayFilled />
            Play recording
          </Button>
        ) : (
          <FieldSet
            disabled={submitting}
            className="flex flex-row items-start gap-2"
          >
            <ControlledFieldInput
              control={form.control}
              type="search"
              name="username"
              placeholder="Email or telephone"
            />
            <SubmitButton
              submitting={submitting}
              success={success}
              successText="Nice!"
            >
              {isOngoing ? "Attend" : "RSVP"}
            </SubmitButton>
          </FieldSet>
        )}
      </form>
    </FormProvider>
  );
};
