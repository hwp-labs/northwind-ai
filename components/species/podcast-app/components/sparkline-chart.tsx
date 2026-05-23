"use client";

import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

export const SparklineChart = ({ value }: { value: number }) => {
  const data =
    value < 1
      ? [{ value: 10 }, { value: 10 }, { value: 0 }, { value: 0 }]
      : [{ value: 0 }, { value: 0 }, { value: 10 }, { value: 10 }];
  //
  return (
    <ResponsiveContainer width="100%" height={60}>
      <AreaChart data={data}>
        <YAxis domain={[0, 15]} hide />
        <Area
          type="monotone"
          dataKey="value"
          stroke={value < 1 ? "var(--chart-1)" : "var(--chart-2)"}
          strokeWidth={2}
          fill={value < 1 ? "var(--chart-1)" : "var(--chart-2)"}
          fillOpacity={0.15}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
