import LivePreviewDrawer from "../feature/dashboard/live-preview-sheet";
import DashboardNavbar from "./navigation/dashboard-navigation";

export default function DashboardShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <DashboardNavbar />
      <main className="overflow-y-auto min-w-0">{children}</main>
      <LivePreviewDrawer />
    </div>
  );
}
