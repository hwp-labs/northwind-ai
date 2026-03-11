import Link from "next/link";
import { Logo } from "../logo";
import { VisitorTrackerWidget } from "../widgets/visitor-tracker-widget";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <header className="flex-row-cb p-6 lg:p-8 debug_">
      <Logo path={PATH.home} />
      <VisitorTrackerWidget />
      <div className="flex-row-cs gap-4">
        <Link href={PATH.login} title="Log in">
          <img
            src="/images/avatar.png"
            alt=""
            width={32}
            className="rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};
