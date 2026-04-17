import { HomeIcon, type LucideIcon } from "lucide-react";
import { MenuItem } from "@/types";
import { PATH, PROTECTED_PATH } from "./PATH";

export const MENU = [
  { label: "Home", path: PATH.home },
  { label: "Get Started", path: PATH.getStarted },
] as const satisfies MenuItem[];

export const DASHBOARD_MENU = [
  { label: "Home", path: PATH.home, Icon: HomeIcon },
  // { label: "Dashboard", path: PROTECTED_PATH.dashboard },
  { label: "Visitors", path: PROTECTED_PATH.visitors },
  { label: "Listeners", path: PROTECTED_PATH.listeners },
  // { label: "Contacts", path: PROTECTED_PATH.contacts },
  // { label: "Industries", path: PROTECTED_PATH.industries },
] as const satisfies MenuItem[];
