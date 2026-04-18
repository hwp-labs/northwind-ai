"use client";

import { ShipmentList } from "@/lib/go-send-am/shipment-list";
import shipmentsData from "@/lib/go-send-am/shipment-list/data.json";

export default function GoSendAmPage() {
  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <ShipmentList shipments={shipmentsData} onSelect={(s) => undefined} />
    </main>
  );
}
