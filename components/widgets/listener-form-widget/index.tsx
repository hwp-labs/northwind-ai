"use client";

import { SubmitButton } from "@/components/atoms/submit-button";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
//
import { useListenerFormWidget } from "./hook";
import { FormProvider } from "react-hook-form";
import { FieldSet } from "@/components/shadcn/ui/field";

export const ListenerFormWidget = () => {
  const { form, submitting, success, setSuccess, onSubmit, onSubmitted } =
    useListenerFormWidget();
  //
  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="text-background rounded-t-4xl bg-white px-6 py-6 lg:rounded-t-2xl lg:px-10"
      >
        <FieldSet disabled={submitting} className="">
          <ControlledFieldInput
            control={form.control}
            type="email"
            name="email"
            placeholder="Display Name"
          />
          <SubmitButton
            submitting={submitting}
            submittingText="Joining..."
            success={success}
            successText="Joined!"
          >
            Join
          </SubmitButton>
        </FieldSet>
      </form>
    </FormProvider>
  );
};
