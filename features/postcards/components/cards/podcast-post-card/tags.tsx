export const Tags = ({ list }: { list: string[] }) => {
  return (
    <ul className="flex-row-cs mt-6 gap-1.5">
      {list.map((item, i) => (
        <li
          key={i}
          className="rounded-full px-3 py-0.5 text-[10px] text-white"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
