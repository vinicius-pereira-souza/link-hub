"use client";

import { type ReactNode, createContext, useState, use } from "react";
import { useStore } from "zustand";
import {
  type MessageStore,
  createMessageStore,
} from "@/lib/stores/message-store";

export type MessageStoreApi = ReturnType<typeof createMessageStore>;

export const MessageStoreContext = createContext<MessageStoreApi | undefined>(
  undefined,
);

export interface MessageStoreProviderProps {
  children: ReactNode;
}

export function MessageStoreProvider({ children }: MessageStoreProviderProps) {
  const [store] = useState(() => createMessageStore());

  return (
    <MessageStoreContext.Provider value={store}>
      {children}
    </MessageStoreContext.Provider>
  );
}

export function useMessageStore<T>(selector: (store: MessageStore) => T): T {
  const ctx = use(MessageStoreContext);

  if (!ctx) {
    throw new Error(`useMessageStore must be used within MessageStoreProvider`);
  }

  return useStore(ctx, selector);
}
