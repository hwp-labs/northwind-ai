interface Props {
  label: string;
  rate: number;
}

export const Item = ({ label, rate }: Props) => {
  const src = `/uploads/podcast/flag-${label.toLowerCase()}.webp`;
  const width = Math.round(rate) + "%";
  //
  return (
    <div className="flex-row-cb gap-4">
      <figure className="flex-row-cs gap-4">
        <img src={src} alt="" width={24} />
        <figcaption className="font-medium">{label}</figcaption>
      </figure>
      <ol className="h-2 flex-1 overflow-clip rounded-full bg-[#00bc7d26]">
        <li className="h-2 rounded-full bg-[#00bc7d]" style={{ width }}></li>
      </ol>
      <strong>{width}</strong>
    </div>
  );
};
