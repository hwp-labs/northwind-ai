"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

interface Props {
  data?: { value: number }[];
  negative?: boolean;
}

export const SparklineChart = ({ data = [], negative }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <AreaChart data={data}>
        <Area
          type="monotone"
          dataKey="value"
          stroke={negative ? "var(--chart-5)" : "var(--chart-2)"}
          strokeWidth={2}
          fill={negative ? "var(--chart-5)" : "var(--chart-2)"}
          fillOpacity={0.15}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
