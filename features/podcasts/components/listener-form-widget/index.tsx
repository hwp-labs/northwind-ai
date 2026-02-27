"use client";

import { FormProvider } from "react-hook-form";
//
import { FieldSet } from "@/components/shadcn/ui/field";
import { SubmitButton } from "@/components/atoms/submit-button";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
//
import { useListenerFormWidget } from "./hook";

export const ListenerFormWidget = () => {
  const { form, submitting, success, onSubmit } = useListenerFormWidget();
  //
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
        className="text-background rounded-t-4xl bg-white px-6 pt-5 pb-4 lg:rounded-t-2xl"
      >
        <FieldSet disabled={submitting} className="flex flex-row gap-2">
          <ControlledFieldInput
            control={form.control}
            type="search"
            name="display_name"
            placeholder="Display name"
          />
          <SubmitButton
            submitting={submitting}
            success={success}
            successText="Nice!"
          >
            Attend
          </SubmitButton>
        </FieldSet>
      </form>
    </FormProvider>
  );
};
