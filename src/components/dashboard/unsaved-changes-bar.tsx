"use client";

import { Check, CircleCheck } from "lucide-react";
import { useManagerLinksStore } from "@/providers/manager-links-provider";

export default function UnsavedChangesBar() {
  const hasChanges = useManagerLinksStore((state) => state.hasChanges);

  return (
    <div className="flex items-centerbg-white rounded-xl p-6 border border-neutral-300 bg-white mb-12">
      <div className="flex items-center gap-x-1 text-zinc-700 text-xs leading-4 font-semibold p-3 bg-gray-200 border border-neutral-300 rounded-full">
        <CircleCheck className="text-indigo-900 size-4" />
        <span>Todas as alterações salvas</span>
      </div>
      <button
        data-active={String(hasChanges)}
        disabled={hasChanges}
        className={`text-zinc-600/50 text-sm leading-5 font-medium py-3 px-6 ml-auto transition-colors data-[active=true]:text-zinc-900 data-[active=true]:cursor-pointer data-[active=true]:hover:text-zinc-900/50`}
      >
        Descartar
      </button>
      <button
        data-active={String(hasChanges)}
        disabled={hasChanges}
        className={`bg-zinc-200 text-zinc-700/60 text-sm leading-5 font-medium flex items-center gap-x-1 rounded-lg py-3 px-6 transition-colors data-[active=true]:bg-indigo-900 data-[active=true]:text-white data-[active=true]:cursor-pointer data-[active=true]:hover:bg-indigo-900/50 `}
      >
        <Check size={16} />
        salvar alterações
      </button>
    </div>
  );
}
