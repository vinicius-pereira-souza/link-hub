"use client";
import { useNavigationStore } from "@/lib/stores/useNavigationStore";
import { cn } from "@/lib/tw-merge";
import DashboardNavigation from "./dashboard-navigation";

export default function DashboardNavigationContainer() {
  const IsNavigationDrawerOpen = useNavigationStore(
    (state) => state.IsNavigationDrawerOpen,
  );
  const setDrawerNavigationOpen = useNavigationStore(
    (state) => state.setDrawerNavigationOpen,
  );
  const IsNavigationSidebarCollapsed = useNavigationStore(
    (state) => state.IsNavigationSidebarCollapsed,
  );

  return (
    <>
      {/* Drawer Mobile Navigation */}
      <div
        className={cn(
          `lg:hidden w-full h-screen fixed top-0 left-0 z-30 invisible transition-[visibility] duration-200 ease-linear group`,
          IsNavigationDrawerOpen && `visible`,
        )}
      >
        <div
          className={cn(`modal-overlay group-[.visible]:opacity-100`)}
          onClick={() => setDrawerNavigationOpen(false)}
        />
        <div className="z-30 fixed top-0 left-0 transition-transform duration-200 ease-linear -translate-x-full group-[.visible]:translate-0 shadow">
          <DashboardNavigation navigationbar="expanded" />
        </div>
      </div>

      {/* SideBar Tablet/Desktop Navigation */}
      <div className="hidden lg:block">
        <DashboardNavigation
          navigationbar={
            IsNavigationSidebarCollapsed ? "collapsed" : "expanded"
          }
        />
      </div>
    </>
  );
}
