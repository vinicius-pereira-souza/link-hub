type LinkTableType = {
  id: number;
  user_id: string;
  title: string;
  url: string;
  click_amount: number;
  position_at: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type ClickAmountType = Pick<LinkTableType, "click_amount">;

export type TopPerformingLinkRowType = Pick<
  LinkTableType,
  "id" | "title" | "url" | "click_amount"
>;
