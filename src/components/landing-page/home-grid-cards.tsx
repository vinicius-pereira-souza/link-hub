import { cn } from "@/lib/tw-merge";
import { Palette, ChartNoAxesColumn, Clock } from "lucide-react";
import CardImageSVG from "./card-image-svg";

const optionsColor = [
  "bg-zinc-200",
  "bg-indigo-100",
  "bg-amber-200",
  "bg-stone-200",
];

export default function HomeGridCards() {
  return (
    <div className="grid grid-cols-4 text-left gap-6">
      <article className="col-span-3 card-base card-white">
        <div className="max-w-md">
          <Palette width={26} className="mb-6 text-indigo-900" />
          <Titles
            title="Customização Intuitiva"
            subtitle={`Controle cada pixel da sua página. Escolha fontes, paletas de cores e
          layouts que reflitam sua marca pessoal sem precisar de código.`}
          />
          <div className="grid grid-cols-4 gap-x-3 mt-12">
            {optionsColor.map((color, i) => (
              <div key={color} className={cn(`h-24 rounded-lg`, color)} />
            ))}
          </div>
        </div>
      </article>
      <article className="col-span-1 card-base card-white">
        <ChartNoAxesColumn width={26} className="mb-6 text-indigo-900" />
        <Titles
          title="Analytics"
          subtitle={`Saiba de onde vem seu tráfego com gráficos limpos e acionáveis.`}
        />
      </article>
      <article className="col-span-1 card-base card-white">
        <Clock width={26} className="mb-6 text-indigo-900" />
        <Titles
          title="Agendamento"
          subtitle={`Publique seus links automaticamente no horário ideal para seu público.`}
        />
      </article>
      <article
        className="col-span-3 card-base bg-indigo-900
       border-0 flex items-center relative group overflow-hidden"
      >
        <div className="max-w-94.5">
          <Titles
            title="Integração Total"
            classTitle="text-white"
            classSubtitle="text-indigo-200"
            subtitle={`Conecte seu Instagram, TikTok, YouTube e newsletter em segundos.
    Centralize sua vida digital.`}
          />
          <CardImageSVG />
        </div>
      </article>
    </div>
  );
}

type SubClassName = string | string[];

interface Title {
  title: string;
  subtitle: string;
  classTitle?: SubClassName;
  classSubtitle?: SubClassName;
}

function Titles({ title, subtitle, classTitle, classSubtitle }: Title) {
  return (
    <>
      <h5
        className={cn(
          `text-2xl font-medium leading-8 text-zinc-900 mb-6`,
          classTitle,
        )}
      >
        {title}
      </h5>
      <h6 className={cn(`text-base leading-6 text-zinc-600`, classSubtitle)}>
        {subtitle}
      </h6>
    </>
  );
}
