import { PropsWithChildren } from "react";
import { ChevronRightIcon } from "lucide-react";
import { IconRocket } from "@tabler/icons-react";
import clsx from "clsx";
//
import { Logo } from "@/components/logo";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

interface HeaderProps {
  noBorder?: boolean;
}

const Header = ({ noBorder }: HeaderProps) => {
  return (
    <header
      className={clsx(
        "flex-row-cb bg-white px-8 py-6",
        !noBorder && "border-b border-gray-200",
      )}
    >
      <Logo />
      <figure className="flex-row-cs gap-2">
        <img src="/images/icon-hwp-labs.png" width={24} alt="" />
        <figcaption className="text-[15px] font-medium">
          {APP.owner}&reg;
        </figcaption>
      </figure>
    </header>
  );
};

const Footer = ({ children }: PropsWithChildren) => (
  <footer className="absolute bottom-8 w-full px-8">{children}</footer>
);
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  noCover?: boolean;
}

const Container = ({ children, className, noCover }: ContainerProps) => (
  <main
    className={clsx("bg-foreground relative flex-1 overflow-hidden", className)}
  >
    {!noCover && (
      <div className="absolute inset-0 z-1 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat opacity-8 grayscale filter" />
    )}
    {children}
  </main>
);

interface DescriptionProps {
  className?: string;
}

const Description = ({ className }: DescriptionProps) => (
  <article
    className={clsx(
      "debug_ absolute bottom-25 w-full text-center text-[12px] leading-5",
      className,
    )}
  >
    <p>{COPY.automateRichText}</p>
    <p>{COPY.transformRichText}</p>
  </article>
);

const CTA = () => (
  <Footer>
    <div className="flex-row-cb rounded-full bg-black px-8 py-4 text-sm text-white">
      <span className="flex-row-cs gap-2">
        Get started
        <ChevronRightIcon size={16} />
      </span>
      <span className="flex-row-cs gap-2.5">
        <IconRocket size={20} color={APP.colors.contrast} />
        {APP.domain}
      </span>
    </div>
  </Footer>
);

export const CardBuilder = {
  Header,
  Footer,
  Container,
  Description,
  CTA,
};
