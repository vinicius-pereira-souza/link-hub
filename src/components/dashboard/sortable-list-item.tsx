"use client";

import { GripVertical, ChevronDown, Trash } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/tw-merge";
import React, { useState, useReducer } from "react";
import IconsModal from "./icons-modal";
import { type IconNameTypeKey, IconNameObject } from "@/utils/icons";
import { type NewLinkObjectType } from "@/lib/stores/manager-links";
import { useSortable } from "@dnd-kit/react/sortable";

type ComponentState = {
  iconName: IconNameTypeKey | undefined;
  isActive: boolean;
  isModalOpen: boolean;
};

type ComponentAction =
  | { type: "SELECT_ICON"; payload: IconNameTypeKey }
  | { type: "SET_ACTIVE_LINK"; payload: boolean }
  | { type: "SET_TOGGLE_MODAL"; payload: boolean };

function reducer(state: ComponentState, action: ComponentAction) {
  switch (action.type) {
    case "SET_TOGGLE_MODAL":
      return { ...state, isModalOpen: action.payload };
    case "SELECT_ICON":
      return { ...state, iconName: action.payload, isModalOpen: false };
    case "SET_ACTIVE_LINK":
      return { ...state, isActiveLink: action.payload };
    default:
      return state;
  }
}

interface SortableListItemProps extends Partial<NewLinkObjectType> {
  id: number;
  index: number;
}

export default function SortableListItem({
  id,
  title,
  url,
  iconName,
  index,
}: SortableListItemProps) {
  const { ref, handleRef } = useSortable({ id, index });

  const [state, dispatch] = useReducer(reducer, {
    iconName: iconName ?? undefined,
    isModalOpen: false,
    isActive: true,
  });

  const [link, setLink] = useState<{ title: string; url: string }>({
    title: title ?? "",
    url: url ?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLink((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const openIconsModal = () => {
    dispatch({ type: "SET_TOGGLE_MODAL", payload: true });
  };

  const closeIconsModal = () => {
    dispatch({ type: "SET_TOGGLE_MODAL", payload: false });
  };

  const selectIcon = (iconNameOption: IconNameTypeKey) => {
    dispatch({ type: "SELECT_ICON", payload: iconNameOption });
  };

  const handleActiveLink = () => {
    const isActive = !state.isActive;
    dispatch({ type: "SET_ACTIVE_LINK", payload: isActive });
  };

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl p-6 border border-neutral-300/30 relative mb-2.5"
    >
      <IconsModal
        seletectedIcon={state.iconName}
        isActiveModal={state.isModalOpen}
        onCloseModal={closeIconsModal}
        onSelectIcon={selectIcon}
      />
      <div className="flex items-center mb-6">
        <button
          className="cursor-pointer transition-all hover:bg-neutral-300 rounded-lg block p-1.5 mr-3.5"
          ref={handleRef}
        >
          <GripVertical color="#767680" size={18} />
        </button>
        <button
          className={cn(
            `flex items-center gap-x-3 bg-zinc-200 py-1.5 px-3.5 rounded-lg text-sm cursor-pointer`,
            state.isModalOpen
              ? `border-2 border-indigo-900 text-indigo-900`
              : `border border-neutral-300 text-black `,
          )}
          onClick={() => openIconsModal()}
        >
          {state.iconName ? (
            <>
              <DynamicIcon
                name={IconNameObject[state.iconName]}
                color="#312c85"
                size={20}
              />
              {state.iconName}
            </>
          ) : (
            "Selecionar icone"
          )}

          <ChevronDown color="#767680" size={20} />
        </button>
        <button className="cursor-pointer ml-auto mr-3">
          <Trash color="#5F5E5E" size={20} />
        </button>
        <button
          onClick={() => handleActiveLink()}
          className={cn(
            `cursor-pointer w-11 h-6 rounded-full  relative`,
            state.isActive ? `bg-indigo-900` : `bg-zinc-200`,
          )}
        >
          <span
            className={cn(
              `absolute w-5 h-5 rounded-full bg-white top-0.5`,
              state.isActive ? `right-0.5` : `left-0.5`,
            )}
          />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <label
            className="text-xs uppercase font-semibold leading-4 tracking-[0.6px] mb-2 block"
            htmlFor="title"
          >
            Titulo
          </label>
          <input
            className="border border-neutral-300 p-1 text-black text-base block"
            type="text"
            name="title"
            id="title"
            value={link.title ?? ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="text-xs uppercase font-semibold leading-4 tracking-[0.6px] mb-2 block"
            htmlFor="url"
          >
            url
          </label>
          <input
            className="border border-neutral-300 p-1 text-black text-base block"
            type="text"
            name="url"
            id="url"
            value={link.url ?? ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
