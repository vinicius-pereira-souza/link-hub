"use client";

import { cn } from "@/lib/tw-merge";
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput({
  placeholder,
  subClass,
}: {
  placeholder: string;
  subClass?: string | string[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={`relative min-w-max ml-auto`}>
      <Search className="size-4 text-slate-400 absolute top-2/4 -translate-y-2/4 left-2.5" />
      <input
        className={cn(
          `w-full block md:h-7.5 h-8 text-sm font-normal text-neutral-700 active:border-0 placeholder:text-slate-400 pr-3 pl-8 rounded-lg bg-slate-50 border border-slate-200 outline-0 focus:border-indigo-900 transition-colors`,
          subClass,
        )}
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.currentTarget.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
