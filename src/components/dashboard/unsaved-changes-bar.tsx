"use client";

import { Check, CircleCheck } from "lucide-react";
import Link from "next/link";

export default function UnsavedChangesBar() {
  const hasChanges: boolean = false;

  if (!hasChanges)
    return (
      <div>
        <div className="flex items-center">
          <div className="flex items-center gap-x-1">
            <CircleCheck color="#312c85" size={15} />
            <span className="text-zinc-700 text-xs leading-4 font-semibold">
              Alterações pendentes
            </span>
          </div>
          <span className="text-zinc-600/50 block text-sm leading-5 py-3.5 px-6 ml-auto mr-3 font-semibold cursor-pointer">
            Descartar
          </span>
          <button
            className={`bg-zinc-200 text-zinc-700/60 text-sm leading-5 flex items-center gap-x-5 py-3.5 px-6 rounded-2xl cursor-pointer`}
          >
            <Check className="path-zinc-700/60" size={20} />
            salvar alterações
          </button>
        </div>
      </div>
    );

  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center gap-x-1 ">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          <span className="text-zinc-700 text-xs leading-4 font-semibold">
            Alterações pendentes
          </span>
        </div>

        <Link
          className="text-zinc-600 transition-all hover:text-zinc-900 text-sm leading-5 py-3.5 px-6 ml-auto mr-3 font-semibold"
          href="/links"
        >
          Descartar
        </Link>
        <button
          className={`bg-indigo-900 transition-all hover:bg-indigo-700 text-white text-sm leading-5 flex items-center gap-x-5 py-3.5 px-6 rounded-2xl cursor-pointer`}
        >
          <Check color="white" size={20} />
          salvar alterações
        </button>
      </div>
    </div>
  );
}
