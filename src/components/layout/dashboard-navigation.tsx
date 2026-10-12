"use client";
import { useUIStore } from "@/lib/stores/useUIStore";
import Logo from "../ui/logo";

export default function DashboardNavigation() {
  const isNavigationBarOpen = useUIStore((state) => state.isNavigationBarOpen);

  return (
    <aside
      data-navigationbar={!isNavigationBarOpen && "collapsed"}
      className="hidden lg:block w-[256px] data-[navigationbar=collapsed]:w-20 bg-slate-900 border-r border-slate-800 transition-all group/navigationbar"
    >
      <section className="py-3.25 px-3 border-b border-slate-800 flex items-center justify-between gap-y-5 lg:group-data-[navigationbar=collapsed]/navigationbar:justify-center">
        <Logo />
      </section>
      <nav>
        <ul>
          <li>anvegação</li>
        </ul>
      </nav>
    </aside>
  );
}
