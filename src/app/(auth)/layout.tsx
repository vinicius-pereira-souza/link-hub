import FlashMessage from "@/components/auth/flash-message";
import { Link2 } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-100/75 text-center px-6 grid">
      <FlashMessage />
      <header className="pt-20">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-900 text-white mb-6 mx-auto">
          <Link2 />
        </div>
        <span className="font-semibold text-2xl text-indigo-900 mb-2.5">
          LinkHub
        </span>
      </header>
      {children}
      <footer className="py-20">
        <div>
          <p className="text-zinc-700 font-medium text-sm my-1">
            &copy; 2026 LinkHub. Curadoria da web, um link de cada vez.
          </p>
        </div>
      </footer>
    </main>
  );
}
