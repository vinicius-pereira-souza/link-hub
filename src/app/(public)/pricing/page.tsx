import ButtonLink from "@/components/landing-page/button-link";
import WrapperButtonCallapseList from "@/components/landing-page/collapse-buttons";
import CompareFeaturesTable from "@/components/landing-page/compare-features-table";
import PricingPlans from "@/components/landing-page/plans";
import { questionPricingPage } from "@/lib/landing-page-data.ts";
import { TriangleAlert } from "lucide-react";

export default function Pricing() {
  return (
    <div>
      <div
        className="bg-rose-200 flex items-center justify-center 
      py-3 px-6 text-red-800 text-sm sticky top-0 z-10 gap-3"
      >
        <TriangleAlert width={16} />
        <p>
          INFORMAÇÃO IMPORTANTE: Esta página é apenas visual/demonstrativa, os
          planos NÃO estão funcionalmente ativos.
        </p>
      </div>
      <main className="px-6">
        <section className="max-w-268 mx-auto pt-0 my-20">
          <h1 className="text-[40px] leading-12 font-semibold text-zinc-900 mb-6 text-center">
            Escolha o plano perfeito para a sua presença digital
          </h1>
          <h2 className="text-lg leading-7 text-zinc-600 mb-12 text-center">
            Preços simples e transparentes para indivíduos e equipes que
            valorizam a curadoria.
          </h2>

          <PricingPlans />
        </section>
      </main>
      <section className="px-6">
        <div className="max-w-3xl mx-auto pt-0 my-20">
          <h2 className="text-[32px] leading-10 font-semibold text-zinc-900 mb-20 text-center">
            Dúvidas Frequentes
          </h2>
          <WrapperButtonCallapseList questionList={questionPricingPage} />
        </div>
      </section>
      <section className="px-6">
        <div className="max-w-268 mx-auto pt-0 my-20">
          <h2 className="text-[32px] leading-10 font-semibold text-zinc-900 mb-20 text-center">
            Compare os Recursos
          </h2>
          <CompareFeaturesTable />
        </div>
      </section>
      <section className="px-6 mb-20">
        <div className="max-w-268 mx-auto p-20 bg-indigo-100 rounded-2xl text-center">
          <h3 className="text-[32px] leading-10 text-blue-950 font-semibold mb-6">
            Pronto para fazer a curadoria da sua presença na web?
          </h3>
          <h4 className="text-lg leading-7 text-indigo-800 mb-12">
            Junte-se a mais de 50.000 criadores que confiam no LinkHub para sua
            presença digital.
          </h4>
          <ButtonLink
            href="/auth/sign-in"
            label="Comece gratuitamente"
            className="bg-indigo-800 hover:shadow-2xl text-white
                  transition-all text-lg font-bold max-w-89.25 mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
