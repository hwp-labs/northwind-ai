import { HomeIcon, type LucideIcon } from "lucide-react";
import { MenuItem } from "@/types";
import { PATH, PATH_PROTECTED } from "./PATH";

export const MENU = [
  { label: "Home", path: PATH.home },
  { label: "Get Started", path: PATH.getStarted },
] as const satisfies MenuItem[];

export const DASHBOARD_MENU = [
  { label: "Home", path: PATH.home, Icon: HomeIcon },
  // { label: "Dashboard", path: PATH_PROTECTED.dashboard },
  { label: "Visitors", path: PATH_PROTECTED.visitors },
  { label: "Listeners", path: PATH_PROTECTED.listeners },
  // { label: "Contacts", path: PATH_PROTECTED.contacts },
  // { label: "Industries", path: PATH_PROTECTED.industries },
  { label: "Seed Portal", path: PATH_PROTECTED.seedPortal },
] as const satisfies MenuItem[];
