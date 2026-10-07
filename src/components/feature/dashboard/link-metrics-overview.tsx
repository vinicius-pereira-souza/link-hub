import { MousePointerClick, Star, ChartLine } from "lucide-react";
import { cn } from "@/lib/tw-merge";
import Link from "next/link";
import type { LinkRow } from "@/lib/definitions";
import { fetchLinkMetricsOverview } from "@/lib/queries/links.sql";

export default async function LinkMetricsOverview({
  userid,
}: {
  userid: string;
}) {
  const { data } = await fetchLinkMetricsOverview(userid);

  return (
    <section className="grid grid-cols-[310px_1fr] gap-6 my-12">
      <TotalClicksCard total_click={data.clicks?.total_click} />
      <TopPerformingLinkCard {...(data?.topLink ?? {})} />
    </section>
  );
}

function TotalClicksCard({ total_click }: Pick<LinkRow, "total_click">) {
  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-300/30">
      <div className="flex items-center justify-between text-sm text-zinc-600 font-medium mb-6">
        <span>Total de Cliques</span>
        <MousePointerClick color="#312c85" size={25} />
      </div>
      <span className="text-indigo-900 font-semibold tracking-tighter text-5xl mt-12.5 block">
        {total_click ?? 0}
      </span>
    </div>
  );
}

function TopPerformingLinkCard({
  title,
  total_click,
  id,
  url,
}: Partial<LinkRow>) {
  if (!id)
    return (
      <div
        className={cn(
          `rounded-xl p-6 pb-3 border bg-white  border-neutral-300/30`,
        )}
      >
        <div
          className={cn(
            `flex items-center justify-between font-medium 
                    text-sm mb-3 leading-5  text-zinc-600`,
          )}
        >
          <h5>Ainda não há dados de desempenho</h5>
          <ChartLine size={20} color="#52525c" />
        </div>
        <h1 className="font-semibold text-[32px] mb-1 leading-10">
          Ainda não há dados de desempenho
        </h1>
        <h2
          className={cn(`font-semibold text-xs mb-3 leading-4 text-zinc-600`)}
        >
          Adicione seu primeiro link para começar a acompanhar as métricas de
          visitantes e o conteúdo de melhor desempenho.
        </h2>
      </div>
    );

  return (
    <div
      className={cn(
        `rounded-xl p-6 pb-3 border bg-linear-to-r from-indigo-900  to-slate-600 
        border-neutral-300/30 text-white`,
      )}
    >
      <div
        className={`flex items-center justify-between text-gray-300 
          font-medium text-sm mb-3 leading-5`}
      >
        <h5>Link de Melhor Desempenho</h5>
        <Star color="#fff" size={20} />
      </div>
      <h1 className="font-semibold text-[32px] mb-1 leading-10">{title}</h1>
      <h2 className={`font-semibold text-xs mb-3 text-gray-300 leading-4`}>
        {url}
      </h2>
      <div className="flex items-center justify-between">
        <span className="font-normal text-base">
          Quantidade de visitantes: {total_click}
        </span>
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
