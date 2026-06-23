import WrapperCardDetails from "@/components/landing-page/cards-detail-guia";

export default function Guia() {
  return (
    <div>
      <main>
        <section className="max-w-268 mx-auto pt-0 my-20">
          <h1 className="text-[40px] leading-12 font-semibold text-zinc-900 mb-6 text-center">
            Como começar no LinkHub
          </h1>
          <h2 className="text-lg leading-7 text-zinc-600 mb-20 text-center">
            Seu guia passo a passo para criar uma presença digital marcante em
            minutos.
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <WrapperCardDetails />
          </div>
        </section>
      </main>
    </div>
  );
}
