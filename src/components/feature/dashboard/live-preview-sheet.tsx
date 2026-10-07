"use client";
import { ExternalLink, X, User, Link2Off, Smartphone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/tw-merge";
import { useUIStore } from "@/lib/stores/useUIStore";

export default function LivePreviewDrawer() {
  const isLivePreviewOpen = useUIStore((state) => state.isLivePreviewOpen);
  const toggleLivePreview = useUIStore((state) => state.toggleLivePreview);
  const setLivePreviewOpen = useUIStore((state) => state.setLivePreviewOpen);

  return (
    <div
      className={cn(
        `w-full h-screen fixed top-0 left-0 z-10 invisible transition-[visibility] duration-200 ease-linear group`,
        isLivePreviewOpen && `visible`,
      )}
    >
      <div
        className={cn(`modal-overlay group-[.visible]:opacity-100`)}
        onClick={() => setLivePreviewOpen(false)}
      />
      <aside
        className={cn(
          `w-full max-w-110 h-screen fixed top-0 right-0 z-30 bg-gray-200 overflow-y-auto border-l border-neutral-300 transition-transform duration-200 ease-linear translate-x-full group-[.visible]:translate-0`,
        )}
      >
        <header className="bg-gray-100 border-b border-zinc-200 py-5.5 px-5 flex items-center sticky top-0 z-20">
          <span className="bg-gray-50 flex items-center py-1 px-3 border border-neutral-300 text-zinc-900 font-medium text-xs rounded-full gap-x-1 mr-3">
            <span className="block w-2 h-2 rounded-full animate-pulse bg-green-500" />
            Ao vivo
          </span>
          <h4 className="text-indigo-900 font-semibold text-lg mr-auto">
            Live Preview
          </h4>
          <Link className="block p-2.5 hover:bg-gray-200 rounded" href="#">
            <ExternalLink color="#45464F" size={18} />
          </Link>
          <button
            className="block p-2.5 hover:bg-gray-200 cursor-pointer rounded"
            onClick={() => toggleLivePreview()}
          >
            <X color="#45464F" size={18} />
          </button>
        </header>
        <div className="p-7">
          <MobileDevicePreview />
        </div>
      </aside>
    </div>
  );
}

function MobileDevicePreview() {
  return (
    <div
      className={`w-full max-w-80 h-160 shadow-2xl rounded-[48px] border-12 border-black ring-4 ring-gray-900 relative bg-[#F9F9FB] overflow-y-auto scrollbar-none mx-auto flex flex-col`}
    >
      <div className="sticky top-0 left-2/4 -translate-x-2/4 z-10 h-6 w-24 rounded-full bg-black" />
      <main className="px-6 mb-auto flex-1">
        <section>
          <div>
            <div className="w-20 h-20 rounded-full bg-zinc-300 mx-auto mt-15 mb-6 flex items-center justify-center border-2 border-white shadow">
              <User color="#767680" size={25} />
            </div>
          </div>
          <h3 className="text-center text-zinc-600/70 font-medium text-2xl leading-8 tracking-tight mb-1.5">
            @seunome{" "}
            <span className="inline-block px-1.5 bg-gray-100 text-zinc-500 text-xs font-light tracking-wider uppercase rounded">
              demo
            </span>
          </h3>
          <p className="text-center text-zinc-600/60 font-medium text-sm leading-[22.8px] tracking-tight mb-6">
            Adicione uma breve biografia nas configurações de aparência para
            apresentá-la aqui.
          </p>
        </section>
        <section>
          <div className="bg-gray-100/50 p-8 border border-dashed border-neutral-500 rounded-xl flex flex-col items-center ">
            <Link2Off color="#52525c" size={18} />
            <p className="text-xs text-semibold text-zinc-600 leading-4">
              Nenhum link ativo no perfil
            </p>
          </div>
        </section>
      </main>
      <footer className="mt-auto text-center mb-15">
        <span className="text-indigo-900/30  text-2xl font-bold leading-8">
          LinkHub
        </span>
      </footer>
    </div>
  );
}

export function ButtonOpenLivePreview() {
  const setLivePreviewOpen = useUIStore((state) => state.setLivePreviewOpen);

  return (
    <button
      className="flex items-center gap-x-2 py-3 px-5 bg-indigo-900 hover:bg-indigo-900/70 transition-colors fixed right-8 bottom-6 text-white text-sm leading-5 font-medium cursor-pointer rounded-full shadow"
      onClick={() => setLivePreviewOpen(true)}
    >
      <Smartphone size={18} /> Ver Prévia
    </button>
  );
}
