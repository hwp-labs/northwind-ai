import Image from "next/image";

export const CoverImage = () => {
  return (
    <Image
      className="mx-auto mt-16 px-4 invert lg:px-0"
      src="/social-preview.png"
      alt=""
      width={1280}
      height={640}
      priority
    />
  );
};
