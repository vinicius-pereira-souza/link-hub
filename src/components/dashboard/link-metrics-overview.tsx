import { MousePointerClick, Star } from "lucide-react";
import Link from "next/link";

export default function LinkMetricsOverview() {
  return (
    <section className="grid grid-cols-[310px_1fr] gap-6 my-12">
      <TotalClicksCard />
      <TopPerformingLinkCard />
    </section>
  );
}

function TotalClicksCard() {
  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-300/30">
      <div className="flex items-center justify-between text-sm text-zinc-600 font-medium mb-6">
        <span>Total de Cliques</span>
        <MousePointerClick color="#312c85" size={25} />
      </div>
      <span className="text-indigo-900 font-semibold tracking-tighter text-5xl mt-12.5 block">
        24,892
      </span>
    </div>
  );
}

function TopPerformingLinkCard() {
  return (
    <div className="bg-linear-to-r from-indigo-900  to-slate-600  rounded-xl p-6 pb-3 border border-neutral-300/30 text-white">
      <div
        className={`flex items-center justify-between text-gray-300 font-medium 
                    text-sm mb-3 leading-5`}
      >
        <h5>Link de Melhor Desempenho</h5>
        <Star color="#fff" size={20} />
      </div>
      <h1 className="font-semibold text-[32px] mb-1 leading-10">
        Portfolio showcase 2024
      </h1>
      <h2 className="font-semibold text-xs mb-3 text-gray-300 leading-4">
        curate.io/alex/portfolio-2024
      </h2>
      <div className="flex items-center justify-between">
        <span className="font-normal text-base">8.4K Unique Visitors</span>
        <Link
          href="/dashboard"
          className="block rounded-full bg-white text-indigo-900 py-1 px-6 text-sm font-medium"
        >
          Ver estatísticas
        </Link>
      </div>
    </div>
  );
}
