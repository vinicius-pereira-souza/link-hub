import { Platform } from "@/utils/icons";
export interface LinkRow {
  id: number;
  user_id: string;
  title: string;
  url: string;
  total_click: number;
  display_type: "card" | "circle";
  position_at: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface LinkItem extends Pick<
  LinkRow,
  "title" | "url" | "position_at" | "is_active" | "display_type" | "total_click"
> {
  id: string | number;
  iconName: Platform;
  isNew?: boolean;
}
