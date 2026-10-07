"use client";
import { useUIStore } from "@/lib/stores/useUIStore";
import NavigationContent from "./navigation-content";
import { cn } from "@/lib/tw-merge";

export default function DashboardNavbar() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  const setSidebarOpen = useUIStore((state) => state.setSidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <>
      {/* Drawer Mobile Navigation */}
      <div
        className={cn(
          `md:hidden w-full h-screen fixed top-0 left-0 z-10 invisible transition-[visibility] duration-200 ease-linear group`,
          isSidebarOpen && `visible`,
        )}
      >
        <div
          className={cn(`modal-overlay group-[.visible]:opacity-100`)}
          onClick={() => setSidebarOpen(false)}
        />
        <aside
          className={cn(
            `flex h-screen fixed z- w-full max-w-66.25 z-30 bg-white py-6 px-4 flex-col transition-transform duration-200 ease-linear -translate-x-full group-[.visible]:translate-0 shadow`,
          )}
        >
          <NavigationContent setSidebarOpen={setSidebarOpen} />
        </aside>
      </div>

      {/* SideBar Tablet/Desktop Navigation */}
      <aside
        data-sidebar={!isSidebarOpen && "collapsed"}
        className={cn(
          `group/sidebar hidden md:flex h-screen w-66.25 relative bg-white py-6 px-4 flex-col  data-[sidebar=collapsed]:max-w-20 transition-transform shadow`,
        )}
      >
        <NavigationContent
          setSidebarOpen={setSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </aside>
    </>
  );
}
