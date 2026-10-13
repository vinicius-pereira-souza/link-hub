import Logo from "../../ui/logo";
import { DashboardNavLinks } from "../../ui/links";
import Link from "next/link";
import { Waypoints } from "lucide-react";
import { DrawerButton } from "./buttons-actions";
import ButtonSignOut from "@/components/feature/auth/button-sign-out";
import UserAvatar from "@/components/feature/dashboard/user-avatar";

export default function DashboardNavigation({
  navigationbar,
}: {
  navigationbar: "collapsed" | "expanded";
}) {
  return (
    <aside
      data-navigationbar={navigationbar}
      className="h-screen flex transtion-all z-30 flex-col data-[navigationbar=expanded]:w-[256px] data-[navigationbar=collapsed]:w-20 bg-slate-900 border-r border-slate-800 transition-all group/navigationbar"
    >
      <div className="py-3.25 px-3 border-b border-slate-800 flex items-center justify-between gap-y-5 lg:group-data-[navigationbar=collapsed]/navigationbar:justify-center">
        <Logo />
        <DrawerButton action="close" />
      </div>
      <div className="p-3">
        <UserAvatar />
      </div>
      <nav className="px-3 flex-1">
        <DashboardNavLinks />
      </nav>
      <div className="px-3 py-4 border-t border-slate-800 ">
        <Link
          href="#"
          className="flex items-center justify-center gap-x-2 bg-slate-800 hover:bg-slate-800/50 border border-slate-700/80 rounded-xl p-2.5 text-sm font-medium leading-5 text-white transition-colors group-data-[navigationbar=collapsed]/navigationbar:size-11 mb-2 flex-nowrap overflow-hidden"
        >
          <Waypoints className="text-indigo-400 size-4" />
          <span className="group-data-[navigationbar=collapsed]/navigationbar:hidden">
            Compartilhar Perfil
          </span>
        </Link>
        <ButtonSignOut />
      </div>
    </aside>
  );
}
