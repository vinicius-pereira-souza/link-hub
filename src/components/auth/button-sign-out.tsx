"use client";
import { useTransition } from "react";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/actions";
import { cn } from "@/lib/tw-merge";

export default function ButtonSignOut() {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        data-testid="button-sign-out"
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            signOut();
          });
        }}
        className={cn(
          `flex items-center gap-x-3 p-3 text-sm font-medium text-zinc-700 hover:bg-red-100 hover:text-red-700 rounded-lg transition-all cursor-pointer`,
        )}
      >
        <LogOut />
        Sair
      </button>
    </>
  );
}
