"use client";

import React, { useState, useReducer } from "react";
import Link from "next/link";
import {
  GripVertical,
  Trash,
  MousePointerClick,
  ChartLine,
  Link2,
  Pen,
  CirclePause,
  StretchHorizontal,
  CircleDot,
} from "lucide-react";
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
  display_type,
  total_click,
  isNew,
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

  const toggledisplayType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentDisplayMode = e.currentTarget.dataset.displayMode as
      | "circle"
      | "card";

    if (display_type === currentDisplayMode) return;
    updateLink(id, { display_type: currentDisplayMode });
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
      className={cn(
        `bg-white rounded-xl p-6 border border-neutral-300 relative mb-6`,
        isNew && `opacity-0 animate-show-card`,
      )}
    >
      <IconsModal
        selectedIcon={iconName}
        isOpen={state.isModalOpen}
        onClose={closeIconsModal}
        onSelect={selectIcon}
      />
      <header className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-3">
        <div className="flex items-center">
          <button
            type="button"
            className="cursor-pointer transition-all hover:bg-neutral-300 rounded-lg block p-1.5 text-zinc-500 hover:text-zinc-900"
            ref={handleRef}
          >
            <GripVertical size={18} />
          </button>
          <div className="grid grid-cols-[auto_1fr] gap-x-3 leading-0">
            <button
              className={cn(
                `size-9 bg-gray-100 border border-neutral-300 flex items-center justify-center rounded-lg row-span-2 cursor-pointer relative shadow text-indigo-900 transition-colors`,
                state.isModalOpen && `border-indigo-900`,
              )}
              onClick={openIconsModal}
            >
              {SelectedIcon ? <SelectedIcon size={20} /> : <Link2 size={20} />}
              <span
                className={cn(
                  `w-5 h-5 rounded-full bg-indigo-900 flex items-center justify-center absolute -right-1.5 -bottom-1.5 shadow text-white`,
                  !is_active && `hidden`,
                  state.isModalOpen && `z-30`,
                )}
              >
                <Pen size={11} />
              </span>
            </button>
            <span className="text-sm font-semibold text-zinc-900 leading-5 tracking-[0.28px]">
              {prevProps.title ? prevProps.title : "Nome de exibição"}
            </span>
            <span className="text-xs font-semibold text-zinc-600 leading-5 tracking-[0.6px]">
              {prevProps.url ? prevProps.url : "https://..."}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="p-1 rounded-lg border border-neutral-300 bg-gray-100 flex">
            <button
              data-active={display_type === "card"}
              data-display-mode={"card"}
              data-testid="display-mode-card"
              onClick={toggledisplayType}
              className={`size-8 flex items-center justify-center cursor-pointer rounded-md data-[active=true]:bg-white group`}
            >
              <StretchHorizontal className="size-4.5 text-zinc-600 group-data-[active=true]:text-indigo-900" />
            </button>
            <button
              data-active={display_type === "circle"}
              data-display-mode={"circle"}
              data-testid="display-mode-circle"
              onClick={toggledisplayType}
              className={`size-8 flex items-center justify-center cursor-pointer rounded-md data-[active=true]:bg-white group`}
            >
              <CircleDot className="size-4.5 text-zinc-600 group-data-[active=true]:text-indigo-900" />
            </button>
          </div>
          <button
            type="button"
            data-testid="toggle-link"
            onClick={handleActiveLink}
            className={cn(
              `cursor-pointer w-11 h-6 rounded-full relative `,
              is_active ? `bg-indigo-900` : `bg-zinc-200`,
            )}
          >
            <span
              className={cn(
                `absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform`,
                is_active ? `translate-x-0` : `-translate-x-full`,
              )}
            />
          </button>
          <button
            type="button"
            className="cursor-pointer ml-auto mr-3 text-zinc-600 hover:text-red-600 transition-colors"
            onClick={onDeleteLink}
            data-testid="delete-link"
          >
            <Trash size={20} />
          </button>
        </div>
      </header>
      <section className="flex items-center gap-6 mb-3">
        <div className="flex-1">
          <label className="sortable-item-label" htmlFor={`title-${id}`}>
            Titulo
          </label>
          <input
            className="sortable-item-input"
            type="text"
            name="title"
            id={`title-${id}`}
            value={link.title}
            onChange={handleChange}
            placeholder="Nome de exibição"
          />
        </div>
        <div className="flex-1">
          <label className="sortable-item-label" htmlFor={`url-${id}`}>
            url
          </label>
          <input
            className="sortable-item-input"
            type="text"
            name="url"
            id={`url-${id}`}
            value={link.url}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>
      </section>
      <footer className="pt-3 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center gap-x-1 text-zinc-600 text-xs leading-4">
          {is_active ? (
            <>
              <MousePointerClick className="size-4.5 text-[#37437A]" />
              <span className="text-zinc-900 font-medium">{total_click}</span>
              <span>cliques</span>
            </>
          ) : (
            <>
              <CirclePause className="size-4.5 text-zinc-600" />
              <span className="text-zinc-600">Desativado no perfil</span>
            </>
          )}
        </div>

        <div>
          <Link
            href="#"
            className="text-sm text-indigo-900 fill-indigo-900 flex items-center gap-x-1 font-medium"
          >
            <ChartLine size={18} />
            Ver análise
          </Link>
        </div>
      </footer>
    </div>
  );
}
