"use client";

import { cn } from "@/lib/tw-merge";
import { Plus } from "lucide-react";

export default function AddLinkButton({
  subClass,
}: {
  subClass?: string | string[];
}) {
  return (
    <button
      className={cn(
        `flex items-center gap-x-2 py-1.75 md:py-2 lg:py-2.5 px-2.5 md:px-3.5 lg:px-4 rounded-lg bg-indigo-600 hover:bg-indigo-600/70 text-white text-[11px] md:text-sm leading-[16.5px] md:leading-4 font-semibold cursor-pointer transition-colors`,
        subClass,
      )}
    >
      <Plus size={15} />
      Novo Link
    </button>
  );
}
