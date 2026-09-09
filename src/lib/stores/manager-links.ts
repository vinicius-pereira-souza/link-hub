import { createStore } from "zustand/vanilla";
import { type IconNameTypeKey } from "@/utils/icons";

export type NewLinkObjectType = {
  id: number;
  title: string;
  url: string;
  iconName: IconNameTypeKey;
};

export type ManagerLinkState = {
  isChange: boolean;
  listLink: Array<NewLinkObjectType>;
};

export type ManagerLinkAction = {
  isChangeFn: () => void;
  updateLink: (updatedLink: NewLinkObjectType) => void;
  updateList: (list: Array<NewLinkObjectType>) => void;
  finalizeChanges: () => void;
};

export type ManagerLinkStore = ManagerLinkState & ManagerLinkAction;

export const defaultInitState: ManagerLinkState = {
  isChange: false,
  listLink: [],
};

export const createManagerLinkStore = (
  initState: ManagerLinkState = defaultInitState,
) => {
  return createStore<ManagerLinkStore>()((set) => ({
    ...initState,
    updateLink: (updatedLink) => {
      set((state) => ({
        isChange: true,
        listLink: state.listLink.map((item) =>
          item.id == updatedLink.id ? updatedLink : item,
        ),
      }));
    },
    updateList: (list) => {
      set({ isChange: true, listLink: list });
    },
    isChangeFn: () => {
      set({ isChange: true });
    },
    finalizeChanges: () => {
      set({ isChange: false });
    },
  }));
};
