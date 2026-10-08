import LivePreviewDrawer from "../feature/dashboard/live-preview-sheet";
import DashboardNavbar from "./navigation/dashboard-navigation";
import { DrawerButton } from "./navigation/buttons-actions";
import Logo from "../ui/logo";

export default function DashboardShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <DashboardNavbar />
      <main className="overflow-y-auto min-w-0">
        <header className="flex md:hidden items-center gap-2 py-3 px-4 sticky top-0 z-10 shadow  backdrop-blur-lg">
          <DrawerButton action="open" />
          <Logo />
        </header>
        {children}
        <footer></footer>
      </main>
      <LivePreviewDrawer />
    </div>
  );
}
