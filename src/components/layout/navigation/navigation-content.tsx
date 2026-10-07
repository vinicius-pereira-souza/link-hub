"use client";

import ButtonSignOut from "@/components/auth/button-sign-out";
import { DashboardNavLinks } from "@/components/ui/links";
import { cn } from "@/lib/tw-merge";
import { Link2, Waypoints, X, ChevronsLeft } from "lucide-react";
import Link from "next/link";
import SidebarItemText from "./sidebar-item-text";
import UserAvatar from "../../dashboard/user-avatar";

interface NavigationContentProps {
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar?: () => void;
}

export default function NavigationContent({
  setSidebarOpen,
  toggleSidebar,
}: NavigationContentProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-x-3 text-zinc-900 font-semibold text-sm md:text-lg leading-[17.5px] group-data-[sidebar=collapsed]/sidebar:invisible">
          <span className="size-9 flex items-center justify-center bg-indigo-900 shadow rounded-xl text-white">
            <Link2 size={18} />
          </span>
          <span>LinkHub</span>
        </div>

        <button
          onClick={() => setSidebarOpen(false)}
          className="size-9 md:hidden flex items-center justify-center bg-gray-100 rounded-full text-zinc-700 cursor-pointer"
        >
          <X size={18} />
        </button>

        <button
          onClick={() => toggleSidebar?.()}
          className={cn(
            "size-9 hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-xl text-zinc-500 cursor-pointer absolute top-6 right-4 z-30 transition-transform hover:shadow",
            "group-data-[sidebar=collapsed]/sidebar:rotate-180  group-data-[sidebar=collapsed]/sidebar:right-5",
          )}
        >
          <ChevronsLeft size={18} />
        </button>
      </div>

      <nav className="flex-1">
        <ul>
          <DashboardNavLinks />
        </ul>
      </nav>
      <div className="border-t border-gray-200 py-4">
        <UserAvatar />
        <Link
          href="#"
          className="flex items-center justify-center gap-x-2 text-white text-sm font-medium leading-5 text-center rounded-xl py-2.5 bg-indigo-900 break-normal relative group"
        >
          <Waypoints size={15} />
          <SidebarItemText
            label="Ver perfil público"
            subClass="group-data-[sidebar=collapsed]/sidebar:text-indigo-900"
          />
        </Link>
        <ButtonSignOut />
      </div>
    </>
  );
}
