import { cn } from "@/lib/tw-merge";
import { Link2 } from "lucide-react";

export default function Logo({ subClass }: { subClass?: string | string[] }) {
  return (
    <div
      className={cn(
        `flex items-center gap-x-3 text-zinc-900 font-semibold text-sm md:text-lg leading-[17.5px]`,
        subClass,
      )}
    >
      <span className="size-9 flex items-center justify-center bg-indigo-900 shadow rounded-xl text-white">
        <Link2 size={18} />
      </span>
      <span>LinkHub</span>
    </div>
  );
}
