import { createStore } from "zustand/vanilla";

export type MessageState = {
  type: "success" | "erro" | "tip" | undefined;
  message: string | undefined;
  hasMessage: boolean;
};
export type MesssageActions = {
  showMessage: (newMessage: Pick<MessageState, "message" | "type">) => void;
  hiddenMessage: () => void;
};
export type MessageStore = MessageState & MesssageActions;
export const defaultInitState: MessageState = {
  type: undefined,
  message: undefined,
  hasMessage: false,
};

export const createMessageStore = (
  initState: MessageState = defaultInitState,
) => {
  return createStore<MessageStore>()((set) => ({
    ...initState,
    showMessage: (newMessage: Pick<MessageState, "message" | "type">) =>
      set({
        type: newMessage.type,
        message: newMessage.message,
        hasMessage: true,
      }),
    hiddenMessage: () =>
      set({ type: undefined, message: undefined, hasMessage: false }),
  }));
};
