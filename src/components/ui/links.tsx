"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/tw-merge";
import type { NavItem, DashboardNavItem } from "@/utils/links";
import { marketingNav, dashboardNav } from "@/utils/links";
import { NAV_ICON_MAP } from "@/utils/icons";

export function MarketingNavLinks() {
  const pathName = usePathname();

  return (
    <>
      {marketingNav.map(({ href, label }: NavItem) => (
        <li key={label}>
          <Link
            href={href}
            className={cn(
              `leading-6 text-base text-zinc-600 hover:text-indigo-900 transition-all relative`,
              pathName == href &&
                `font-bold text-indigo-900 
                after:absolute after:-bottom-1 after:w-full after:left-0 after:h-0.5 after:bg-indigo-900 `,
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );
}

export function DashboardNavLinks() {
  return (
    <>
      {dashboardNav.map((link: DashboardNavItem) => (
        <li key={link.href}>
          <DashboardNavLink {...link} />
        </li>
      ))}
    </>
  );
}

export function DashboardNavLink({ href, label, icon }: DashboardNavItem) {
  const pathname = usePathname();
  const Icon = NAV_ICON_MAP[icon];

  return (
    <Link
      href={href}
      className={cn(
        `flex items-center gap-x-3 p-3 text-sm font-medium text-zinc-700 hover:bg-gray-100 hover:text-indigo-700 rounded-lg transition-all`,
        pathname.startsWith(href) && `bg-gray-200 text-indigo-900`,
      )}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
}
