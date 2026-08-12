import { geist } from "@/components/ui/fonts";
import { PublicLinks } from "@/components/ui/links";
import { cn } from "@/lib/tw-merge";
import Link from "next/link";

export default function LayoutLandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100/75">
      <header
        className={cn(
          `flex items-center justify-center py-2.5 bg-gray-50/80 border-b border-gray-200 text-base`,
          geist.className,
        )}
      >
        <div className="flex items-center justify-between flex-1 max-w-280 px-6">
          <span className="font-bold text-2xl text-indigo-900">LinkHub</span>
          <nav className="flex-1 hidden md:block">
            <ul className="flex items-center gap-x-6 ml-20">
              <PublicLinks />
              <li className="ml-auto mr-9">
                <Link
                  href="/sign-in"
                  className={`leading-6 text-zinc-600 hover:text-indigo-900 
                  transition-all relative text-sm font-medium`}
                >
                  Entrar
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href="/sign-up"
            className="block bg-indigo-900 hover:bg-indigo-800 transition-all py-3 px-6 rounded-full cursor-pointer font-medium text-white text-sm"
          >
            Comece Gratuitamente
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t border-gray-200 py-20">
        <div
          className="flex flex-col md:flex-row items-center justify-between flex-1 max-w-280 px-6 mx-auto
        text-center md:text-left"
        >
          <div>
            <span className="font-bold text-2xl text-indigo-900">LinkHub</span>
            <p className="text-zinc-700 font-medium text-sm my-1">
              &copy; 2026 LinkHub. Curadoria da web, um link de cada vez.
            </p>
            <p className="text-indigo-900 font-medium text-sm">
              🚧 Projeto demonstrativo para portfolio • Planos não
              implementados.
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-x-6 text-sm text-zinc-700">
              {["Privacidade", "Termos", "Central de Ajuda", "Contato"].map(
                (text, i) => (
                  <li key={i}>
                    <Link href="#">{text}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
