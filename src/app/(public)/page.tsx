import HomeGridCards from "@/components/landing-page/home-grid-cards";
import StaticDevice from "@/components/landing-page/static-device";
import { cn } from "@/lib/tw-merge";
import { BadgeCheck } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section>
        <div className="max-w-268 mx-auto text-center mt-20 mb-12">
          <span className="mb-6 max-w-max flex items-center justify-center gap-x-1 rounded-full text-blue-950 text-xs uppercase font-semibold py-1 px-3 pr-4 mx-auto bg-indigo-100 tracking-[1.2px]">
            <BadgeCheck height={15} /> o novo padrão para links
          </span>
          <h1 className="text-[40px] leading-12.5 font-semibold text-zinc-900 max-w-4xl mx-auto mb-6">
            Cure sua presença digital com{" "}
            <span className="text-indigo-900">elegância e intenção.</span>
          </h1>
          <h2 className="mb-12 max-w-150 mx-auto text-lg leading-7 text-zinc-600">
            LinkHub transforma seu &quot;link na bio&quot; em uma experiência
            editorial minimalista. Sem ruído social, apenas o que importa.
          </h2>
          <div className="flex items-center justify-center gap-x-6">
            <button className="block py-6 px-12 bg-indigo-900 hover:bg-indigo-800 transition-all cursor-pointer font-medium text-white text-sm rounded-lg">
              Comece gratuitamente
            </button>
            <button className="block py-6 px-12 bg-white hover:bg-gray-200 transition-all cursor-pointer font-medium text-zinc-900 text-sm rounded-lg border border-neutral-300">
              Ver Exemplos
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-268 mx-auto text-left mt-20 mb-12">
          <div className="grid grid-cols-[400px_400px] items-center justify-between">
            <div>
              <h3 className="text-zinc-900 text-[32px] leading-10 font-semibold mb-6">
                Sua identidade em um único canvas.
              </h3>
              <h4 className="text-base leading-6 text-zinc-600 mb-12">
                Diferente das plataformas convencionais, o Curate prioriza o
                conteúdo. Nossa grade adaptativa e tipografia refinada garantem
                que seus links pareçam uma revista digital, não apenas uma lista
                de botões.
              </h4>
              <ul>
                <li className="mb-6">
                  <span className="block text-zinc-900 font-medium leading-5 text-sm">
                    Layouts Tactile-First
                  </span>
                  <span className="block text-zinc-600 font-semibold leading-3 text-xs">
                    Micro-interações suaves para uma navegação premium.
                  </span>
                </li>
                <li>
                  <span className="block text-zinc-900 font-medium leading-5 text-sm">
                    Analytics Silencioso
                  </span>
                  <span className="block text-zinc-600 font-semibold leading-3 text-xs">
                    Dados profundos sem sacrificar a privacidade do usuário.
                  </span>
                </li>
              </ul>
            </div>
            <StaticDevice />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 pt-20 pb-12">
        <div className="max-w-268 mx-auto  text-center">
          <h3 className="text-zinc-900 text-[32px] leading-10 font-semibold mb-3">
            Feito para profissionais.
          </h3>
          <h4 className="text-base leading-6 text-zinc-600 mb-12">
            Funcionalidades essenciais sem a desordem visual.
          </h4>
          <HomeGridCards />
        </div>
      </section>
    </div>
  );
}
