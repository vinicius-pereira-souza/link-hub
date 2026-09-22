import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import UserAvatarServer from "@/components/dashboard/user-avatar-server";
import { ManagerLinksStoreProvider } from "@/providers/manager-links-provider";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-screen overflow-hidden bg-gray-50 grid grid-cols-[256px_1fr]">
      <DashboardNavbar>
        <UserAvatarServer />
      </DashboardNavbar>
      <ManagerLinksStoreProvider>
        <div className="overflow-y-auto">{children}</div>
      </ManagerLinksStoreProvider>
    </main>
  );
}
