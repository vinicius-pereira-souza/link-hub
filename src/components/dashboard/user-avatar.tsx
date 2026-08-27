import { User } from "lucide-react";

export default function UserAvatar() {
  return (
    <div className="bg-white rounded-xl p-3 grid grid-cols-[40px_1fr] mb-2 gap-3 ">
      <div className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-800 text-white">
        <User />
      </div>
      <div>
        <span className="block text-indigo-900 text-sm font-bold">
          Username
        </span>
        <span className="block text-zinc-600 text-xs font-semibold">
          aqui será o e-mail
        </span>
      </div>
    </div>
  );
}
