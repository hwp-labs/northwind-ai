"use client";

import { CUR_HOUR_UTC } from "@/constants";
import { APP } from "@/constants/APP";

export const Copyright = () => {
  return (
    <address className="not-italic">
      Copyright &copy; {new Date().getFullYear()}.{CUR_HOUR_UTC}{" "}
      <span className="font-medium">{APP.owner}&reg;</span>
    </address>
  );
};
