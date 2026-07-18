import { IconCaretRightFilled } from "@tabler/icons-react";
import { APP_PODCAST } from "@/constants/APP_PODCAST";

export const Footer = () => {
  return (
    <footer className="text-muted font-f4 flex-row-xc absolute bottom-4 w-full gap-0.5 text-xs tracking-widest">
      <div className="text-foreground flex space-x-0.5">
        <span>RSVP</span>
        <IconCaretRightFilled size={12} />
      </div>
      {APP_PODCAST.domain}
    </footer>
  );
};
