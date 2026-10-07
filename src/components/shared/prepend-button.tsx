"use client";

import { Plus } from "lucide-react";
import { useManagerLinksStore } from "@/providers/manager-links-provider";
import { cn } from "@/lib/tw-merge";
import type { LinkItem } from "@/lib/definitions";

interface PrependButtonProps {
  text: string;
  hasIcon: boolean;
  iconSize?: number;
  subClass?: string | string[];
}

export default function PrependButton({
  text,
  hasIcon,
  iconSize,
  subClass,
}: PrependButtonProps) {
  const onAddLink = useManagerLinksStore((state) => state.addLink);

  const handleAddLink = () => {
    const emptyLink: LinkItem = {
      id: window.crypto.randomUUID(),
      title: "",
      url: "",
      is_active: true,
      isNew: true,
      iconName: "Website",
      position_at: 0,
      total_click: 0,
      display_type: "card",
    };

    onAddLink(emptyLink);
  };

  return (
    <>
      <button
        data-testid="add-link-button"
        type="button"
        className={cn(
          `text-white text-xs md:text-sm font-medium bg-indigo-900 px-6 py-3 rounded-lg cursor-pointer transition-all hover:bg-indigo-900/70`,
          subClass,
        )}
        onClick={handleAddLink}
      >
        {hasIcon && <Plus size={iconSize ?? 18} />} {text}
      </button>
    </>
  );
}
