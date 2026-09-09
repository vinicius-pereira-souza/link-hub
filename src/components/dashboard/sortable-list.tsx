"use client";

import { DragDropProvider } from "@dnd-kit/react";
import { type NewLinkObjectType } from "@/lib/stores/manager-links";
import SortableListItem from "./sortable-list-item";

const listLinks: Array<NewLinkObjectType> = [
  {
    id: 1,
    title: "Instagram",
    url: "http://instagram.com",
    iconName: "Instagram",
  },
  {
    id: 2,
    title: "Lindkedin",
    url: "http://lindkedin.com",
    iconName: "LinkedIn",
  },
  { id: 3, title: "Spotfy", url: "http://spotfy.com", iconName: "Spotify" },
];

export default function SortableList() {
  return (
    <DragDropProvider>
      {listLinks.map((link, i) => (
        <SortableListItem
          key={link.id}
          id={link.id}
          iconName={link.iconName}
          title={link.title}
          url={link.url}
          index={i}
        />
      ))}
    </DragDropProvider>
  );
}
