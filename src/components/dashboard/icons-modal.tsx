"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { X, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/tw-merge";
import {
  type IconNameTypeKey,
  type IconCurrentNameTypeValue,
  IconNameObject,
  iconsNameList,
} from "@/utils/icons";

interface ModalProps {
  seletectedIcon: IconNameTypeKey | undefined;
  onCloseModal: () => void;
  onSelectIcon: (iconName: IconNameTypeKey) => void;
  isActiveModal: boolean;
}

export default function IconsModal({
  seletectedIcon,
  onCloseModal,
  onSelectIcon,
  isActiveModal,
}: ModalProps) {
  const [listIcon, setListIcon] = useState<IconNameTypeKey[]>(iconsNameList);
  const [search, setSearch] = useState<string>("");

  if (!isActiveModal) return null;

  const handleIconSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setSearch(currentValue);

    if (!currentValue.trim()) {
      setListIcon(iconsNameList as IconNameTypeKey[]);
      return;
    }

    const filteredIcons = (iconsNameList as IconNameTypeKey[]).filter((name) =>
      name.toLowerCase().includes(currentValue.toLowerCase()),
    );

    setListIcon(filteredIcons);
  };

  return (
    <div
      data-testid="modal-options-icon"
      className="bg-white p-6 rounded-2xl absolute z-10 shadow top-16 w-93.75"
    >
      <div className=" grid grid-cols-[1fr_auto] items-center mb-4 w-full">
        <label
          htmlFor="search-icon"
          className="text-zinc-900 font-bold text-sm tracking-wide leading-5 block"
        >
          Selecionar Icone
        </label>
        <button className="cursor-pointer" onClick={() => onCloseModal()}>
          <X color="#767680" size={20} />
        </button>
      </div>
      <div className="w-full relative">
        <input
          type="text"
          name="search-icon"
          id="search-icon"
          placeholder="Buscar icone..."
          className=" pr-3 pl-8 rounded-lg bg-gray-100 border border-neutral-300 h-8 text-sm text-neutral-700 active:border-0 block w-full"
          onChange={handleIconSearch}
          value={search}
        />
        <Search
          size={16}
          color="#525252"
          style={{
            position: "absolute",
            top: "8px",
            left: "10px",
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-4 h-32  overflow-y-auto">
        {listIcon.length > 0 ? (
          listIcon.map((iconObjectKey) => (
            <IconButton
              seletectedIcon={seletectedIcon}
              key={iconObjectKey}
              iconName={iconObjectKey}
              onSelectIcon={onSelectIcon}
            />
          ))
        ) : (
          <span className="block text-xs text-zinc-600 text-center col-span-full">
            Nenhum icone encontrado.
          </span>
        )}
      </div>
    </div>
  );
}

interface IconButtonProps {
  iconName: IconNameTypeKey;
  seletectedIcon: IconNameTypeKey | undefined;
  onSelectIcon: (iconName: IconNameTypeKey) => void;
}

function IconButton({
  iconName,
  seletectedIcon,
  onSelectIcon,
}: IconButtonProps) {
  const icon: IconCurrentNameTypeValue = IconNameObject[iconName];

  const isIconSelected = seletectedIcon && seletectedIcon === iconName;

  return (
    <button
      onClick={() => onSelectIcon(iconName)}
      className={cn(
        `flex flex-col items-center justify-center gap-1 text-xs leading-4 p-2.5 rounded-xl transition-all cursor-pointer hover:bg-indigo-900/10`,
        isIconSelected
          ? `text-indigo-900 font-semibold border-2 border-indigo-900 bg-indigo-900/10`
          : `text-zinc-600`,
      )}
    >
      <DynamicIcon
        name={icon}
        size={20}
        color={isIconSelected ? "#312c85" : "#52525c"}
      />{" "}
      {iconName}
    </button>
  );
}
