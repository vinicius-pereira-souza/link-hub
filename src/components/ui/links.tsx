"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/tw-merge";
import type { NavItem, DashboardNavItem } from "@/utils/links";
import { marketingNav, dashboardNav } from "@/utils/links";
import { NAV_ICON_MAP } from "@/utils/icons";
import SidebarItemText from "../layout/navigation/sidebar-item-text";

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
        `flex items-center group-data-[sidebar=collapsed]/sidebar:justify-center gap-x-4 text-zinc-500 text-base group-data-[sidebar=collapsed]/sidebar:text-sm leading-5 tracking-[0.28px] p-2.5 px-3.5 rounded-xl hover:bg-indigo-100/30 mb-1 transition-colors relative group 
      `,
        pathname.startsWith(href) &&
          `bg-indigo-100/50 text-slate-800 font-semibold`,
      )}
    >
      <Icon size={16} />
      <SidebarItemText label={label} />
      <span className="hidden absolute top-2/4 -translate-y-2/4 right-3.5 group-data-[sidebar=collapsed]/sidebar:right-1.5 group-[.text-slate-800]:block size-1.5 rounded-full bg-slate-800 ml-auto" />
    </Link>
  );
}
