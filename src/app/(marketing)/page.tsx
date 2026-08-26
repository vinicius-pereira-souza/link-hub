import ButtonLink from "@/components/marketing/button-link";
import HomeGridCards from "@/components/marketing/home-grid-cards";
import StaticDevice from "@/components/marketing/static-device";
import { BadgeCheck, CircleCheck } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section>
        <div className="max-w-268 mx-auto text-center mt-20 mb-12 px-6">
          <span className="mb-5 lg:mb-6 max-w-max flex items-center justify-center gap-x-1 rounded-full text-blue-950 text-xs uppercase font-semibold py-1 px-3 pr-4 mx-auto bg-indigo-100 tracking-[1.2px]">
            <BadgeCheck height={15} /> o novo padrão para links
          </span>
          <h1 className="text-[28px] lg:text-[40px] leading-8.75 lg:leading-12.5 font-semibold text-zinc-900 max-w-4xl mx-auto mb-6">
            Cure sua presença digital com{" "}
            <span className="text-indigo-900">elegância e intenção.</span>
          </h1>
          <h2 className="mb-12 max-w-150 mx-auto text-lg leading-7 text-zinc-600">
            LinkHub transforma seu &quot;link na bio&quot; em uma experiência
            editorial minimalista. Sem ruído social, apenas o que importa.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <ButtonLink
              href="/sign-in"
              label="Comece gratuitamente"
              className="bg-indigo-900 hover:bg-indigo-800 text-white w-63 lg:w-auto"
            />
            <ButtonLink
              href="/guia"
              label="Ver exemplos"
              className="bg-white hover:bg-gray-200 text-zinc-900 border-neutral-300 w-63 lg:w-auto"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-268 mx-auto text-left mt-20 mb-20 md:mb-12 px-6">
          <div
            className="grid grid-cols-1 lg:grid-cols-[400px_400px] items-center justify-between
          gap-y-20 lg:gap-y-0"
          >
            <div className="order-last lg:order-first">
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
                <li className="mb-6 flex items-start gap-x-6">
                  <CircleCheck className="text-indigo-900 w-5" />
                  <div>
                    <span className="block text-zinc-900 font-medium leading-5 text-sm">
                      Layouts Tactile-First
                    </span>
                    <span className="block text-zinc-600 font-semibold leading-4 md:leading-3 text-xs">
                      Micro-interações suaves para uma navegação premium.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-x-6">
                  <CircleCheck className="text-indigo-900  w-5" />
                  <div>
                    <span className="block text-zinc-900 font-medium leading-5 text-sm">
                      Analytics Silencioso
                    </span>
                    <span className="block text-zinc-600 font-semibold leading-4 md:leading-3 text-xs">
                      Dados profundos sem sacrificar a privacidade do usuário.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <StaticDevice />
          </div>
        </div>
      </section>
      <section className="bg-gray-200/30 py-20">
        <div className="max-w-268 mx-auto text-center px-6">
          <h3 className="text-zinc-900 text-[32px] leading-10 font-semibold mb-3">
            Feito para profissionais.
          </h3>
          <h4 className="text-base leading-6 text-zinc-600 mb-12">
            Funcionalidades essenciais sem a desordem visual.
          </h4>
          <HomeGridCards />
        </div>
      </section>
      <section>
        <div className="max-w-268 mx-auto text-center my-20 bg-gray-200/30 rounded-3xl">
          <div className="max-w-2xl mx-auto p-12 lg:p-20">
            <h3 className="text-zinc-900 text-[28px] md:text-[40px] leading-9 md:leading-12 font-semibold mb-6">
              Pronto para elevar sua presença?
            </h3>
            <h4 className="text-base md:text-lg leading-6 md:leading-7 text-zinc-600 mb-12">
              Junte-se a mais de 50.000 criadores que escolheram o Curate para
              compartilhar seu trabalho de forma sofisticada.
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <ButtonLink
                href="/auth/sign-in"
                label="Comece gratuitamente"
                className="bg-indigo-900 hover:bg-indigo-800 text-white"
              />
              <ButtonLink
                href="/pricing"
                label="Planos e Preços"
                className="bg-white hover:bg-gray-200 text-zinc-900 border-neutral-300 w-63 lg:w-auto"
              />
            </div>
            <span className="text-zinc-600 text-xs font-semibold  block mt-6 w-63 lg:w-auto">
              Nenhum cartão de crédito necessário para começar.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
