"use client";

import { useEffect } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { isSortable } from "@dnd-kit/react/sortable";
import type { LinkItem } from "@/lib/definitions";
import SortableListItem from "./sortable-list-item";
import { useManagerLinksStore } from "@/providers/manager-links-provider";
import reorderArray from "@/utils/reorderArray";

export default function SortableList({ links }: { links: LinkItem[] }) {
  const linksState = useManagerLinksStore((state) => state.links);
  const setLinks = useManagerLinksStore((state) => state.setLinks);
  const reorderLinks = useManagerLinksStore((state) => state.reorderLinks);

  useEffect(() => {
    if (links && links.length > 0) {
      setLinks(links);
    }
  }, [links, setLinks]);

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;
        const { source, target } = event.operation;

        if (
          isSortable(source) &&
          target &&
          source.initialIndex !== source.index
        ) {
          const { initialIndex, index } = source;

          const activeId = linksState[initialIndex]?.id;
          const overId = linksState[index]?.id;

          if (!activeId || !overId) return;

          const newArrayLinks = reorderArray(linksState, activeId, overId);
          reorderLinks(newArrayLinks);
        }
      }}
    >
      {linksState.map((link, i) => (
        <SortableListItem {...link} key={link.id} position_at={i} />
      ))}
    </DragDropProvider>
  );
}
