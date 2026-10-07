import { render, screen, fireEvent, act } from "@testing-library/react";
import { MessageStoreContext } from "@/providers/message-store-provider";
import { createMessageStore } from "@/lib/stores/message-store";
import FlashMessage from "./flash-message";

describe("Flash Integration Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it(`render the flash message correctly`, () => {
    const testStore = createMessageStore({
      type: "success",
      message: "flash message example",
      hasMessage: true,
    });

    render(
      <MessageStoreContext.Provider value={testStore}>
        <FlashMessage />
      </MessageStoreContext.Provider>,
    );

    const displayMessageCard = screen.getByTestId("flash-message-card");
    const messageCard = screen.getByText(/flash message example/);

    expect(displayMessageCard).toBeInTheDocument();
    expect(messageCard).toBeInTheDocument();
  });

  it(`remove the message card after 3 seconds.`, () => {
    const testStore = createMessageStore({
      type: "success",
      message: "flash message example",
      hasMessage: true,
    });

    render(
      <MessageStoreContext.Provider value={testStore}>
        <FlashMessage />
      </MessageStoreContext.Provider>,
    );

    const displayMessageCard = screen.getByTestId("flash-message-card");
    expect(displayMessageCard).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(testStore.getState().hasMessage).toBeFalsy();
    expect(displayMessageCard).not.toBeVisible();
  });

  it(`remove the message card after clicking the button`, () => {
    const testStore = createMessageStore({
      type: "success",
      message: "flash message example",
      hasMessage: true,
    });

    render(
      <MessageStoreContext.Provider value={testStore}>
        <FlashMessage />
      </MessageStoreContext.Provider>,
    );

    const displayMessageCard = screen.getByTestId("flash-message-card");
    expect(displayMessageCard).toBeInTheDocument();

    const buttonHiddenMessage = screen.getByTestId("button-hidden-message");
    fireEvent.click(buttonHiddenMessage);
    expect(testStore.getState().hasMessage).toBeFalsy();
    expect(displayMessageCard).not.toBeInTheDocument();
  });
});
