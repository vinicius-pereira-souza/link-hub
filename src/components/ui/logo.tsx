import { cn } from "@/lib/tw-merge";
import { Link2 } from "lucide-react";

export default function Logo({ color }: { color: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-x-2.5 font-extrabold text-[20px] leading-7 tracking-[-0.5px] text-white">
      <div className="size-9 flex items-center justify-center rounded-xl bg-linear-to-r from-indigo-600  to-indigo-800">
        <Link2 size={18} />
      </div>
      <span
        className={cn(
          `group-data-[navigationbar=collapsed]/navigationbar:hidden`,
          color === "dark" ? "text-slate-900" : "text-white",
        )}
      >
        LinkHub
      </span>
    </div>
  );
}
