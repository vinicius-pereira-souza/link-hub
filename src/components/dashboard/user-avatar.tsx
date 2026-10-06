"use client";
import { User } from "lucide-react";
import Image from "next/image";
import useUserData from "@/hooks/useUserData";
import { UserAvatarSkeleton } from "../ui/skeletons";

export default function UserAvatar() {
  const { data, error, isLoading } = useUserData();

  if (isLoading) return <UserAvatarSkeleton />;
  if (error || !data) return null;

  return (
    <div className="bg-white rounded-xl p-2.5 border border-gray-200 mt-auto grid grid-cols-[40px_1fr] group-data-[sidebar=collapsed]/sidebar:grid-cols-1 items-center mb-3.5">
      {data.image ? (
        <Image
          src={data.image}
          alt={`Avatar de ${data.name ?? "usuário"}`}
          width={40}
          height={40}
          className="rounded-full object-cover size-10 group-data-[sidebar=collapsed]/sidebar:mx-auto group-data-[sidebar=collapsed]/sidebar:size-8"
        />
      ) : (
        <div className="flex items-center justify-center rounded-full size-10 bg-indigo-900 text-white group-data-[sidebar=collapsed]/sidebar:mx-auto group-data-[sidebar=collapsed]/sidebar:size-8">
          <User size={18} />
        </div>
      )}

      <div className="min-w-0 pl-2 group-data-[sidebar=collapsed]/sidebar:hidden">
        <span className="block text-zinc-900 text-sm font-medium leading-5 truncate">
          {data.name ?? "Usuário"}
        </span>
        <span className="block text-zinc-700 text-xs font-semibold truncate">
          {data.email}
        </span>
      </div>
    </div>
  );
}
