import { useState } from "react";
import { toPng } from "html-to-image";

interface UseHtmlToImageParams {
  width?: number;
  height?: number;
  scaleTo?: number;
}

export function useHtmlToImage({
  width,
  height,
  scaleTo = 2,
}: UseHtmlToImageParams) {
  // console.log("🚀 ~ useHtmlToImage ~ width:", width, height, scaleTo);
  const [loading, setLoading] = useState(false);

  async function _download(link: string, filename: string) {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = filename;
    // append to DOM to ensure click works in all browsers
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  async function convertToPng(id: string, filename?: string) {
    const node = document.getElementById(id);

    if (!node) throw new Error(`Element with id="${id}" not found`);

    setLoading(true);
    try {
      await document.fonts.ready;
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 100)); // let layout settle
      // measure the element on the page so output matches its visual size
      const rect = node.getBoundingClientRect();
      // create an off-screen clone to capture fixed/sticky children correctly
      const clone = node.cloneNode(true) as HTMLElement;
      const wrapper = document.createElement("div");
      wrapper.style.position = "absolute";
      wrapper.style.left = "-99999px";
      wrapper.style.top = "0";
      wrapper.style.width = `${Math.round(rect.width)}px`;
      wrapper.style.height = `${Math.round(rect.height)}px`;
      wrapper.style.overflow = "hidden";
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // convert fixed/sticky children in the clone to absolute positioned elements
      try {
        const originals = node.querySelectorAll<HTMLElement>("*");
        const clones = clone.querySelectorAll<HTMLElement>("*");
        for (let i = 0; i < originals.length; i++) {
          const o = originals[i];
          const c = clones[i];
          if (!c) continue;

          // Lock every element to its exact rendered width
          const oRect = o.getBoundingClientRect();
          c.style.width = `${oRect.width}px`;
          c.style.boxSizing = "border-box";

          const style = window.getComputedStyle(o);
          if (style.position === "fixed" || style.position === "sticky") {
            const oRect = o.getBoundingClientRect();
            c.style.position = "absolute";
            c.style.left = `${oRect.left - rect.left}px`;
            c.style.top = `${oRect.top - rect.top}px`;
            c.style.width = `${oRect.width}px`;
            c.style.height = `${oRect.height}px`;
          }
        }

        // wait for images inside clone to load (handles external images)
        const imgs = Array.from(
          clone.querySelectorAll<HTMLImageElement>("img"),
        );
        await Promise.all(
          imgs.map(
            (img) =>
              new Promise((res) => {
                if (img.complete) return res(true);
                img.addEventListener("load", () => res(true));
                img.addEventListener("error", () => res(true));
              }),
          ),
        );

        const opts: any = {
          cacheBust: true,
          width: width || Math.round(rect.width),
          height: height || Math.round(rect.height),
          pixelRatio: scaleTo,
          style: {
            transform: "none",
            ...(width && height
              ? {
                  width,
                  height,
                }
              : {}),
          },
        };

        const downloadLink = await toPng(clone, opts);
        const downloadFilename = filename || `${Date.now()}.png`;
        await _download(downloadLink, downloadFilename);
      } finally {
        // remove the off-screen clone
        if (wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
      }
    } finally {
      setLoading(false);
    }
  }

  return { loading, convertToPng };
}
