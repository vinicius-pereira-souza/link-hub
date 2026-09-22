"use client";

import { type ReactNode, createContext, useState, use } from "react";
import { useStore } from "zustand";
import type { ManagerLinkStore } from "@/lib/stores/manager-links";
import { createManagerLinkStore } from "@/lib/stores/manager-links";

export type ManagerLinksStoreApi = ReturnType<typeof createManagerLinkStore>;

export const ManagerLinksStoreContext = createContext<
  ManagerLinksStoreApi | undefined
>(undefined);

export interface ManagerLinksStoreProviderProps {
  children: ReactNode;
}

export function ManagerLinksStoreProvider({
  children,
}: ManagerLinksStoreProviderProps) {
  const [store] = useState(() => createManagerLinkStore());

  return (
    <ManagerLinksStoreContext.Provider value={store}>
      {children}
    </ManagerLinksStoreContext.Provider>
  );
}

export function useManagerLinksStore<T>(
  selector: (store: ManagerLinkStore) => T,
): T {
  const ctx = use(ManagerLinksStoreContext);

  if (!ctx) {
    throw new Error(
      `useManagerLinksStore must be used within ManagerLinksStoreProvider`,
    );
  }

  return useStore(ctx, selector);
}
