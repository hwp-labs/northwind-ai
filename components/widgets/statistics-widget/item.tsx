"use client";

import { useAppStore } from "@/store/appStore";
import { FaStar } from "react-icons/fa6";

interface ItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

export const Item = ({ icon, label, value }: ItemProps) => {
  return (
    <li className="debug_ flex-row-cs max-w-[220px] min-w-[220px] gap-4">
      <i className="flex-row-cc size-14 rounded-full bg-white/10">{icon}</i>
      <div className="grid gap-1">
        <h3 className="font-f3 text-2xl font-bold">{value}</h3>
        <p className="text-sm font-medium uppercase opacity-90">{label}</p>
      </div>
    </li>
  );
};

export const GithubStarsItem = () => {
  const stargazersCount = useAppStore((s) => s.stargazersCount);
  //
  return (
    <Item
      icon={<FaStar size={24} />}
      label="GitHub Stars"
      value={stargazersCount}
    />
  );
};
