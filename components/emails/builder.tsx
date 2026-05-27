import { PropsWithChildren } from "react";
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Heading,
  Section,
  Text,
  Img,
} from "@react-email/components";
import clsx from "clsx";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

interface TemplateProps extends PropsWithChildren {
  preview: string;
  heading?: React.ReactNode;
  hideFooter?: boolean;
}

const Template = ({
  children,
  preview,
  heading,
  hideFooter,
}: TemplateProps) => (
  <Html>
    <Head />
    <Preview>{preview}</Preview>
    <Tailwind>
      <Body>
        <Container className="debug_ mx-auto max-w-md px-4">
          {heading ? <H1>{heading}</H1> : null}
          {children}
          {!hideFooter && <Footer />}
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

const H1 = ({ children }: PropsWithChildren) => (
  <Heading className="font-semibold text-white" style={{ fontSize: 24 }}>
    {children}
  </Heading>
);

interface PProps extends PropsWithChildren {
  richText?: string;
}

const P = ({ children, richText }: PProps) =>
  richText ? (
    <Text
      className="leading-relaxed"
      style={{ fontSize: 16 }}
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  ) : (
    <Text className="leading-relaxed" style={{ fontSize: 16 }}>
      {children}
    </Text>
  );

const Strong = ({ children }: PropsWithChildren) => (
  <strong className="font-semibold">{children}</strong>
);

interface ListProps {
  list: React.ReactNode[];
  variant?: "bullet" | "numbered";
}
const List = ({ list, variant = "bullet" }: ListProps) => {
  return (
    <Section>
      {list.map((item, i) => (
        <P key={i}>
          {variant === "bullet" ? <>&bull;</> : <>{i + 1}.</>}
          &nbsp; &nbsp;
          {item}
        </P>
      ))}
    </Section>
  );
};
interface LinkProps {
  children?: string;
  href: string;
  color?: string;
}

const Link = ({ children, href, color }: LinkProps) => (
  <a
    href={href}
    target="_blank"
    className="underline underline-offset-2"
    style={{
      color: color || COLOR.brand,
    }}
  >
    {children || href}
  </a>
);
interface ButtonProps extends PropsWithChildren {
  href: string;
  color?: string;
}

const Button = ({ children, href, color }: ButtonProps) => (
  <Section>
    <a
      href={href}
      style={{
        color: "white",
        backgroundColor: color || COLOR.brand,
        borderRadius: 100,
        padding: 10,
        textAlign: "center",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 15,
        display: "block",
      }}
    >
      {children}
    </a>
  </Section>
);

const Footer = () => (
  <Section>
    <P>
      Cheers, <br />
      EMANUEL <br />
      AI Product Engineer <br />
      <Link href={APP.whatsappSalesUrl}>{APP.telDisplayText}</Link>
    </P>
  </Section>
);

const Banner = ({
  variant = "social-preview",
}: {
  variant?: "social-preview" | "support-podcast";
}) => {
  return (
    <Section className="my-4">
      <Img
        src={
          variant === "support-podcast"
            ? "https://northwindai.org/images/support-podcast-banner.png"
            : APP.socialPreview
        }
        alt=""
        width="320"
        height="auto"
        className={clsx(
          "mx-auto w-full",
          variant === "social-preview" && "invert",
        )}
      />
    </Section>
  );
};

export const Builder = {
  Template,
  H1,
  P,
  Strong,
  List,
  Link,
  Button,
  Footer,
  Banner,
};
