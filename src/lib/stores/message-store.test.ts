import { createMessageStore } from "./message-store";

describe("message store", () => {
  it(`should initialize with default state values`, () => {
    const store = createMessageStore();

    expect(store.getState().type).toBeUndefined();
    expect(store.getState().message).toBeUndefined();
    expect(store.getState().hasMessage).toBeFalsy();
  });

  it(`must accept changing the state value to contain a message`, () => {
    const store = createMessageStore();

    store.getState().showMessage({
      message: "Message successfully added to the state.",
      type: "success",
    });

    expect(store.getState().type).toBe("success");
    expect(store.getState().message).toBe(
      "Message successfully added to the state.",
    );
    expect(store.getState().hasMessage).toBeTruthy();
  });

  it(`must invert the state value to the initial value`, () => {
    const store = createMessageStore({
      message: "Message successfully added to the state.",
      type: "success",
      hasMessage: true,
    });

    store.getState().hiddenMessage();

    expect(store.getState().type).toBeUndefined();
    expect(store.getState().message).toBeUndefined();
    expect(store.getState().hasMessage).toBeFalsy();
  });
});
