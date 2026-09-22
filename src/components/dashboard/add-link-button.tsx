"use client";

import { useManagerLinksStore } from "@/providers/manager-links-provider";
import type { LinkItem } from "@/lib/definitions";

export default function AddLinkButton() {
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
    };

    onAddLink(emptyLink);
  };

  return (
    <>
      <button
        data-testid="add-link-button"
        type="button"
        className="text-white text-sm font-medium bg-indigo-900 px-6 py-3 rounded-lg cursor-pointer transition-all hover:bg-indigo-700"
        onClick={handleAddLink}
      >
        Adicionar Link
      </button>
    </>
  );
}
