import Link from "next/link";
import LinkList from "@/components/dashboard/link-list";
import LinkMetricsOverview from "@/components/dashboard/link-metrics-overview";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import {
  LinkMetricsOverviewSkeleton,
  LinkListSkeleton,
} from "@/components/ui/skeletons";
import { Plus } from "lucide-react";
import { auth } from "@/lib/auth/server";
import SearchInput from "@/components/dashboard/search";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const { data: session } = await auth.getSession();

  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  if (!session) return redirect("/sign-in");

  return (
    <div>
      <header className="py-2 px-6 border-b border-neutral-300">
        <div className="flex items-center justify-between">
          <h3 className="text-indigo-900 font-bold text-lg">Visão geral</h3>
          <SearchInput placeholder="Buscar links..." />
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
            <Link
              href="/links/add-links"
              className="flex items-center text-center text-white text-sm font-medium bg-indigo-900 px-6 py-3 rounded-lg cursor-pointer transition-all hover:bg-indigo-700"
            >
              <Plus /> novo link
            </Link>
          </div>
          <Suspense fallback={<LinkListSkeleton />}>
            <LinkList userid={session.user.id} query={query} />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
