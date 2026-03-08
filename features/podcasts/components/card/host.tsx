import Link from "next/link";

export const Host = () => {
  return (
    <figure className="flex-row-cs gap-2">
      <img
        src="/images/photo-etugbeh.png"
        alt=""
        className="size-[32px] rounded-full ring-2 ring-white"
      />
      <figcaption>
        <Link
          href="https://x.com/2gbeh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-row-cs gap-1.5 font-medium"
        >
          @2gbeh
          <span className="rounded bg-[#ae8aea] px-1.5 py-0.5 text-xs font-normal">
            Host
          </span>
        </Link>
      </figcaption>
    </figure>
  );
};
