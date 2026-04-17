"use client";

import { useState, useMemo } from "react";

/**
# COMMIT MESSAGE: Fixed the broken shipment list
- Memoized filtered list to prevent excessive component re-renders - line 21
- Reset selected item on filter click for better UX - line 45
- Updated mapped list key - line 55
- Updated selected item background style logic - line 59
*/

const statusColors = {
  pending: "#fef3c7",
  "in-transit": "#e8f4f4",
  delivered: "#eaf7ef",
};

export function ShipmentList({ shipments, onSelect }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      shipments.filter((s) => (filter === "all" ? true : s.status === filter)),
    [filter],
  );

  function handleSelect(shipment) {
    setSelected(shipment.id);
    onSelect(shipment);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 16,
        }}
      >
        {["all", "pending", "in-transit", "delivered"].map((f) => (
          <button
            key={f}
            onClick={() => {
              setSelected(null);
              setFilter(f);
            }}
          >
            {f}
          </button>
        ))}
      </div>
      {filtered.map((shipment, index) => (
        <div
          key={shipment.id}
          onClick={() => handleSelect(shipment)}
          style={{
            background:
              selected === shipment.id
                ? "#0d7377"
                : statusColors[shipment.status],
            padding: "12px 16px",
            marginBottom: 8,
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          <strong>{shipment.trackingId}</strong>
          <p>{shipment.destination}</p>
          <span>{shipment.status}</span>
        </div>
      ))}
    </div>
  );
}
