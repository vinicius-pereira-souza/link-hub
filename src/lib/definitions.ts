import { Platform } from "@/utils/icons";
export interface LinkRow {
  id: number;
  user_id: string;
  title: string;
  url: string;
  total_click: number;
  position_at: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface LinkItem extends Pick<
  LinkRow,
  "title" | "url" | "position_at" | "is_active"
> {
  id?: string | number;
  iconName: Platform;
  isNew?: boolean;
}
