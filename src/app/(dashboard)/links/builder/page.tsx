import { ButtonOpenLivePreview } from "@/components/dashboard/live-preview-sheet";
import PrependButton from "@/components/shared/prepend-button";
import {
  ChartLine,
  Link2,
  Palette,
  Sparkles,
  StretchHorizontal,
} from "lucide-react";
import SortableList from "@/components/dashboard/sortable-list";
import UnsavedChangesBar from "@/components/dashboard/unsaved-changes-bar";
import { LinkItem } from "@/lib/definitions";

const listLinks: LinkItem[] = [
  {
    id: 1,
    title: "Instagram",
    url: "http://instagram.com",
    iconName: "Instagram",
    position_at: 1,
    is_active: true,
    display_type: "circle",
    total_click: 150,
  },
  {
    id: 2,
    title: "Lindkedin",
    url: "http://lindkedin.com",
    iconName: "LinkedIn",
    position_at: 2,
    is_active: true,
    display_type: "card",
    total_click: 500,
  },
  {
    id: 3,
    title: "Meu perfil do spotfy",
    url: "http://spotfy.com",
    iconName: "Spotify",
    position_at: 3,
    is_active: true,
    display_type: "card",
    total_click: 87,
  },
];

type CardsDetails = {
  icon: React.ReactElement;
  title: string;
  paragraph: string;
};

const cardsDetails: CardsDetails[] = [
  {
    icon: <Palette size={18} />,
    title: "Customização Visual",
    paragraph: `Altere temas, tipografia, cores e estilos de  botão 
      na aba Aparência para combinar com sua identidade`,
  },
  {
    icon: <ChartLine size={18} />,
    title: "Métricas em Tempo Real",
    paragraph: `Rastreie visualizações, cliques únicos e taxas
      de conversão de cada link publicado.`,
  },
  {
    icon: <StretchHorizontal size={18} />,
    title: "Formatos Flexíveis",
    paragraph: `Alterne com facilidade entre cartões
      destacados expansíveis e botões circulares
      compactos.`,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen p-4 pb-12 md:p-12 overflow-auto">
      <header className="flex flex-col md:flex-row items-end justify-between mb-12">
        <div className="w-full md:w-max">
          <h1 className="text-2xl md:text-[32px] leading-10 font-semibold text-indigo-900 text-center md:text-left">
            Adicione seus links
          </h1>
          <h2 className="text-sm md:text-base leading-6 text-zinc-600 text-center md:text-left mb-5 md:mb-0">
            Gerencie e organize o perfil do seu link público.
          </h2>
        </div>
        <PrependButton
          text="Adicionar Link"
          hasIcon={true}
          subClass="w-full md:w-max flex items-center justify-center gap-x-2 rounded-full"
          iconSize={18}
        />
      </header>
      <main>
        {listLinks && listLinks.length ? (
          <>
            <SortableList links={listLinks} />
            <UnsavedChangesBar />
          </>
        ) : (
          <>
            <section className="flex items-center justify-center flex-col bg-white border border-neutral-300 rounded-2xl p-5 px-6 md:py-12 mb-4 md:mb-7">
              <div className="size-12 md:size-14 flex items-center justify-center bg-gray-100 border border-neutral-300 text-indigo-900 rounded-2xl mb-3.5 md:mb-6">
                <Link2 className="size-5 md:size-6" />
              </div>
              <h2 className="text-zinc-900 text-base md:text-2xl font-semibold leading-6 md:leading-8 tracking-[-0.24px] mb-1 text-center">
                Nenhum link adicionado ainda
              </h2>
              <p className="w-full md:max-w-111.25 text-center text-zinc-600 text-xs md:text-base font-normal leading-4.75 md:leading-6 mb-4 md:mb-7">
                Comece criando seu primeiro link para compartilhar sua presença
                digital ou importe links rapidamente de suas redes.
              </p>
              <PrependButton
                text="Adicionar Primeiro Link"
                hasIcon={true}
                subClass="w-full md:w-max flex items-center justify-center gap-x-2 rounded-full"
                iconSize={18}
              />
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-12">
              {cardsDetails.map(({ icon, title, paragraph }: CardsDetails) => (
                <article
                  key={title}
                  className="p-6 bg-white border border-neutral-300 rounded-xl"
                >
                  <div className="size-9 flex items-center justify-center bg-gray-100 text-indigo-900 mb-2 rounded-lg">
                    {icon}
                  </div>
                  <h3 className="text-zinc-900 text-sm font-semibold leading-5 tracking-[0.28px] mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-xs font-normal leading-4 tracking-[0.6px]">
                    {paragraph}
                  </p>
                </article>
              ))}
            </section>
          </>
        )}
        <div className="bg-white/40 border-dashed border-2 border-slate-300 rounded-2xl p-4.5 md:py-12">
          <Sparkles className="size-7 md:size-11 text-slate-500 mx-auto mb-2" />
          <h3 className="text-center text-slate-800 text-sm md:text-base leading-4 font-bold mb-2">
            Turbine o alcance do seu perfil
          </h3>
          <p className="max-w-67.5 md:max-w-100 mx-auto text-center text-slate-500 text-xs md:text-sm leading-4 md:leading-5 font-normal">
            Experimente adicionar seções temáticas, formulário de newsletter ou
            links diretos para seus últimos projetos.
          </p>
        </div>
      </main>
      <ButtonOpenLivePreview />
    </div>
  );
}
