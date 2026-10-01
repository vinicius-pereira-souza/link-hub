import { ManagerLinksStoreProvider } from "@/providers/manager-links-provider";
import DashboardShell from "@/components/dashboard/dashboard-shell";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ManagerLinksStoreProvider>
      <DashboardShell>{children}</DashboardShell>
    </ManagerLinksStoreProvider>
  );
}
