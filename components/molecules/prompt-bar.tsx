import { PropsWithChildren } from "react";
import clsx from "clsx";
//
import { ThemedTerminalIcon } from "../atoms/themed-terminal-icon";
import { COPY } from "@/constants/LOCALE";

export const PromptBar = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex-row-cc mt-2 px-6 lg:mt-6 lg:px-0">
      <div
        className={clsx(
          "flex-row-cs custom-mono _border gap-2.5 rounded-lg px-6 py-3 text-xs leading-[18px] lg:text-sm",
          "from-contrast/20 bg-gradient-to-l to-purple-900/20",
          // "from-contrast/20 to-brand/5 bg-gradient-to-t",
        )}
      >
        <ThemedTerminalIcon alt />
        {children || COPY.promptShort}
      </div>
    </section>
  );
};
