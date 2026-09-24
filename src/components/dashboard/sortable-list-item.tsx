"use client";

import React, { useState, useReducer } from "react";
import { GripVertical, ChevronDown, Trash } from "lucide-react";
import { useManagerLinksStore } from "@/providers/manager-links-provider";
import { cn } from "@/lib/tw-merge";
import type { Platform } from "@/utils/icons";
import { ICON_BY_PLATFORM } from "@/utils/icons";
import type { LinkItem } from "@/lib/definitions";
import { useSortable } from "@dnd-kit/react/sortable";
import { useDebouncedCallback } from "use-debounce";
import dynamic from "next/dynamic";

const IconsModal = dynamic(() => import("./icon-picker-modal"), {
  ssr: false,
});

type ComponentState = {
  isModalOpen: boolean;
};

type ComponentAction = { type: "SET_TOGGLE_MODAL"; payload: boolean };

function reducer(state: ComponentState, action: ComponentAction) {
  switch (action.type) {
    case "SET_TOGGLE_MODAL":
      return { ...state, isModalOpen: action.payload };
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
  const { deleteLink, updateLink } = useManagerLinksStore((state) => state);
  const { ref, handleRef } = useSortable({ id, index: position_at });

  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
  });

  const [link, setLink] = useState({
    title: title ?? "",
    url: url ?? "",
  });
  const [prevProps, setPrevProps] = useState({ title, url });

  if (prevProps.title !== title || prevProps.url !== url) {
    setPrevProps({ title, url });
    setLink({
      title: title ?? "",
      url: url ?? "",
    });
  }

  const SelectedIcon = iconName ? ICON_BY_PLATFORM[iconName] : null;

  const autoUpdateDebounced = useDebouncedCallback(
    (name: string, value: string) => {
      updateLink(id, { [name]: value });
    },
    800,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLink((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    autoUpdateDebounced(name, value);
  };

  const openIconsModal = () => {
    dispatch({ type: "SET_TOGGLE_MODAL", payload: !state.isModalOpen });
  };

  const closeIconsModal = () => {
    dispatch({ type: "SET_TOGGLE_MODAL", payload: false });
  };

  const selectIcon = (iconNameOption: Platform) => {
    updateLink(id, { iconName: iconNameOption });
    closeIconsModal();
  };

  const handleActiveLink = () => {
    updateLink(id, { is_active: !is_active });
  };

  const onDeleteLink = () => {
    deleteLink(id);
  };

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl p-6 border border-neutral-300/30 relative mb-2.5"
    >
      <IconsModal
        selectedIcon={iconName}
        isOpen={state.isModalOpen}
        onClose={closeIconsModal}
        onSelect={selectIcon}
      />

      <div className="flex items-center mb-6">
        <button
          type="button"
          className="cursor-pointer transition-all hover:bg-neutral-300 rounded-lg block p-1.5 mr-3.5"
          ref={handleRef}
        >
          <GripVertical color="#767680" size={18} />
        </button>

        <button
          type="button"
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
              {iconName}
            </>
          ) : (
            "Selecionar icone"
          )}

          <ChevronDown color="#767680" size={20} />
        </button>

        <button
          type="button"
          className="cursor-pointer ml-auto mr-3"
          onClick={onDeleteLink}
          data-testid="delete-link"
        >
          <Trash color="#5F5E5E" size={20} />
        </button>

        <button
          type="button"
          data-testid="toggle-link"
          onClick={handleActiveLink}
          className={cn(
            `cursor-pointer w-11 h-6 rounded-full relative`,
            is_active ? `bg-indigo-900` : `bg-zinc-200`,
          )}
        >
          <span
            className={cn(
              `absolute w-5 h-5 rounded-full bg-white top-0.5`,
              is_active ? `right-0.5` : `left-0.5`,
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
            value={link.title}
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
            value={link.url}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
