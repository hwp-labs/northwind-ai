import { AnchorOutbound } from "@/components/atoms/anchor";

export const Host = () => {
  return (
    <figure className="flex-row-cs gap-2">
      <img
        src="/images/avatar-etugbeh.png"
        alt=""
        className="size-[32px] rounded-full ring-2 ring-white"
      />
      <figcaption>
        <AnchorOutbound
          href="https://x.com/2gbeh"
          className="flex-row-cs gap-1.5 font-medium"
        >
          @2gbeh
          <span className="rounded bg-[#ae8aea] px-1.5 py-0.5 text-xs font-normal">
            Host
          </span>
        </AnchorOutbound>
      </figcaption>
    </figure>
  );
};
