"use client";
import Link from "next/link";
import { cn } from "@/lib/tw-merge";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Link2, Palette, Settings, Info } from "lucide-react";
import ButtonSignOut from "../auth/button-sign-out";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: Array<NavLink> = [
  {
    href: "/dashboard",
    label: "Painel de Controle",
    icon: <LayoutDashboard size={20} />,
  },
  { href: "/links", label: "Links", icon: <Link2 size={20} /> },
  { href: "/appearance", label: "Aparéncia", icon: <Palette size={20} /> },
  { href: "/settings", label: "Configurações", icon: <Settings size={20} /> },
];

export default function DashboardNavbar({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <aside className="min-h-screen bg-gray-100 p-6 flex flex-col border-r border-zinc-200">
      <span className="font-bold text-2xl text-indigo-900 mb-12 ">LinkHub</span>
      {children}
      <nav className="flex-1 flex flex-col">
        <ul className="flex-1 flex flex-col gap-1">
          {links.map((link: NavLink) => (
            <li key={link.label}>
              <NavLink {...link} />
            </li>
          ))}
        </ul>
        <Link
          href="/links/add"
          className={`block w-full py-3 px-6 bg-indigo-900 text-white text-sm text-center 
            rounded-xl transition-all hover:bg-indigo-800`}
        >
          Adicionar novo link
        </Link>
        <div className="border-t border-neutral-300 pt-6 flex flex-col gap-y-2 mt-6">
          <NavLink href="/help" label="Ajuda" icon={<Info size={20} />} />
          <ButtonSignOut />
        </div>
      </nav>
    </aside>
  );
}

function NavLink({ href, icon, label }: NavLink) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={href}
        className={cn(
          `flex items-center gap-x-3 p-3 text-sm font-medium text-zinc-700 hover:bg-gray-100 hover:text-indigo-700 rounded-lg transition-all`,
          pathname.startsWith(href) && `bg-gray-200 text-indigo-900`,
        )}
      >
        {icon} {label}
      </Link>
    </>
  );
}
