import { useEffect, useRef } from "react";
import { COLOR } from "@/constants/COLOR";

interface Args {
  progress?: number;
  fillColor?: string;
  strokeColor?: string;
}

export function useRingChart(args?: Args) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const size = 200;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2,
      cy = size / 2,
      r = 80,
      lw = 20;
    const start = -Math.PI / 2;
    const end = start + (2 * Math.PI * (args?.progress || 1)) / 100;

    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = args?.strokeColor || COLOR.chartBg;
    ctx.lineWidth = lw;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, r, start, end);
    ctx.strokeStyle = args?.fillColor || COLOR.chartFg;
    ctx.lineWidth = lw;
    ctx.lineCap = "round";
    ctx.stroke();
  }, []);

  return { canvasRef };
}
