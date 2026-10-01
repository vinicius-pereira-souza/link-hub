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
        `py-2.5 px-3 w-full flex items-center gap-x-2.5 text-slate-800 text-sm font-medium leading-5 cursor-pointer hover:bg-red-600/10 rounded-xl mt-2 transition-colors`,
      )}
    >
      <LogOut size={15} />
      Sair
    </button>
  );
}
