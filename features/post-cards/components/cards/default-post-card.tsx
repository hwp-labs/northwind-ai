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
          <figcaption className="mt-5 font-[Raleway] text-[24px] font-bold px-10 text-center_">
            {APP.title}
          </figcaption>
        </figure>
        <CardBuilder.Description />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};
