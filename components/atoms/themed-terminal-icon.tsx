import { TerminalIcon } from "lucide-react";
import { COLOR } from "@/constants/COLOR";

interface Props {
  alt?: boolean;
}

export const ThemedTerminalIcon = ({ alt }: Props) => (
  <TerminalIcon
    size={16}
    strokeWidth={3}
    color={alt ? COLOR.contrast : COLOR.white}
  />
);
