import { CardBuilder } from "../card-builder";
import { APP } from "@/constants/APP";

export const DefaultPostCard = () => {
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container>
        <figure className="mt-16">
          <img
            src="/social-preview.png"
            alt=""
            width={640}
            className="mx-auto px-4"
          />
          <figcaption className="font-f3 mt-1 text-center text-[32px] font-bold">
            {APP.title}
          </figcaption>
        </figure>
        <CardBuilder.Description className="text-[14px] leading-6" />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};
