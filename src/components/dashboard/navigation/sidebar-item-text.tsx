import { cn } from "@/lib/tw-merge";

export default function SidebarItemText({
  label,
  subClass,
}: {
  label: string;
  subClass?: string | string[];
}) {
  return (
    <span
      className={cn(
        `block text-sm  w-max left-14 px-1 transition-opacity group-hover:group-data-[sidebar=collapsed]/sidebar:text-xs group-data-[sidebar=collapsed]/sidebar:hidden group-hover:group-data-[sidebar=collapsed]/sidebar:block group-data-[sidebar=collapsed]/sidebar:absolute group-data-[sidebar=collapsed]/sidebar:shadow group-data-[sidebar=collapsed]/sidebar:bg-white group-data-[sidebar=collapsed]/sidebar:border border-gray-200 rounded-xl`,
        subClass,
      )}
    >
      {label}
    </span>
  );
}
