"use client";

import { APP } from "@/constants/APP";
import { CUR_HOUR_UTC } from "@/constants";

export const Copyright = () => {
  return (
    <address className="not-italic">
      &copy; 2011{" "}
      <span className="font-medium">{APP.owner}&reg;</span>
      CRBN 658815
    </address>
  );
};
