import { createStore } from "zustand/vanilla";
import type { LinkItem } from "@/lib/definitions";

export type ManagerLinkState = {
  hasChanges: boolean;
  linksRemoved: Array<string | number>;
  links: LinkItem[];
};

export type ManagerLinkActions = {
  addLink: (link: LinkItem) => void;
  updateLink: (updatedLink: Partial<LinkItem>) => void;
  deleteLink: (linkId: string | number) => void;
  setLinks: (links: LinkItem[]) => void;
};

export type ManagerLinkStore = ManagerLinkState & ManagerLinkActions;

export const defaultInitState: ManagerLinkState = {
  hasChanges: false,
  linksRemoved: [],
  links: [],
};

export const createManagerLinkStore = (
  initState: ManagerLinkState = defaultInitState,
) => {
  return createStore<ManagerLinkStore>()((set) => ({
    ...initState,
    addLink: (link) => {
      set((state) => ({ links: [link, ...state.links], hasChanges: true }));
    },
    updateLink: (updatedLink) => {
      set((state) => ({
        links: state.links.map((link) =>
          link.id === updatedLink.id ? { ...link, ...updatedLink } : link,
        ),
        hasChanges: true,
      }));
    },
    deleteLink: (linkId) => {
      set((state) => ({
        links: [...state.links].filter((link) => link.id !== linkId),
        linksRemoved: [...state.linksRemoved, linkId],
      }));
    },
    setLinks: (links) => {
      set({ links: links });
    },
  }));
};
