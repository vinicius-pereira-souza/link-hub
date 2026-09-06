"use client";

import { GripVertical, ChevronDown, Trash } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/tw-merge";
import React, { useState } from "react";
import IconsModal from "./icons-modal";

export default function AddLink() {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [activateIconSelector, setActivateIconSelector] =
    useState<boolean>(false);
  const [link, setLink] = useState<{ title: string; url: string }>({
    title: "",
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName: string = e.currentTarget.name;
    setLink((prevState) => ({
      ...prevState,
      [inputName]: e.currentTarget.value,
    }));
  };

  const openIconsModal = () => {
    setActivateIconSelector(true);
  };

  const closeIconsModal = () => {
    setActivateIconSelector(false);
  };

  const selectIcon = (iconName: string) => {
    setActivateIconSelector(false);
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-300/30 relative">
      <IconsModal
        onCloseModal={closeIconsModal}
        onSelectIcon={selectIcon}
        isActiveModal={true}
      />
      <div className="flex items-center mb-6">
        <button className="cursor-pointer">
          <GripVertical color="#767680" size={25} />
        </button>
        <button
          className={cn(
            `flex items-center gap-x-3 bg-zinc-200 py-1.5 px-3.5 rounded-lg text-sm cursor-pointer`,
            activateIconSelector
              ? `border-2 border-indigo-900 text-indigo-900 font-bold`
              : `border border-neutral-300 text-black `,
          )}
          onClick={() => openIconsModal()}
        >
          {selectedIcon ? (
            <>
              <DynamicIcon name="camera" color="#312c85" size={20} />
              Instagram
            </>
          ) : (
            "Selecionar icone"
          )}

          <ChevronDown color="#767680" size={20} />
        </button>
        <button className="cursor-pointer ml-auto mr-3">
          <Trash color="#5F5E5E" size={20} />
        </button>
        <button className="cursor-pointer w-11 h-6 rounded-full bg-zinc-200 relative">
          <span className="absolute w-5 h-5 rounded-full bg-white top-0.5 left-0.5" />
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
