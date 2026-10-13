import { create } from "zustand";

interface UIState {
  // isLivePreviewOpen: boolean;
  // toggleLivePreview: () => void;
  // setLivePreviewOpen: (isOpen: boolean) => void;
  isNavigationBarOpen: boolean;
  toggleCollapsedSidebar: () => void;
  setDrawerNavigationOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isNavigationBarOpen: true,
  // isLivePreviewOpen: false,
  toggleCollapsedSidebar: () =>
    set((state) => ({ isNavigationBarOpen: !state.isNavigationBarOpen })),
  setDrawerNavigationOpen: (isOpen) => {
    set({ isNavigationBarOpen: isOpen });
  },
  // toggleLivePreview: () =>
  //   set((state) => ({ isLivePreviewOpen: !state.isLivePreviewOpen })),
  // setSidebarOpen: (isOpen) => set({ isNavigationBarOpen: isOpen }),
  // setLivePreviewOpen: (isOpen) => set({ isLivePreviewOpen: isOpen }),
}));
