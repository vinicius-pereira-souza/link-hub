"use client";

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput({ placeholder }: { placeholder: string }) {
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
    <div
      className={`flex items-center gap-4 px-3 rounded-full bg-gray-100 border border-neutral-300`}
    >
      <Search size={16} color="#525252" />
      <input
        className="block h-8 text-sm text-neutral-700 active:border-0"
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.currentTarget.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
