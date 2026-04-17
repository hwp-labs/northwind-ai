"use client";

import { ShipmentList } from "@/features/go-send-am/shipment-list";
import shipmentsData from "@/features/go-send-am/shipment-list/data.json";

export default function GoSendAmPage() {
  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <ShipmentList shipments={shipmentsData} onSelect={(s) => undefined} />
    </main>
  );
}
