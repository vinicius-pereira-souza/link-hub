"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { X, Search } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  onCloseModal: () => void;
  onSelectIcon: (iconName: string) => void;
  isActiveModal: boolean;
}

type IconNameType = keyof typeof IconNameObject;

const IconNameObject = {
  Instagram: "camera",
  YouTube: "play",
  TikTok: "music-2",
  LinkedIn: "briefcase",
  GitHub: "code",
  Spotify: "audio-lines",
  Twitter: "x",
  Discord: "messages-square",
  Website: "globe",
  Email: "mail",
  Phone: "phone",
  PodCast: "mic",
  Store: "shopping-bag",
  Dribble: "paintbrush",
} as const;

type IconName = keyof typeof IconNameObject;

const iconsNameList = Object.keys(IconNameObject) as IconName[];

export default function IconsModal({
  onCloseModal,
  onSelectIcon,
  isActiveModal,
}: ModalProps) {
  const [listIcon, setListIcon] = useState<IconNameType[]>(iconsNameList);
  const [search, setSearch] = useState<string>("");

  if (!isActiveModal) return null;

  const handleIconSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setSearch(currentValue);

    if (!currentValue.trim()) {
      setListIcon(iconsNameList as IconNameType[]);
      return;
    }

    const filteredIcons = (iconsNameList as IconNameType[]).filter((name) =>
      name.toLowerCase().includes(currentValue.toLowerCase()),
    );

    setListIcon(filteredIcons);
  };

  return (
    <div className="bg-white p-6 rounded-2xl absolute z-10 shadow top-16 w-93.75">
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
  iconName: IconNameType;
  onSelectIcon: (iconName: string) => void;
}

type IconCurrentName = (typeof IconNameObject)[keyof typeof IconNameObject];

function IconButton({ iconName, onSelectIcon }: IconButtonProps) {
  const icon: IconCurrentName = IconNameObject[iconName];

  return (
    <button
      onClick={() => onSelectIcon(iconName)}
      className="flex flex-col items-center justify-center gap-1 text-xs leading-4 p-2.5 rounded-xl transition-all hover:bg-indigo-900/10 cursor-pointer text-zinc-600"
    >
      <DynamicIcon name={icon} size={20} color="#5F5E5E" /> {iconName}
    </button>
  );
}
