import { APP } from "@/constants/APP";
import { AnchorOutbound } from "../atoms/anchor";
import { StepperLogo } from "./stepper-logo";

export const PoweredBy = () => {
  return (
    <AnchorOutbound href={APP.repositoryUrl}>
      <figure className="flex-row-cc gap-2.5">
        <figcaption className="font-f3 font-semibold tracking-wide">
          Powered by
        </figcaption>
        <StepperLogo />
      </figure>
    </AnchorOutbound>
  );
};
