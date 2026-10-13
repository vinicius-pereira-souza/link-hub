import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigationStore } from "@/lib/stores/useNavigationStore";
import { ToggleButtonColapseSideBar, DrawerButton } from "./buttons-actions";

beforeEach(() => {
  useNavigationStore.setState({
    IsNavigationDrawerOpen: false,
    IsNavigationSidebarCollapsed: false,
  });
});

describe("ToggleButtonColapseSideBar", () => {
  it(`should set IsNavigationSidebarCollapsed to true on click`, () => {
    render(<ToggleButtonColapseSideBar />);

    const button = screen.getByTestId("toggle-button-sidebar");

    expect(
      useNavigationStore.getState().IsNavigationSidebarCollapsed,
    ).toBeFalsy();
    fireEvent.click(button);
    expect(
      useNavigationStore.getState().IsNavigationSidebarCollapsed,
    ).toBeTruthy();
  });
});

describe("DrawerButton", () => {
  it(`must set IsNavigationDrawerOpen to true with action="open"`, () => {
    render(<DrawerButton action="open" />);

    const button = screen.getByTestId("drawer-button-sidebar");

    expect(useNavigationStore.getState().IsNavigationDrawerOpen).toBeFalsy();
    fireEvent.click(button);
    expect(useNavigationStore.getState().IsNavigationDrawerOpen).toBeTruthy();
  });

  it(`must set IsNavigationDrawerOpen to false with action="close"`, () => {
    useNavigationStore.setState({
      IsNavigationDrawerOpen: true,
    });
    render(<DrawerButton action="close" />);

    const button = screen.getByTestId("drawer-button-sidebar");

    expect(useNavigationStore.getState().IsNavigationDrawerOpen).toBeTruthy();
    fireEvent.click(button);
    expect(useNavigationStore.getState().IsNavigationDrawerOpen).toBeFalsy();
  });
});
