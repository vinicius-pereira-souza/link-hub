"use client";

import useUserData from "@/hooks/useUserData";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { PublicUserLinkSkeleton } from "../ui/skeletons";

export default function PublicUserLink() {
  const { data, error, isLoading } = useUserData();

  if (isLoading) return <PublicUserLinkSkeleton />;
  if (error || !data) return null;

  return (
    <Link
      href={data.name ?? "#"}
      className="py-1.5 px-3 bg-slate-100 hover:bg-slate-100/70 rounded-lg flex items-center justify-center gap-x-2 text-xs font-medium leading-4 text-slate-600"
    >
      <span className="block size-2 rounded-full bg-emerald-500 animate-pulse" />
      linkhub.io/{data.name ?? "Usuário"}
      <SquareArrowOutUpRight className="size-3.5 text-slate-400" />
    </Link>
  );
}
