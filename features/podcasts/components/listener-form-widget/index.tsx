"use client";

import { FormProvider } from "react-hook-form";
//
import { FieldSet } from "@/components/shadcn/ui/field";
import { SubmitButton } from "@/components/atoms/submit-button";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
//
import { useListenerFormWidget } from "./hook";

export const ListenerFormWidget = () => {
  const { form, submitting, success, onSubmit, isOngoing } =
    useListenerFormWidget();
  //
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
        className="text-background rounded-t-2xl bg-white px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-4"
      >
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
      </form>
    </FormProvider>
  );
};
