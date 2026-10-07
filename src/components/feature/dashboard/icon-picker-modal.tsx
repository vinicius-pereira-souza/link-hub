"use client";

import { X, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/tw-merge";
import type { Platform } from "@/utils/icons";
import { ICON_BY_PLATFORM } from "@/utils/icons";

interface IconPickerModalProps {
  isOpen: boolean;
  selectedIcon?: Platform;
  onClose: () => void;
  onSelect: (iconName: Platform) => void;
}

export default function IconPickerModal({
  selectedIcon,
  isOpen,
  onClose,
  onSelect,
}: IconPickerModalProps) {
  const iconsPlatform = Object.keys(ICON_BY_PLATFORM) as Platform[];

  const [listIcon, setListIcon] = useState<Platform[]>(iconsPlatform);
  const [search, setSearch] = useState<string>("");

  if (!isOpen) return null;

  const handleIconSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setSearch(currentValue);

    if (!currentValue.trim()) {
      setListIcon(iconsPlatform);
      return;
    }

    const filteredIcons = iconsPlatform.filter((name) =>
      name.toLowerCase().includes(currentValue.toLowerCase()),
    );

    setListIcon(filteredIcons);
  };

  return (
    <div
      data-testid="icon-picker-modal"
      className="bg-white p-6 rounded-2xl absolute z-10 shadow top-16 w-93.75"
    >
      <div className="grid grid-cols-[1fr_auto] items-center mb-4 w-full">
        <label
          htmlFor="search-icon"
          className="text-zinc-900 font-bold text-sm tracking-wide leading-5 block"
        >
          Selecionar Icone
        </label>
        <button
          data-testid="modal-close-button"
          className="cursor-pointer"
          onClick={() => onClose()}
        >
          <X color="#767680" size={20} />
        </button>
      </div>
      <div className="w-full relative">
        <input
          type="text"
          name="search-icon"
          id="search-icon"
          placeholder="Buscar icone..."
          className="pr-3 pl-8 rounded-lg bg-gray-100 border border-neutral-300 h-8 text-sm text-neutral-700 active:border-0 block w-full"
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
      <div className="grid grid-cols-4 gap-1 mt-4 h-32 overflow-y-auto">
        {listIcon.length > 0 ? (
          listIcon.map((iconPlatform) => (
            <IconPickerTrigger
              selectedIcon={selectedIcon}
              key={iconPlatform}
              iconName={iconPlatform}
              onSelect={onSelect}
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

interface IconPickerTriggerProps {
  iconName: Platform;
  selectedIcon?: Platform;
  onSelect: (iconName: Platform) => void;
}

function IconPickerTrigger({
  iconName,
  selectedIcon,
  onSelect,
}: IconPickerTriggerProps) {
  const IconComponent = ICON_BY_PLATFORM[iconName];

  const isIconSelected = selectedIcon && selectedIcon === iconName;

  return (
    <button
      data-testid={`icon-picker-trigger-${iconName}`}
      onClick={() => onSelect(iconName)}
      className={cn(
        `flex flex-col items-center justify-center gap-1 text-xs leading-4 p-2.5 rounded-xl transition-all cursor-pointer hover:bg-indigo-900/10`,
        isIconSelected
          ? `text-indigo-900 font-semibold border-2 border-indigo-900 bg-indigo-900/10`
          : `text-zinc-600`,
      )}
    >
      {IconComponent && (
        <IconComponent
          size={20}
          color={isIconSelected ? "#312c85" : "#52525c"}
        />
      )}
      {iconName}
    </button>
  );
}
