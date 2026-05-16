import { Logo } from "../../logo";
import { HeaderRightSection } from "./right-section";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <header className="flex-row-cb debug_ p-6 lg:p-8">
      <Logo path={PATH.home} />
      <HeaderRightSection />
    </header>
  );
};