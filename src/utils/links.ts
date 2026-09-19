import type { NavIconKey } from "@/utils/icons";

export interface NavItem {
  href: string;
  label: string;
}
export interface DashboardNavItem extends NavItem {
  icon: NavIconKey;
}
interface NavigationConfig {
  marketingNav: NavItem[];
  dashboardNav: DashboardNavItem[];
}
export const { dashboardNav, marketingNav }: NavigationConfig = {
  marketingNav: [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Planos" },
    { href: "/guide", label: "Guia" },
  ],
  dashboardNav: [
    {
      href: "/dashboard",
      label: "Painel de Controle",
      icon: "dashboard",
    },
    { href: "/links", label: "Links", icon: "links" },
    { href: "/appearance", label: "Aparéncia", icon: "appearance" },
    { href: "/settings", label: "Configurações", icon: "settings" },
  ],
};
