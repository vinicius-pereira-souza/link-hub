"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/tw-merge";

interface PropsLink {
  href: string;
  placeholder: string;
}

const publicLinks: PropsLink[] = [
  { href: "/", placeholder: "Discover" },
  { href: "/pricing", placeholder: "Pricing" },
  { href: "/guia", placeholder: "Guia" },
];

export function PublicLinks() {
  const pathName = usePathname();

  return (
    <>
      {publicLinks.map(({ href, placeholder }: PropsLink) => (
        <li key={placeholder}>
          <Link
            href={href}
            className={cn(
              `leading-6 text-base text-zinc-600 hover:text-indigo-900 transition-all relative`,
              pathName == href &&
                `font-bold text-indigo-900 
                after:absolute after:-bottom-1 after:w-full after:left-0 after:h-0.5 after:bg-indigo-900 `,
            )}
          >
            {placeholder}
          </Link>
        </li>
      ))}
    </>
  );
}
