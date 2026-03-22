"use client";

import { PropsWithChildren, SubmitEventHandler } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
//
import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/components/shadcn/ui/field";

interface Props<T extends FieldValues> extends PropsWithChildren {
  form: UseFormReturn<T>;
  onSubmit?: SubmitEventHandler<HTMLFormElement>;
  disabled?: boolean;
  h1?: string;
  p?: string;
}

export const ControlledFormFieldset = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  disabled,
  h1,
  p,
}: Props<T>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="text-background bg-white rounded-t-4xl md:rounded-2xl md:px-10 px-6 py-10"
      >
        {h1 ? <FieldLegend className="leading-4">{h1}</FieldLegend> : null}
        {p ? (
          <FieldDescription className="lg:text-muted">{p}</FieldDescription>
        ) : null}
        <FieldSet disabled={disabled} className="mt-8">
          {children}
        </FieldSet>
      </form>
    </FormProvider>
  );
};