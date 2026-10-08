"use client";

import ButtonSignOut from "@/components/feature/auth/button-sign-out";
import { DashboardNavLinks } from "@/components/ui/links";
import { Waypoints } from "lucide-react";
import Link from "next/link";
import SidebarItemText from "./sidebar-item-text";
import UserAvatar from "../../feature/dashboard/user-avatar";
import { ToggleSideBar, DrawerButton } from "./buttons-actions";
import Logo from "@/components/ui/logo";

export default function NavigationContent() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <Logo subClass={`group-data-[sidebar=collapsed]/sidebar:invisible`} />
        <DrawerButton action="close" />
        <ToggleSideBar />
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
