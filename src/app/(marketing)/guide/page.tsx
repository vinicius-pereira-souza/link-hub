import Image from "next/image";
import WrapperCardDetails from "@/components/marketing/cards-detail-guia";
import WrapperButtonCallapseList from "@/components/marketing/collapse-buttons";
import { questionGuiaPage } from "@/lib/marketing-data.ts";
import ButtonLink from "@/components/marketing/button-link";

export default function Guia() {
  return (
    <div>
      <main className="px-6">
        <section className="max-w-268 mx-auto pt-0 my-20">
          <h1 className="text-[40px] leading-12 font-semibold text-zinc-900 mb-6 text-center">
            Como começar no LinkHub
          </h1>
          <h2 className="text-lg leading-7 text-zinc-600 mb-20 text-center">
            Seu guia passo a passo para criar uma presença digital marcante em
            minutos.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WrapperCardDetails />
          </div>
        </section>
      </main>
      <figure className="px-6 mt-20 mb-30">
        <div className="max-w-268 mx-auto h-100 relative">
          <Image
            className="rounded-2xl object-cover hidden md:block"
            src={"/images/guia-banner-desktop.png"}
            alt="banner ilustrando um disposivito de celular"
            fill
          />
          <Image
            className="rounded-2xl object-cover block md:hidden "
            src={"/images/guia-banner-mobile.png"}
            alt="banner ilustrando um disposivito de celular"
            fill
          />
        </div>
      </figure>
      <section className="px-6">
        <div className="max-w-3xl mx-auto pt-0 my-20">
          <h2 className="text-[32px] leading-10 font-semibold text-zinc-900 mb-20 text-center">
            Dúvidas Frequentes
          </h2>
          <WrapperButtonCallapseList questionList={questionGuiaPage} />
        </div>
      </section>
      <section className="px-6 mb-20">
        <div className="max-w-268 mx-auto py-20 px-6 md:p-20 bg-indigo-900 rounded-2xl text-center">
          <h3 className="text-[32px] leading-10 text-white font-semibold mb-6">
            Pronto para começar?
          </h3>
          <h4 className="text-lg leading-7 text-white mb-12">
            Crie sua página agora e leve sua presença digital para o próximo
            nível.
          </h4>
          <ButtonLink
            href="/auth/sign-in"
            label="Comece gratuitamente"
            className="bg-white hover:shadow-2xl text-indigo-800 
            transition-all text-lg font-bold max-w-89.25 mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
