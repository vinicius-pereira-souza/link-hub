"use client";

import { Menu, X, ChevronsLeft } from "lucide-react";
import { useUIStore } from "@/lib/stores/useUIStore";
import { cn } from "@/lib/tw-merge";

// export function DrawerButton({ action }: { action: "open" | "close" }) {
//   const setSidebarOpen = useUIStore((state) => state.setSidebarOpen);
//   const actionValue = action === "open" ? true : false;

//   return (
//     <button
//       data-testid="drawer-button-sidebar"
//       className={cn(
//         `flex items-center justify-center transition-colors cursor-pointer`,
//         action === "open"
//           ? `size-10 hover:bg-gray-200/50 rounded-xl text-zinc-900`
//           : `size-9 md:hidden  bg-gray-100 hover:bg-gray-100/40 rounded-full text-zinc-700`,
//       )}
//       onClick={() => setSidebarOpen(actionValue)}
//     >
//       {action === "open" ? <Menu size={18} /> : <X size={18} />}
//     </button>
//   );
// }

export function ToggleSideBar() {
  const toggleCollapsedSidebar = useUIStore(
    (state) => state.toggleCollapsedSidebar,
  );

  return (
    <button
      data-testid="toggle-button-sidebar"
      onClick={() => toggleCollapsedSidebar()}
      className={cn(
        "size-9 hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-xl text-zinc-500 cursor-pointer hover:shadow",
        "group-data-[navigationbar=collapsed]/navigationbar:rotate-180",
      )}
    >
      <ChevronsLeft size={18} />
    </button>
  );
}
