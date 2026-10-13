"use client";
import { User } from "lucide-react";
import Image from "next/image";
import useUserData from "@/hooks/useUserData";
import { UserAvatarSkeleton } from "../../ui/skeletons";
import { useNavigationStore } from "@/lib/stores/useNavigationStore";
import { cn } from "@/lib/tw-merge";

export default function UserAvatar() {
  const IsNavigationSidebarCollapsed = useNavigationStore(
    (state) => state.IsNavigationSidebarCollapsed,
  );
  const { data, error, isLoading } = useUserData();

  if (isLoading) return <UserAvatarSkeleton />;
  if (error || !data) return null;

  return (
    <div
      className={cn(
        `flex items-center gap-x-3 p-4 bg-slate-800/80 border border-slate-700/60 
        rounded-2xl`,
        IsNavigationSidebarCollapsed && `p-0 bg-transparent border-0`,
      )}
    >
      <div className="size-10 relative">
        {data.image ? (
          <Image
            src={data.image}
            alt={`Avatar de ${data.name ?? "usuário"}`}
            width={40}
            height={40}
            className="rounded-full object-cover size-10 group-data-[navigationbar=collapsed]/navigationbar:mx-auto"
          />
        ) : (
          <div className="flex items-center justify-center rounded-full size-10 bg-indigo-900 text-white">
            <User size={18} />
          </div>
        )}
        <span className="size-3 rounded-full bg-emerald-500 animate-pulse absolute bottom-0 right-0 border-2 border-slate-800/80" />
      </div>
      <div className={cn(`pr-2`, IsNavigationSidebarCollapsed && `hidden`)}>
        <span className="block text-white text-xs font-bold leading-4 truncate">
          {data.name ?? "Usuário"}
        </span>
        <span className="block text-slate-400 text-[11px] font-medium truncate leading-[16.5px]">
          {data.email}
        </span>
      </div>
    </div>
  );
}
