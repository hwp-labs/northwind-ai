import { PropsWithChildren } from "react";
import { ChevronRightIcon } from "lucide-react";
import { IconRocket, IconWorldUpload } from "@tabler/icons-react";
import clsx from "clsx";
//
import { CompanyLogo, Logo } from "@/components/logo";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { COPY } from "@/constants/LOCALE";

const Header = ({ noBorder }: { noBorder?: boolean }) => {
  return (
    <header
      className={clsx(
        "flex-row-cb h-[58px] bg-white px-8",
        !noBorder && "border-b border-gray-200",
      )}
    >
      <Logo />
      <CompanyLogo />
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

const Description = ({ className }: { className?: string }) => (
  <article
    className={clsx(
      "debug_ absolute bottom-25 w-full text-center text-[12px] leading-5",
      className,
    )}
  >
    <p>{COPY.transform}</p>
    <p>{COPY.automateRichText}</p>
  </article>
);

const CTA = () => (
  <Footer>
    <div className="flex-row-cb rounded-full bg-black px-8 py-4 text-sm text-white">
      <span className="flex-row-cs gap-1.5">
        Get started
        <ChevronRightIcon size={20} />
      </span>
      <span className="flex-row-cs gap-2">
        <IconWorldUpload size={16} className="text-chart-5" />
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
