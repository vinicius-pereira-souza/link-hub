import DashboardNavbar from "./dashboard-navigation";
import LivePreviewDrawer from "./live-preview-sheet";

export default function DashboardShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 grid grid-cols-[auto_1fr]">
      <DashboardNavbar />
      <main className="overflow-y-auto min-w-0">{children}</main>
      <LivePreviewDrawer />
    </div>
  );
}
