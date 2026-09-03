type LinkTableType = {
  id: number;
  user_id: string;
  title: string;
  url: string;
  total_click: number;
  position_at: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type ClickAmountType = Pick<LinkTableType, "total_click">;

export type TopPerformingLinkRowType = Pick<
  LinkTableType,
  "id" | "title" | "url" | "total_click"
>;
