import LinkList from "@/components/dashboard/link-list";
import LinkMetricsOverview from "@/components/dashboard/link-metrics-overview";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import {
  LinkMetricsOverviewSkeleton,
  LinkListSkeleton,
} from "@/components/ui/skeletons";
import { Search, Plus } from "lucide-react";
import { auth } from "@/lib/auth/server";

export default async function Page() {
  const { data: session } = await auth.getSession();

  if (!session) return redirect("/sign-in");

  return (
    <div>
      <header className="py-2 px-6 border-b border-neutral-300">
        <div className="flex items-center justify-between">
          <h3 className="text-indigo-900 font-bold text-lg">Visão geral</h3>
          <div
            className={`
            flex items-center gap-4 px-3 rounded-full bg-gray-100 border border-neutral-300`}
          >
            <Search size={16} color="#525252" />
            <input
              className="block h-8 text-sm text-neutral-700 active:border-0"
              type="text"
              placeholder="Buscar Links..."
            />
          </div>
        </div>
      </header>
      <main className="px-6">
        <Suspense fallback={<LinkMetricsOverviewSkeleton />}>
          <LinkMetricsOverview userid={session.user.id} />
        </Suspense>
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-indigo-900 font-medium">
              Linkes Ativos
            </h2>
            <button className="flex items-center text-center text-white text-sm font-medium bg-indigo-900 px-6 py-3 rounded-lg cursor-pointer transition-all hover:bg-indigo-700">
              <Plus /> adicionar novo link
            </button>
          </div>
          <LinkList />
        </section>
      </main>
    </div>
  );
}
