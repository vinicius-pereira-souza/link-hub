import { Link as IconLink, Plus, Sparkles } from "lucide-react";
import Link from "next/link";
import { fetchSearchListOfLinksByFilter } from "@/lib/queries/links.sql";
import LinkListItem from "./link-list-item";

export default async function LinkList({
  userid,
  query,
}: {
  userid: string;
  query: string;
}) {
  const { data } = await fetchSearchListOfLinksByFilter(userid, query);

  if (!data)
    return (
      <div className="bg-white py-20 mb-11 rounded-xl border border-neutral-300/30">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
          <IconLink color="#37437a" size={30} />
        </div>
        <h3 className="text-center text-zinc-900 text-2xl leading-8 font-medium">
          Nenhum link adicionado ainda
        </h3>
        <p className="max-w-[384px] mx-auto text-center text-zinc-700 text-base leading-6 font-normal mb-11">
          Sua página no Link-hub aguarda seu conteúdo. Adicione seu portfólio,
          perfis em redes sociais, lojas ou artigos para começar a compartilhar.
        </p>
        <Link
          href="/link/add-link"
          className="w-62.5 mx-auto flex items-center justify-center gap-3.5 text-white text-sm font-medium bg-indigo-900 px-6 py-3 rounded-lg cursor-pointer transition-all hover:bg-indigo-700"
        >
          <Plus /> Crie seu primeiro link
        </Link>
      </div>
    );

  return (
    <div>
      <ul>
        {data &&
          data!.map((link) => <LinkListItem key={link.id} {...(link ?? {})} />)}
      </ul>
      <div className="bg-gray-100 py-20 mb-11 rounded-xl border-dashed border-2 border-neutral-300">
        <Sparkles color="#767680" size={50} className="mx-auto mb-3" />
        <h3 className="text-center text-zinc-600 text-2xl leading-8 font-medium">
          Otimize sua presença
        </h3>
        <p className="max-w-[384px] mx-auto text-center text-zinc-700 text-base leading-6 font-normal mb-11">
          Use insights de análise para organizar os links mais clicados no topo
          do seu perfil e obter melhores taxas de conversão.
        </p>
        <Link
          href="/dashboard"
          className="block text-indigo-900 text-center text-sm font-medium transition-all hover:text-indigo-700"
        >
          Ver estratégias avançadas
        </Link>
      </div>
    </div>
  );
}
