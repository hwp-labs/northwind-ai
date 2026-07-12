"use client";

import { AppProgressBar } from "next-nprogress-bar";

export const ProgressBar = () => (
  <AppProgressBar
    color="#D97757"
    height="3px"
    options={{ showSpinner: true }}
  />
);
