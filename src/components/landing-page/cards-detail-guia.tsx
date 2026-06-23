import { CircleUserRound, Link2, Palette, Share2 } from "lucide-react";

interface CardDetail {
  icon: string;
  stap: string;
  title: string;
  description: string;
}

type Icon = {
  [key: string]: React.ReactElement;
};

const icons: Icon = {
  user: <CircleUserRound />,
  link: <Link2 />,
  paint: <Palette />,
  shared: <Share2 />,
};

const cardsDetails: CardDetail[] = [
  {
    icon: "user",
    stap: "passo 1",
    title: "Crie seu perfil",
    description: `Escolha seu nome de usuário único e adicione sua bio 
      para contar ao mundo quem você é.`,
  },
  {
    icon: "link",
    stap: "passo 2",
    title: "Adicione seus links",
    description: `Conecte suas redes sociais, portfólio, loja e conteúdos
      favoritos em um só lugar.`,
  },
  {
    icon: "paint",
    stap: "passo 3",
    title: "Personalize o visual",
    description: `Escolha entre nossos temas (Moderno, Classic, Bold, Soft)
      e ajuste cores e fontes para refletir sua marca.`,
  },
  {
    icon: "shared",
    stap: "passo 4",
    title: "Compartilhe com o mundo",
    description: `Adicione seu link único na bio das suas redes sociais e
      acompanhe os resultados em tempo real.`,
  },
];

export default function WrapperCardDetails() {
  return (
    <>
      {cardsDetails.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </>
  );
}

function Card({ icon, stap, title, description }: CardDetail) {
  const iconName = icons[icon];

  return (
    <article className="bg-white rounded-xl border border-gray-100 p-12 flex flex-col gap-y-5">
      <span className="block p-3 rounded-lg bg-indigo-100 text-indigo-900 w-max">
        {iconName}
      </span>
      <span
        className="block p-2  py-1 rounded-sm w-max bg-indigo-100 text-indigo-900 
      uppercase text-xs font-semibold tracking-[0.6px] leading-4"
      >
        {stap}
      </span>
      <h3 className="text-zinc-900 text-2xl leading-8 font-medium">{title}</h3>
      <p className="text-zinc-700 text-base leading-6">{description}</p>
    </article>
  );
}
