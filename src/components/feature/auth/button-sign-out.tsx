"use client";
import { useTransition } from "react";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/actions";
import { cn } from "@/lib/tw-merge";

export default function ButtonSignOut() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      data-testid="button-sign-out"
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          signOut();
        });
      }}
      className={cn(
        `w-full flex items-center justify-center gap-x-2 bg-slate-800 hover:bg-red-800/50 border border-slate-700/80 rounded-xl p-1 text-sm font-medium leading-5 text-white transition-colors group-data-[navigationbar=collapsed]/navigationbar:size-11 mb-2 flex-nowrap overflow-hidden group`,
      )}
    >
      <LogOut
        className="size-4 text-red-600 group-hover:text-white"
        size={15}
      />
      <span className="group-data-[navigationbar=collapsed]/navigationbar:hidden">
        Sair
      </span>
    </button>
  );
}
