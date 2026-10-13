import DashboardNavigation from "./navigation/dashboard-navigation";
import { ToggleSideBar } from "./navigation/buttons-actions";

export default function DashboardShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 grid grid-cols-1 lg:grid-cols-[auto_1fr]">
      <DashboardNavigation />
      <div className="overflow-y-auto">
        <header className="py-2.5 md:py-3 px-3.5 md:px-5 lg:py-3 lg-px-8 bg-white sticky top-0 border-b border-slate-200">
          <div className="container mx-auto flex items-center justify-between flex-wrap">
            <ToggleSideBar />
            <span>linkhub.io/alex</span>
            <input type="text" />
            <button>live preview</button>
            <button>novo link</button>
          </div>
        </header>
        <main className="min-w-0 p-3 md:p-5 lg:py-7 lg:px-8 min-h-screen">
          {children}
        </main>
        <footer className="py-3 lg:py-4 px-5 lg:px-8 bg-white border-t border-slate-200">
          <div className="container mx-auto text-slate-500 text-xs leading-4 font-normal">
            <p>© 2026 LinkHub Inc. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
