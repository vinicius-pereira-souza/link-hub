export function LinkListSkeleton() {
  return (
    <ul>
      {Array.from({ length: 3 }).map((_, index) => (
        <LinkListItemSkeleton key={index} />
      ))}
    </ul>
  );
}

export function LinkListItemSkeleton() {
  return (
    <li className="p-6 bg-white border border-neutral-300 rounded-xl grid grid-cols-[auto_1fr_auto] items-center gap-6 mb-2 animate-pulse">
      <div className="w-12 h-12 rounded-lg bg-neutral-200" />

      <div className="space-y-2">
        <div className="h-6 w-48 bg-neutral-200 rounded" />
        <div className="h-3 w-36 bg-neutral-200 rounded" />
      </div>

      <div className="text-end flex items-center gap-9">
        <div className="space-y-1">
          <div className="h-4 w-10 bg-neutral-200 rounded ml-auto" />
          <div className="h-3 w-12 bg-neutral-200 rounded ml-auto" />
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-200" />
      </div>
    </li>
  );
}
