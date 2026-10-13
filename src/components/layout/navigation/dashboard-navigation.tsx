"use client";
import { useUIStore } from "@/lib/stores/useUIStore";
import Logo from "../../ui/logo";
import { DashboardNavLinks } from "../../ui/links";
import Link from "next/link";
import { Waypoints } from "lucide-react";
import { DrawerButton } from "./buttons-actions";

export default function DashboardNavigation() {
  const isNavigationBarOpen = useUIStore((state) => state.isNavigationBarOpen);

  return (
    <aside
      data-navigationbar={!isNavigationBarOpen && "collapsed"}
      className="h-screen hidden lg:flex flex-col w-[256px] data-[navigationbar=collapsed]:w-20 bg-slate-900 border-r border-slate-800 transition-all group/navigationbar"
    >
      <section className="py-3.25 px-3 border-b border-slate-800 flex items-center justify-between gap-y-5 lg:group-data-[navigationbar=collapsed]/navigationbar:justify-center">
        <Logo />
        <DrawerButton action="close" />
      </section>
      <nav className="px-3 flex-1">
        <DashboardNavLinks />
      </nav>
      <section className="px-3 py-4 border-t border-slate-800 ">
        <Link
          href="#"
          className="flex items-center justify-center gap-x-2 bg-slate-800 hover:bg-slate-800/50 border border-slate-700/80 rounded-xl p-2.5 text-sm font-medium leading-5 text-white transition-colors group-data-[navigationbar=collapsed]/navigationbar:size-11 mb-2"
        >
          <Waypoints className="text-indigo-400 size-4" />
          <span className="group-data-[navigationbar=collapsed]/navigationbar:hidden">
            Compartilhar Perfil
          </span>
        </Link>
      </section>
    </aside>
  );
}
