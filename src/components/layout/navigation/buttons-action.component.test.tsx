import { render, screen, fireEvent } from "@testing-library/react";
import { useUIStore } from "@/lib/stores/useUIStore";
import { ToggleSideBar, DrawerButton } from "./buttons-actions";

beforeEach(() => {
  useUIStore.setState({
    isSidebarOpen: false,
  });
});

describe("ToggleSideBar", () => {
  it(`should change the state of isSidebarOpen to true after the ToggleSideBar click`, () => {
    render(<ToggleSideBar />);

    const button = screen.getByTestId("toggle-button-sidebar");

    expect(useUIStore.getState().isSidebarOpen).toBeFalsy();
    fireEvent.click(button);
    expect(useUIStore.getState().isSidebarOpen).toBeTruthy();
  });
});

describe("DrawerButton", () => {
  it(`must set isSidebarOpen to true with action="open"`, () => {
    render(<DrawerButton action="open" />);

    const button = screen.getByTestId("drawer-button-sidebar");

    expect(useUIStore.getState().isSidebarOpen).toBeFalsy();
    fireEvent.click(button);
    expect(useUIStore.getState().isSidebarOpen).toBeTruthy();
  });

  it(`must set isSidebarOpen to false with action="close"`, () => {
    useUIStore.setState({
      isSidebarOpen: true,
    });
    render(<DrawerButton action="close" />);

    const button = screen.getByTestId("drawer-button-sidebar");

    expect(useUIStore.getState().isSidebarOpen).toBeTruthy();
    fireEvent.click(button);
    expect(useUIStore.getState().isSidebarOpen).toBeFalsy();
  });
});
