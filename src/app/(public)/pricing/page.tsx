import WrapperButtonCallapseList from "@/components/landing-page/collapse-buttons";
import PricingPlans from "@/components/landing-page/plans";
import { questionPricingPage } from "@/lib/placeholder";
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
    </div>
  );
}
