import { useNavigationStore } from "./useNavigationStore";

describe("useNavigationStore", () => {
  beforeEach(() => {
    useNavigationStore.setState({
      IsNavigationDrawerOpen: false,
      IsNavigationSidebarCollapsed: false,
    });
  });

  it("must correctly toggle the state of the side navigation bar.", () => {
    expect(
      useNavigationStore.getState().IsNavigationSidebarCollapsed,
    ).toBeFalsy();
    useNavigationStore.getState().toggleCollapsedSidebar();
    expect(
      useNavigationStore.getState().IsNavigationSidebarCollapsed,
    ).toBeTruthy();
  });

  it(`must correctly set the navigation drawer state to true.`, () => {
    expect(useNavigationStore.getState().IsNavigationDrawerOpen).toBeFalsy();
    useNavigationStore.getState().setDrawerNavigationOpen(true);
    expect(useNavigationStore.getState().IsNavigationDrawerOpen).toBeTruthy();
  });

  it(`must correctly set the navigation drawer state to false.`, () => {
    useNavigationStore.setState({ IsNavigationDrawerOpen: true });

    useNavigationStore.getState().setDrawerNavigationOpen(false);
    expect(useNavigationStore.getState().IsNavigationDrawerOpen).toBeFalsy();
  });
});
