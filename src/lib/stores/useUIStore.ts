import { create } from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  isLivePreviewOpen: boolean;
  toggleSidebar: () => void;
  toggleLivePreview: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setLivePreviewOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isSidebarOpen: true,
  isLivePreviewOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleLivePreview: () =>
    set((state) => ({ isLivePreviewOpen: !state.isLivePreviewOpen })),
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
  setLivePreviewOpen: (isOpen) => set({ isLivePreviewOpen: isOpen }),
}));
