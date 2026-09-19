"use client";

import React, { useState, useReducer } from "react";
import { GripVertical, ChevronDown, Trash } from "lucide-react";
import { cn } from "@/lib/tw-merge";
import type { Platform } from "@/utils/icons";
import { ICON_BY_PLATFORM } from "@/utils/icons";
import type { LinkItem } from "@/lib/definitions";
import { useSortable } from "@dnd-kit/react/sortable";
import dynamic from "next/dynamic";

const IconsModal = dynamic(() => import("./icon-picker-modal"), {
  ssr: false,
});

type ComponentState = {
  iconName: Platform | undefined;
  isActiveLink: boolean;
  isModalOpen: boolean;
};

type ComponentAction =
  | { type: "SELECT_ICON"; payload: Platform }
  | { type: "SET_TOGGLE_MODAL"; payload: boolean }
  | { type: "SET_ACTIVE_LINK" };

function reducer(state: ComponentState, action: ComponentAction) {
  switch (action.type) {
    case "SET_TOGGLE_MODAL":
      return { ...state, isModalOpen: action.payload };
    case "SELECT_ICON":
      return { ...state, iconName: action.payload, isModalOpen: false };
    case "SET_ACTIVE_LINK":
      return { ...state, isActiveLink: !state.isActiveLink };
    default:
      return state;
  }
}

export default function SortableListItem({
  id,
  title,
  url,
  is_active,
  iconName,
  position_at,
}: LinkItem) {
  const { ref, handleRef } = useSortable({ id, index: position_at });
  const [state, dispatch] = useReducer(reducer, {
    iconName: iconName ?? undefined,
    isModalOpen: false,
    isActiveLink: is_active,
  });

  const SelectedIcon = state.iconName ? ICON_BY_PLATFORM[state.iconName] : null;

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
    const isModalOpen = state.isModalOpen;

    if (isModalOpen) {
      dispatch({ type: "SET_TOGGLE_MODAL", payload: false });
    } else {
      dispatch({ type: "SET_TOGGLE_MODAL", payload: true });
    }
  };

  const closeIconsModal = () => {
    dispatch({ type: "SET_TOGGLE_MODAL", payload: false });
  };

  const selectIcon = (iconNameOption: Platform) => {
    dispatch({ type: "SELECT_ICON", payload: iconNameOption });
  };

  const handleActiveLink = () => {
    dispatch({ type: "SET_ACTIVE_LINK" });
  };

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl p-6 border border-neutral-300/30 relative mb-2.5"
    >
      <IconsModal
        selectedIcon={state.iconName}
        isOpen={state.isModalOpen}
        onClose={closeIconsModal}
        onSelect={selectIcon}
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
          onClick={openIconsModal}
        >
          {SelectedIcon ? (
            <>
              <SelectedIcon color="#312c85" size={20} />
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
          onClick={handleActiveLink}
          className={cn(
            `cursor-pointer w-11 h-6 rounded-full relative`,
            state.isActiveLink ? `bg-indigo-900` : `bg-zinc-200`,
          )}
        >
          <span
            className={cn(
              `absolute w-5 h-5 rounded-full bg-white top-0.5`,
              state.isActiveLink ? `right-0.5` : `left-0.5`,
            )}
          />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <label
            className="text-xs uppercase font-semibold leading-4 tracking-[0.6px] mb-2 block"
            htmlFor={`title-${id}`}
          >
            Titulo
          </label>
          <input
            className="border border-neutral-300 p-1 text-black text-base block"
            type="text"
            name="title"
            id={`title-${id}`}
            value={link.title ?? ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="text-xs uppercase font-semibold leading-4 tracking-[0.6px] mb-2 block"
            htmlFor={`url-${id}`}
          >
            url
          </label>
          <input
            className="border border-neutral-300 p-1 text-black text-base block"
            type="text"
            name="url"
            id={`url-${id}`}
            value={link.url ?? ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
