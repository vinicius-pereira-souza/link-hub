import type { NavIconKey } from "@/utils/icons";

export interface NavItem {
  href: string;
  label: string;
  badge?: number;
}
export interface DashboardNavItem extends NavItem {
  icon: NavIconKey;
}
interface NavigationConfig {
  marketingNav: NavItem[];
  dashboardNavManager: DashboardNavItem[];
  dashboardNavPreferences: DashboardNavItem[];
}
export const {
  dashboardNavManager,
  dashboardNavPreferences,
  marketingNav,
}: NavigationConfig = {
  marketingNav: [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Planos" },
    { href: "/guide", label: "Guia" },
  ],
  dashboardNavManager: [
    { href: "/links", label: "Links", icon: "links", badge: 0 },
    { href: "/metrics", label: "Métricas & Tráfego", icon: "metrics" },
    { href: "/appearance", label: "Aparéncia", icon: "appearance" },
  ],
  dashboardNavPreferences: [
    { href: "/settings", label: "Configurações", icon: "settings" },
  ],
};
