import React, { PropsWithChildren } from "react";
import { SparklineChart } from "./sparkline-chart";

interface Props extends PropsWithChildren {
  Icon?: React.ReactNode;
  label: string;
  value?: number;
  valuePrefix?: string;
  valueSuffix?: string;
}

export const KpiCard = ({
  children,
  Icon,
  label,
  value = 0,
  valueSuffix,
  valuePrefix,
}: Props) => {
  return (
    <div className="bg-card rounded-2xl px-6 py-5 shadow-2xl">
      <div className="flex-row-cs gap-4 font-medium">
        <div className="flex-row-cc bg-background text-foreground size-[24px] rounded-full">
          {Icon}
        </div>
        {label}
      </div>
      <div className="flex-row-cb gap-6">
        <h2 className="mt-4 text-[48px] leading-16 font-semibold">
          {valuePrefix}
          {value.toLocaleString()}
          {valueSuffix}
        </h2>
        <SparklineChart value={value} />
        {children}
      </div>
    </div>
  );
};
