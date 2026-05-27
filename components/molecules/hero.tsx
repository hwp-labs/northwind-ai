interface Props {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export const Hero = ({ children, title, subtitle }: Props) => {
  return (
    <section className="debug_ mt-10 space-y-4 px-6 text-center">
      <h1 className="_border font-f3 mx-auto w-[320px] text-[38px] leading-12 font-semibold text-white md:w-full md:text-6xl md:leading-18">
        {children}
      </h1>
      {title ? (
        <div className="lg:text-md text-sm leading-7 lg:leading-6">
          {title}
          {subtitle ? (
            <div className="text-muted-foreground">{subtitle}</div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
};
