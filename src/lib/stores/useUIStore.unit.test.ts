import { useUIStore } from "./useUIStore";

describe("useUIStore", () => {
  beforeEach(() => {
    useUIStore.setState({
      isSidebarOpen: true,
      isLivePreviewOpen: false,
    });
  });

  it("should correctly toggle the sidebar state.", () => {
    expect(useUIStore.getState().isSidebarOpen).toBeTruthy();
    useUIStore.getState().toggleSidebar();
    expect(useUIStore.getState().isSidebarOpen).toBeFalsy();
  });

  it("must correctly toggle the Live Preview sheet state", () => {
    expect(useUIStore.getState().isLivePreviewOpen).toBeFalsy();
    useUIStore.getState().toggleLivePreview();
    expect(useUIStore.getState().isLivePreviewOpen).toBeTruthy();
  });

  it(`must explicitly define visibility through the actions set.`, () => {
    useUIStore.getState().setLivePreviewOpen(true);
    useUIStore.getState().setSidebarOpen(false);

    expect(useUIStore.getState().isLivePreviewOpen).toBeTruthy();
    expect(useUIStore.getState().isSidebarOpen).toBeFalsy();
  });
});
