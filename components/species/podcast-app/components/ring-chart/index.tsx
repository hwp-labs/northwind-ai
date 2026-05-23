"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { useRingChart } from "./hook";

interface Props {
  title: string;
  label?: React.ReactNode;
  value?: number;
  valueRate?: number;
  valuePrefix?: string;
  valueSuffix?: string;
  keys?: {
    label: string;
    value?: number;
    valuePrefix?: string;
    valueSuffix?: string;
  }[];
}

export const RingChart = ({
  title,
  label,
  value,
  valueRate,
  valuePrefix,
  valueSuffix,
  keys,
}: Props) => {
  const { canvasRef } = useRingChart({ progress: valueRate || value || 0 });
  //
  return (
    <div className="bg-card rounded-2xl px-6 py-5 shadow-2xl">
      <div className="flex-row-cb">
        <strong className="text-lg">{title}</strong>
        <button className="button-base text-muted-foreground gap-1 rounded-lg border px-4 py-2.5 text-sm font-medium">
          {/* all time*,7d,30d,90d,180d,365d */}
          All time
          <IconChevronDown stroke={2.5} size={18} />
        </button>
      </div>

      <div className="flex-row-cc relative mt-4">
        <canvas ref={canvasRef} className="size-[250px]" />
        <div className="absolute mt-2 text-center">
          {label ? <div className="text-muted-foreground">{label}</div> : null}
          <div className="text-[48px] leading-16 font-semibold">
            {valuePrefix ? (
              <small className="font-normal">{valuePrefix}</small>
            ) : null}
            {value}
            {valueSuffix ? (
              <small className="font-normal">{valueSuffix}</small>
            ) : null}
          </div>
        </div>
      </div>

      {keys ? (
        <ul className="mt-6 flex justify-around border-t py-6">
          {keys.map(({ label, value, ...item }, i) => (
            <li className="flex-col-cc _debug gap-1" key={i}>
              <span className="text-muted-foreground">{label}</span>
              <strong className="text-xl">
                {item.valuePrefix}
                {(value || 0).toLocaleString()}
                {item.valueSuffix}
              </strong>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
