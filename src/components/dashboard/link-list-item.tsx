"use client";

import { LinkRow } from "@/lib/definitions";
import { Globe, Pencil } from "lucide-react";

export default function LinkListItem({
  id,
  title,
  total_click,
  url,
}: Partial<LinkRow>) {
  return (
    <li className="p-6 bg-white border border-neutral-300 rounded-xl grid grid-cols-[auto_1fr_auto] items-center gap-6 transition-all hover:bg-neutral-100 hover:-translate-y-1.5 mb-2">
      <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-indigo-900 ">
        <Globe />
      </div>
      <div>
        <p className="text-zinc-900 text-2xl font-medium leading-8">{title}</p>
        <p className="text-zinc-600 text-xs font-medium leading-4">{url}</p>
      </div>
      <div className="text-end flex items-center gap-9">
        <div>
          <span className="block text-zinc-900 text-sm font-medium leading-5">
            {total_click}
          </span>
          <span className="block text-zinc-600 text-xs font-semibold leading-3">
            Cliques
          </span>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-200 hover:text-indigo-900 transition-all cursor-pointer">
          <Pencil size={20} />
        </button>
      </div>
    </li>
  );
}
