import { User } from "lucide-react";
import { auth } from "@/lib/auth/server";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function UserAvatarServer() {
  const { data: session, error } = await auth.getSession();
  if (error || !session) return null;

  const { name, email, image } = session!.user;

  return (
    <div className="bg-white rounded-xl p-3 grid grid-cols-[40px_1fr] mb-2 gap-3">
      {image ? (
        <Image
          src={image}
          alt={`avatar image ${name}`}
          width={40}
          height={40}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full h-10 w-10
             bg-gray-800 text-white`}
        >
          <User />
        </div>
      )}

      <div className="min-w-32">
        <span className="block text-indigo-900 text-sm font-bold truncate">
          {name}
        </span>
        <span className="block text-zinc-600 text-xs font-semibold truncate">
          {email}
        </span>
      </div>
    </div>
  );
}
