import { cn } from "@/lib/tw-merge";
import Link from "next/link";

export default function ButtonLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string | string[];
}) {
  return (
    <>
      <Link
        href={href}
        className={cn(
          `block py-6 px-12 transition-all cursor-pointer font-medium text-zinc-900 text-sm rounded-lg border `,
          className,
        )}
      >
        {label}
      </Link>
    </>
  );
}
