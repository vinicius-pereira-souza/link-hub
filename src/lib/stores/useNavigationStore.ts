import { create } from "zustand";

interface UINavigationState {
  IsNavigationDrawerOpen: boolean;
  IsNavigationSidebarCollapsed: boolean;
  toggleCollapsedSidebar: () => void;
  setDrawerNavigationOpen: (isOpen: boolean) => void;
}

export const useNavigationStore = create<UINavigationState>()((set) => ({
  IsNavigationDrawerOpen: false,
  IsNavigationSidebarCollapsed: false,
  toggleCollapsedSidebar: () =>
    set((state) => ({
      IsNavigationSidebarCollapsed: !state.IsNavigationSidebarCollapsed,
    })),
  setDrawerNavigationOpen: (isOpen) => {
    set({ IsNavigationDrawerOpen: isOpen });
  },
}));
