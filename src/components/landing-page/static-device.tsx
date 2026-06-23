import Image from "next/image";

const links = [
  {
    title: "new article",
    description: "The Future of Minimalist UI in 2024",
  },
  {
    title: "portfolio",
    description: "Design Case Studies",
  },
  {
    title: "shop",
    description: "Digital Assets & Presets",
  },
];

export default function StaticDevice() {
  return (
    <div className="shadow-2xl border-12 border-zinc-800 rounded-[48px] h-211">
      <div
        className="p-6 flex flex-col items-center bg-white border-b border-zinc-200 rounded-t-4xl
      "
      >
        <Image
          src={"/images/avatar-user.png"}
          alt="avatar user image"
          width={64}
          height={64}
          className="fill-amber-50"
        />
        <span className="text-zinc-900 text-2xl leading-8 font-medium mt-3">
          Alex Rivera
        </span>
        <span className="text-zinc-600 text-xs leading-4 font-semibold">
          Creative Director
        </span>
      </div>
      <div className="p-6">
        {links.map((link) => (
          <div
            key={link.title}
            className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow mb-6 select-none"
          >
            <h2 className="text-indigo-900 uppercase text-xs leading-3.5 mb-1 font-semibold">
              {link.title}
            </h2>
            <h3 className="text-zinc-900text-sm leading-5 font-medium">
              {link.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
