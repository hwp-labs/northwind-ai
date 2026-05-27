"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { useRingChart } from "./hook";

interface Props {
  title: string;
  label?: React.ReactNode;
  value?: number;
  valueText?: string;
  keys?: {
    label: string;
    value?: number;
    valueText?: string;
  }[];
}

export const RingChart = ({
  title,
  label,
  value = 0,
  valueText,
  keys,
}: Props) => {
  const { canvasRef } = useRingChart({ progress: value });
  //
  return (
    <section className="card-podcast">
      <strong className="text-lg">{title}</strong>      <div className="flex-row-cc relative mt-4">
        <canvas ref={canvasRef} className="size-[250px]" />
        <div className="absolute mt-2 text-center">
          {label ? <div className="text-muted-foreground">{label}</div> : null}
          <div className="text-[48px] leading-16 font-semibold">
            {valueText || value}
          </div>
        </div>
      </div>

      {keys ? (
        <ul className="mt-6 flex justify-around border-t pt-6">
          {keys.map((item, i) => (
            <li className="flex-col-cc _debug gap-1" key={i}>
              <span className="text-muted-foreground">{item.label}</span>
              <strong className="text-xl">
                {item.valueText || (item.value || 0).toLocaleString()}
              </strong>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};
