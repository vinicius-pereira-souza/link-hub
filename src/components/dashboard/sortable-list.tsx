"use client";

import { useEffect } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import type { LinkItem } from "@/lib/definitions";
import SortableListItem from "./sortable-list-item";
import { useManagerLinksStore } from "@/providers/manager-links-provider";

export default function SortableList({ links }: { links: LinkItem[] }) {
  const { setLinks, links: linksState } = useManagerLinksStore(
    (state) => state,
  );

  useEffect(() => {
    if (links) {
      setLinks([...links]);
    } else {
      setLinks([]);
    }
  }, [links, setLinks]);

  return (
    <DragDropProvider>
      {linksState.map((link, i) => (
        <SortableListItem {...link} key={link.id} position_at={i} />
      ))}
    </DragDropProvider>
  );
}
