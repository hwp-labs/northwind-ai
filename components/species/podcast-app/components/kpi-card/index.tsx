import React from "react";

export const KpiCard = () => {
  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
            <span className="text-xs text-violet-600">👥</span>
          </div>
          Total Customer
        </div>

        <span className="text-gray-300">•••</span>
      </div>

      <h2 className="text-4xl font-bold text-gray-900">32,502</h2>

      <p className="mt-2 text-sm">
        <span className="font-medium text-red-500">↓ 2.1%</span>
        <span className="ml-1 text-gray-400">less than last month</span>
      </p>
    </div>
  );
};

export const KpiCardV2 = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-2xl border p-4">
        <div className="mb-1 flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <span>👥</span> Total Customer
          </div>
          <span className="text-muted-foreground">···</span>
        </div>
        <p className="text-2xl font-semibold">32,502</p>
        <p className="text-xs text-red-500">↓ 2.1% less than last month</p>
      </div>

      <div className="rounded-2xl border p-4">
        <div className="mb-1 flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <span>🛒</span> Total Order
          </div>
          <span className="text-muted-foreground">···</span>
        </div>
        <p className="text-2xl font-semibold">40,284</p>
        <p className="text-xs text-green-500">↑ 8.2% greater than last month</p>
      </div>
    </div>
  );
};
