"use client";

import { Menu, X, ChevronsLeft } from "lucide-react";
import { useNavigationStore } from "@/lib/stores/useNavigationStore";
import { cn } from "@/lib/tw-merge";

export function DrawerButton({ action }: { action: "open" | "close" }) {
  const setDrawerNavigationOpen = useNavigationStore(
    (state) => state.setDrawerNavigationOpen,
  );
  const actionValue = action === "open" ? true : false;

  return (
    <button
      data-testid="drawer-button-sidebar"
      className={cn(
        `flex md:hidden items-center justify-center transition-colors cursor-pointer`,
        action === "open"
          ? `size-10 hover:bg-gray-200/50 rounded-xl text-zinc-900`
          : `size-9 md:hidden  bg-gray-100 hover:bg-gray-100/40 rounded-full text-zinc-700`,
      )}
      onClick={() => setDrawerNavigationOpen(actionValue)}
    >
      {action === "open" ? <Menu size={18} /> : <X size={18} />}
    </button>
  );
}

export function ToggleButtonColapseSideBar() {
  const IsNavigationSidebarCollapsed = useNavigationStore(
    (state) => state.IsNavigationSidebarCollapsed,
  );
  const toggleCollapsedSidebar = useNavigationStore(
    (state) => state.toggleCollapsedSidebar,
  );

  return (
    <button
      data-testid="toggle-button-sidebar"
      onClick={() => toggleCollapsedSidebar()}
      className={cn(
        "size-9 hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-xl text-zinc-500 cursor-pointer hover:shadow",
        IsNavigationSidebarCollapsed && "rotate-180",
      )}
    >
      <ChevronsLeft size={18} />
    </button>
  );
}
