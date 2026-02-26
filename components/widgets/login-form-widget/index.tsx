"use client";

import Link from "next/link";
//
import {
  SubmitButtonGrid,
  SubmitButton,
} from "@/components/atoms/submit-button";
import { ControlledFormFieldset } from "@/components/atoms/forms/controlled-form-fieldset";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldInputPassword } from "@/components/atoms/forms/controlled-field-input-password";
import { ControlledFieldSwitch } from "@/components/atoms/forms/controlled-field-switch";
import { PATH } from "@/constants/PATH";
//
import { useLoginFormWidget } from "./hook";

export const LoginFormWidget = () => {
  const { form, submitting, success, onSubmit } =
    useLoginFormWidget();
  //
  return (
    <>
      <ControlledFormFieldset
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        disabled={submitting}
        h1="Welcome back"
        p="Enter your log in details below"
      >
        <ControlledFieldInput
          control={form.control}
          label="Email"
          type="email"
          name="email"
          placeholder="Ex. person@domain.com"
        />
        <ControlledFieldInputPassword control={form.control} name="password" />
        <SubmitButtonGrid>
          <ControlledFieldSwitch
            control={form.control}
            name="remember_me"
            label="Keep me signed in"
          />
          <SubmitButton
            submitting={submitting}
            submittingText="Sign in..."
            success={success}
            successText="Signed in!"
          >
            Sign in
          </SubmitButton>
        </SubmitButtonGrid>
      </ControlledFormFieldset>
      <section className="flex-row-cc font-medium_ text-muted-foreground mt-6 gap-1.5 text-sm">
        Don&apos;t have an account?
        <Link
          href={PATH.register}
          className="underline_ text-white underline-offset-2"
        >
          Sign up
        </Link>
      </section>
    </>
  );
};
