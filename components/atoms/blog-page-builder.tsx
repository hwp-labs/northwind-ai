import { PropsWithChildren } from "react";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import clsx from "clsx";
//
import { momentUtil } from "@/utils/moment-util";
import { PATH } from "@/constants/PATH";

interface ContainerProps extends PropsWithChildren {
  h1?: string;
  time?: string;
}

const Container = ({ children, h1, time }: ContainerProps) => (
  <main className="debug_ mx-auto max-w-xl px-6 pb-16 lg:px-0">
    {h1 ? (
      <section className="debug_ mb-4 border-b pb-4">
        <h1 className="debug_ inline-block">
          <Link
            href={PATH.home + "#footer"}
            title="Back"
            className="debug_ flex-row-cs font-f3 gap-2.5 text-2xl font-semibold text-white"
          >
            <ChevronLeftIcon />
            {h1}
          </Link>
        </h1>
      </section>
    ) : null}
    {time ? (
      <section className="text-muted-foreground text-sm">
        <strong className="font-semibold">Last Updated:</strong>{" "}
        <time dateTime={time}>{momentUtil.verbose(time)}</time>
      </section>
    ) : null}
    <article className="text-sm leading-6">{children}</article>
  </main>
);

const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight">
    {children}
  </h2>
);

const H3 = ({ children }: PropsWithChildren) => (
  <h2 className="text-md mt-4 mb-4 scroll-m-20 font-semibold tracking-tight">
    {children}
  </h2>
);

const Strong = ({ children }: PropsWithChildren) => (
  <strong className="font-semibold underline underline-offset-2">
    {children}
  </strong>
);

interface UlProps extends PropsWithChildren {
  className?: string;
}

const Ul = ({ children, className }: UlProps) => (
  <ul className={clsx("mb-4 ml-6 list-disc [&>li]:mt-2", className)}>
    {children}
  </ul>
);

export const BlogPageBuilder = { Container, H2, H3, Strong, Ul };
