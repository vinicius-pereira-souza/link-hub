import { create } from "zustand";

interface UIState {
  // isNavigationBarOpen: boolean;
  // isLivePreviewOpen: boolean;
  // togglecollapsedSidebar: () => void;
  // toggleLivePreview: () => void;
  // setSidebarOpen: (isOpen: boolean) => void;
  // setLivePreviewOpen: (isOpen: boolean) => void;
  isNavigationBarOpen: boolean;
  toggleCollapsedSidebar: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isNavigationBarOpen: true,
  // isLivePreviewOpen: false,
  toggleCollapsedSidebar: () =>
    set((state) => ({ isNavigationBarOpen: !state.isNavigationBarOpen })),
  // toggleLivePreview: () =>
  //   set((state) => ({ isLivePreviewOpen: !state.isLivePreviewOpen })),
  // setSidebarOpen: (isOpen) => set({ isNavigationBarOpen: isOpen }),
  // setLivePreviewOpen: (isOpen) => set({ isLivePreviewOpen: isOpen }),
}));
