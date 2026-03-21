import { APP } from "@/constants/APP";
import { StepperLogo } from "./stepper-logo";

export const PoweredBy = () => {
  return (
    <a href={APP.repositoryUrl} target="_blank" rel="noopener noreferrer">
      <figure className="flex-row-cc gap-2.5">
        <figcaption className="font-[Raleway] font-semibold tracking-wide">Powered by</figcaption>
        <StepperLogo />
      </figure>
    </a>
  );
};
