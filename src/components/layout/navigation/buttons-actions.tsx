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
        `size-9 flex lg:hidden items-center justify-center rounded-xl cursor-pointer hover:shadow border`,
        action === "open"
          ? `bg-white border-gray-200 text-zinc-500`
          : `bg-slate-800 border-slate-700/80 text-zinc-500`,
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
        "size-9 hidden lg:flex items-center justify-center bg-white border border-gray-200 rounded-xl text-zinc-500 cursor-pointer hover:shadow",
        IsNavigationSidebarCollapsed && "rotate-180",
      )}
    >
      <ChevronsLeft size={18} />
    </button>
  );
}
