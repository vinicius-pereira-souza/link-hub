function TotalClicksCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-300/30 animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-4 w-28 bg-neutral-200 rounded" />
        <div className="w-6 h-6 rounded-md bg-neutral-200" />
      </div>
      <div className="h-12 w-40 bg-neutral-200 rounded-lg mt-12.5" />
    </div>
  );
}

function TopPerformingLinkCardSkeleton() {
  return (
    <div className="bg-linear-to-r from-indigo-900/90 to-slate-600/90 rounded-xl p-6 pb-3 border border-neutral-300/30 animate-pulse text-white">
      <div className="flex items-center justify-between mb-3 leading-5">
        <div className="h-4 w-44 bg-white/20 rounded" />
        <div className="w-5 h-5 rounded-full bg-white/20" />
      </div>
      <div className="h-8 w-3/4 bg-white/20 rounded-md mb-1" />
      <div className="h-3 w-1/2 bg-white/10 rounded mb-3" />
      <div className="flex items-center justify-between">
        <div className="h-4 w-36 bg-white/20 rounded" />
        <div className="w-36 h-8 rounded-full bg-white" />
      </div>
    </div>
  );
}

export function LinkMetricsOverviewSkeleton() {
  return (
    <section className="grid grid-cols-[310px_1fr] gap-6 my-12">
      <TotalClicksCardSkeleton />
      <TopPerformingLinkCardSkeleton />
    </section>
  );
}

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
