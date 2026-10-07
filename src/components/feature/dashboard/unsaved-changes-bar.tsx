"use client";

import { Check, CircleCheck } from "lucide-react";
import { useManagerLinksStore } from "@/providers/manager-links-provider";

export default function UnsavedChangesBar() {
  const hasChanges = useManagerLinksStore((state) => state.hasChanges);

  return (
    <div className="grid grid-cols-[1fr_auto] md:grid-cols-[210px_auto_182px] items-center  gap-2 rounded-xl p-2.5 md:p-6 border border-neutral-300 bg-white mb-12">
      <div className="row-span-1 flex items-center gap-x-1 text-zinc-700 text-xs leading-4 font-semibold p-3 bg-gray-200 border border-neutral-300 rounded-full">
        <CircleCheck className="text-indigo-900 size-4" />
        <span className="break-keep">Todas as alterações salvas</span>
      </div>
      <button
        data-active={String(hasChanges)}
        disabled={hasChanges}
        className={`row-span-1 w-max md:place-self-end text-zinc-600/50 text-xs md:text-sm leading-4 md:leading-5 font-normal py-1 md:py-3 px-2 md:px-6  transition-colors data-[active=true]:text-zinc-900 data-[active=true]:cursor-pointer data-[active=true]:hover:text-zinc-900/50 cursor-pointer`}
      >
        Descartar
      </button>
      <button
        data-active={String(hasChanges)}
        disabled={hasChanges}
        className={`col-span-2 md:col-span-1 bg-zinc-200 text-zinc-700/60 text-sm leading-5 font-medium  rounded-lg py-3 px-6 transition-colors data-[active=true]:bg-indigo-900 data-[active=true]:text-white data-[active=true]:cursor-pointer data-[active=true]:hover:bg-indigo-900/50 `}
      >
        <span className="mx-auto flex items-center justify-center gap-x-1">
          <Check size={16} />
          salvar alterações
        </span>
      </button>
    </div>
  );
}
