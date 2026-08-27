"use client";
import Link from "next/link";
import { cn } from "@/lib/tw-merge";
import { LayoutDashboard, Link2, Palette, Settings, Info } from "lucide-react";
import UserAvatar from "./user-avatar";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: Array<NavLink> = [
  {
    href: "/dashboard",
    label: "Painel de Controle",
    icon: <LayoutDashboard size={23} />,
  },
  { href: "/links", label: "Links", icon: <Link2 size={23} /> },
  { href: "/appearance", label: "Aparéncia", icon: <Palette size={23} /> },
  { href: "/settings", label: "Configurações", icon: <Settings size={23} /> },
];

export default function DashboardNavbar() {
  return (
    <aside className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <span className="font-bold text-2xl text-indigo-900 mb-12">LinkHub</span>
      <UserAvatar />
      <nav className="flex-1 flex flex-col">
        <ul className="flex-1 flex flex-col gap-x-1">
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
          <NavLink href="/help" label="Ajuda" icon={<Info />} />
          <button className="block w-full">Sair</button>
        </div>
      </nav>
    </aside>
  );
}

function NavLink({ href, icon, label }: NavLink) {
  return (
    <>
      <Link
        href={href}
        className={cn(
          `flex items-center gap-x-3 p-3 text-sm font-medium text-zinc-700 hover:bg-gray-200 hover:text-indigo-900 
          rounded-lg transition-all`,
        )}
      >
        {icon} {label}
      </Link>
    </>
  );
}
