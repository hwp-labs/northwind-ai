import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
//
import { Button } from "../shadcn/ui/button";
import { PATH } from "@/constants/PATH";
import { COPY } from "@/constants/LOCALE";

export const ValuePropositionCards = () => {
  return (
    <section className="debug_ px-6 py-16 sm:px-0 md:py-48">
      <h1 className="font-f3 text-center text-[24px] leading-9 font-medium text-white lg:text-4xl lg:leading-12">
        {COPY.prompt}
      </h1>
      <ul className="flex-row-cc mt-10 flex-wrap items-stretch gap-8">
        {COPY.valueProposition.map(({ Icon, ...item }, i) => (
          <li
            key={i}
            className="debug_ flex flex-col gap-2 rounded-xl border p-8 pb-6 text-left sm:w-[450px]"
          >
            <div className="_flex-row-cs grid gap-4">
              <Button
                size="icon"
                className="text-brand bg-brand/10 min-w-[24px]"
              >
                <Icon size={24} />
              </Button>
              <h2 className="text-md font-f1 font-medium lg:text-lg">
                {item.title}
              </h2>
            </div>
            <p className="text-muted-foreground debug_ font-f2 flex-1 text-sm leading-6 lg:text-sm">
              {item.description}
            </p>
            <div className="debug_ mt-4 flex lg:ml-auto">
              <Link
                href={PATH.getStarted}
                className="debug_ flex-row-cs text-brand gap-2 text-sm"
              >
                Get started <ChevronRightIcon size={16} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
