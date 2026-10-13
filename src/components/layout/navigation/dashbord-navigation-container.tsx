"use client";
import { useUIStore } from "@/lib/stores/useUIStore";
import { cn } from "@/lib/tw-merge";
import DashboardNavigation from "./dashboard-navigation";

export default function DashboardNavbar() {
  const isNavigationBarOpen = useUIStore((state) => state.isNavigationBarOpen);
  const setDrawerNavigationOpen = useUIStore(
    (state) => state.setDrawerNavigationOpen,
  );

  return (
    <>
      {/* Drawer Mobile Navigation */}
      <div
        className={cn(
          `md:hidden w-full h-screen fixed top-0 left-0 z-30 invisible transition-[visibility] duration-200 ease-linear group`,
          isNavigationBarOpen && `visible`,
        )}
      >
        <div
          className={cn(`modal-overlay group-[.visible]:opacity-100`)}
          onClick={() => setDrawerNavigationOpen(false)}
        />
        <DashboardNavigation />
      </div>

      {/* SideBar Tablet/Desktop Navigation */}
      <DashboardNavigation />
    </>
  );
}
