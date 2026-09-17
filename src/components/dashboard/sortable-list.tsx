"use client";

import { DragDropProvider } from "@dnd-kit/react";
import type { LinkItem } from "@/lib/definitions";
import SortableListItem from "./sortable-list-item";

const listLinks: Array<LinkItem> = [
  {
    id: 1,
    title: "Instagram",
    url: "http://instagram.com",
    iconName: "Instagram",
    position_at: 1,
    is_active: true,
  },
  {
    id: 2,
    title: "Lindkedin",
    url: "http://lindkedin.com",
    iconName: "LinkedIn",
    position_at: 2,
    is_active: true,
  },
  {
    id: 3,
    title: "Spotfy",
    url: "http://spotfy.com",
    iconName: "Spotify",
    position_at: 3,
    is_active: true,
  },
];

export default function SortableList() {
  return (
    <DragDropProvider>
      {listLinks.map((link, i) => (
        <SortableListItem {...link} key={link.id} position_at={i} />
      ))}
    </DragDropProvider>
  );
}
