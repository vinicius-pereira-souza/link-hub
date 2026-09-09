import SortableList from "@/components/dashboard/sortable-list";

export default function Page() {
  return (
    <div className="flex items-center">
      <div className="flex-1 min-h-screen p-12">
        <header className="flex items-end justify-between mb-12">
          <div>
            <h1 className="text-[32px] leading-10 font-semibold text-indigo-900">
              Adicione seus links
            </h1>
            <h2 className="text-base leading-6 text-zinc-600">
              Gerencie e organize o perfil do seu link público.
            </h2>
          </div>
          <button>adicionar link</button>
        </header>
        <main>
          <SortableList />
        </main>
      </div>
      <div className="flex-1 min-h-screen">teste</div>
    </div>
  );
}
