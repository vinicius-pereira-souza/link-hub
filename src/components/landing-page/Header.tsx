import Link from "next/link";
import { PublicLinks } from "../ui/links";
import { cn } from "@/lib/tw-merge";
import { geist } from "../ui/fonts";

export default function Header() {
  return (
    <header
      className={cn(
        `flex items-center justify-center py-2.5 bg-gray-50/80 text-base`,
        geist.className,
      )}
    >
      <div className="flex items-center justify-between flex-1 max-w-280 px-6">
        <span className="font-bold text-2xl text-indigo-900">LinkHub</span>
        <nav className="flex-1">
          <ul className="flex items-center gap-x-6 ml-20">
            <PublicLinks />
            <li className="ml-auto mr-9">
              <Link
                href="sign-in"
                className={`leading-6 text-zinc-600 hover:text-indigo-900 
                  transition-all relative text-sm font-medium`}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/sign-in"
          className="block bg-indigo-900 hover:bg-indigo-800 transition-all py-3 px-6 rounded-full cursor-pointer font-medium text-white text-sm"
        >
          Comece Gratuitamente
        </Link>
      </div>
    </header>
  );
}
