"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/tw-merge";
import type { NavItem, DashboardNavItem } from "@/utils/links";
import {
  marketingNav,
  dashboardNavManager,
  dashboardNavPreferences,
} from "@/utils/links";
import { NAV_ICON_MAP } from "@/utils/icons";
import { useNavigationStore } from "@/lib/stores/useNavigationStore";

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

const dashboardNavigationLinks = {
  manager: {
    title: "gerenciador",
    links: dashboardNavManager,
  },
  preferences: {
    title: "preferências",
    links: dashboardNavPreferences,
  },
} as const;

export function DashboardNavLinks() {
  return (
    <>
      <DashboardRenderLinks title="manager" />
      <span className="block w-full border-b border-slate-800  mt-4.5 mb-4" />
      <DashboardRenderLinks title="preferences" />
    </>
  );
}

function DashboardRenderLinks({ title }: { title: "manager" | "preferences" }) {
  const linkList = dashboardNavigationLinks[title];

  return (
    <>
      <span className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.5px] mb-[6.5px] ml-6 group-data-[navigationbar=collapsed]/navigationbar:hidden">
        {linkList.title}
      </span>
      <ul>
        {linkList.links.map((link: DashboardNavItem) => (
          <li key={link.href}>
            <DashboardNavLink {...link} />
          </li>
        ))}
      </ul>
    </>
  );
}

export function DashboardNavLink({
  href,
  label,
  icon,
  badge,
}: DashboardNavItem) {
  const IsNavigationSidebarCollapsed = useNavigationStore(
    (state) => state.IsNavigationSidebarCollapsed,
  );

  const pathname = usePathname();
  const Icon = NAV_ICON_MAP[icon];

  return (
    <Link
      href={href}
      className={cn(
        `py-2.5 px-3.5 rounded-xl flex items-center gap-x-3 text-slate-400 font-medium text-sm leading-5
        relative transition-colors hover:bg-indigo-600/40 mb-1 group-data-[navigationbar=collapsed]/navigationbar:justify-center group-data-[navigationbar=collapsed]/navigationbar:size-11 group`,
        pathname.startsWith(href) && `font-semibold text-white bg-indigo-600`,
      )}
    >
      <Icon size={18} />
      <span
        className={cn(
          "block text-sm w-max left-14 px-1 rounded-xl transition-opacity flex-1",
          IsNavigationSidebarCollapsed &&
            "group-data-[navigationbar=collapsed]/navigationbar" &&
            "absolute shadow bg-white hidden text-xs group-hover:block text-indigo-600/50 border border-gray-200",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "hidden p-0.5 px-1 mr-auto bg-indigo-800 rounded-full text-xs font-bold leading-4 text-white",
          badge !== undefined && "block ",
          IsNavigationSidebarCollapsed &&
            `group-data-[navigationbar=collapsed]/navigationbar` &&
            ` absolute -top-2 -right-2 border border-slate-900 bg-transparent`,
        )}
      >
        {badge}
      </span>
    </Link>
  );
}
