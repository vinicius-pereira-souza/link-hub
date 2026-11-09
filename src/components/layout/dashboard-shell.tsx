import DashboardNavigationContainer from "./navigation/dashbord-navigation-container";
import DashboardHeader from "./dashboard-header";

export default function DashboardShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 grid grid-cols-1 lg:grid-cols-[auto_1fr]">
      <DashboardNavigationContainer />
      <div className="overflow-y-auto">
        <DashboardHeader />
        <main className="min-w-0 min-h-screen p-4 md:p-5 md:pb-14 lg:px-8 lg:pt-7 lg:pb-11">
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
