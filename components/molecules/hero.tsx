import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

export const Hero = () => {
  return (
    <section className="debug_ mt-10 space-y-4 px-6 text-center">
      <h1 className="_border font-f3 mx-auto w-[320px] text-[38px] leading-12 font-semibold text-white md:w-full md:text-6xl md:leading-18">
        {APP.title}
      </h1>
      <p className="lg:text-lg text-muted-foreground_ text-sm leading-7 lg:leading-6">
        {COPY.TransformRichTextWithLink}
      </p>
    </section>
  );
};
