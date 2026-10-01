"use client";
import Link from "next/link";
import { DashboardNavLinks, DashboardNavLink } from "@/components/ui/links";
import ButtonSignOut from "../auth/button-sign-out";
import { Link2, X, User, Waypoints } from "lucide-react";
import { cn } from "@/lib/tw-merge";
import { useUIStore } from "@/lib/stores/useUIStore";

export default function DashboardNavbar() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const setSidebarOpen = useUIStore((state) => state.setSidebarOpen);

  return (
    <div
      className={cn(
        `w-full h-screen fixed top-0 left-0 z-10 invisible transition-[visibility] duration-200 ease-linear group`,
        isSidebarOpen && `visible`,
      )}
    >
      <div className={cn(`modal-overlay group-[.visible]:opacity-100`)} />
      <aside
        className={cn(
          `h-screen w-full max-w-66.25 bg-white fixed top-0 left-0 py-6 px-4 flex flex-col z-30 transition-transform duration-200 ease-linear -translate-x-full group-[.visible]:translate-0`,
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-x-3 text-zinc-900 font-semibold text-sm md:text-lg leading-[17.5px]">
            <span className="size-9 flex items-center justify-center bg-indigo-900 shadow rounded-xl text-white">
              <Link2 size={18} />
            </span>
            <span>LinkHub</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="size-9 flex items-center justify-center bg-gray-100  rounded-full text-zinc-700 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex-1">
          <ul>
            <DashboardNavLinks />
          </ul>
        </nav>
        <div className="border-t border-gray-200 py-4">
          <div className="bg-white rounded-xl p-2.5 border border-gray-200 mt-auto grid grid-cols-[40px_1fr] items-center mb-3.5">
            <div
              className={`flex items-center justify-center rounded-full size-8
                     bg-indigo-900 text-white`}
            >
              <User size={15} />
            </div>
            <div className="min-w-32">
              <span className="block text-zinc-900 text-sm font-medium leading-5">
                Alex Rivera
              </span>
              <span className="block text-zinc-700 text-xs font-semibold">
                alex@linkhub.so
              </span>
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center justify-center gap-x-2 text-white text-sm font-medium leading-5 text-center rounded-xl py-2.5 bg-indigo-900"
          >
            <Waypoints size={15} />
            <span>Ver perfil público</span>
          </Link>
          <ButtonSignOut />
        </div>
      </aside>
    </div>
  );
}
