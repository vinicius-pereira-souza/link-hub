import { render, screen, fireEvent } from "@testing-library/react";
import * as actions from "@/lib/actions";
import ButtonSignOut from "./button-sign-out";

vi.mock("@/lib/actions", () => ({
  signOut: vi.fn(),
}));

describe("Button Sign Out Component", () => {
  it(`should check if the serverAction is being executed when the button is clicked.`, async () => {
    render(<ButtonSignOut />);

    const button = screen.getByTestId("button-sign-out");

    fireEvent.click(button);

    await vi.waitFor(() => {
      expect(actions.signOut).toHaveBeenCalledTimes(1);
    });
  });
});
