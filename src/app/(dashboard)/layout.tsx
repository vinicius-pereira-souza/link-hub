import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import UserAvatarServer from "@/components/dashboard/user-avatar-server";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen overflow-hidden bg-gray-5 grid grid-cols-[256px_1fr]">
      <DashboardNavbar>
        <UserAvatarServer />
      </DashboardNavbar>
      {children}
    </main>
  );
}
