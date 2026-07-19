import clsx from "clsx";
import { SparklineChart } from "./sparkline-chart";

interface Props {
  Icon?: React.ReactNode;
  label: string;
  value?: number;
  valueText?: string;
  keyTitle?: string;
  keys?: {
    label: string;
    value?: number;
    valueText?: string;
    color?: string;
  }[];
}

export const KpiCard = ({
  Icon,
  label,
  value = 0,
  valueText,
  keyTitle,
  keys = [],
}: Props) => {
  return (
    <div className="card-podcast">
      <div className="flex-row-cs gap-4 text-lg font-medium">
        <div className="flex-row-cc bg-background text-foreground size-[32px] rounded-full">
          {Icon}
        </div>
        {label}
      </div>
      <div className="flex-row-cb gap-6">
        <h2 className="mt-4 text-[48px] leading-16 font-semibold">
          {valueText || value.toLocaleString()}
        </h2>
        <SparklineChart
          data={keys.map(({ value }) => ({ value: value || 0 }))}
        />
      </div>
      {keys ? (
        <div className="flex-row-cs mt-2 flex-wrap gap-x-4 gap-y-2 border-t py-4 text-sm">
          {keyTitle ? <strong>{keyTitle}:</strong> : null}
          {keys.map((item, i) => (
            <div key={i} className="flex-row-cs gap-2.5 whitespace-nowrap">
              <div className={clsx("bg-ring size-2.5 rounded", item.color)} />
              {item.valueText || item.value || 0} {item.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
