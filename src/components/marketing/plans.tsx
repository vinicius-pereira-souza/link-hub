"use client";

import { useState } from "react";
import { cn } from "@/lib/tw-merge";
import { CircleCheck } from "lucide-react";
import { optionsPlansData } from "@/lib/marketing-data.ts";

interface CardPrice {
  title: string;
  price: number;
  advantages: string[];
}

export default function PricingPlans() {
  const [planTime, setPlanTime] = useState<boolean>(false);

  const onChangePlanTime = () => {
    setPlanTime((prevState) => !prevState);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-x-3 md:gap-x-6 text-zinc-700 text-sm leading-5 mx-auto mb-12">
        <span>mensal</span>
        <button
          className="block rounded-full w-14 h-8 bg-gray-200 relative cursor-pointer"
          onClick={() => onChangePlanTime()}
        >
          <span
            className={cn(
              `block w-6 h-6 rounded-full bg-indigo-900 absolute top-1 left-1 transition-all`,
              planTime && " left-auto right-1",
            )}
          />
        </button>
        <span>
          anual{" "}
          <span className="font-semibold text-indigo-900">(Economize 20%)</span>
        </span>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-6 md:gap-x-3.5 ">
        {optionsPlansData.map((planData: CardPrice) => (
          <CardPlan key={planData.title} planTime={planTime} {...planData} />
        ))}
      </section>
    </div>
  );
}

interface CardProps extends CardPrice {
  planTime: boolean;
}

function CardPlan({ title, price, advantages, planTime }: CardProps) {
  const priceUpdate = (): number => {
    if (!planTime) return price;

    if (title == "pro") return price - 3;
    if (title == "premiun") return price - 10;

    return 0;
  };

  return (
    <article
      className={cn(
        `p-20 rounded-2xl border border-gray-100 grid grid-cols-1 grid-rows-[auto_auto_1fr]
    hover:shadow-2xl transition-all relative min-h-171.5`,
        title == "pro"
          ? "border-2 border-indigo-900 bg-white py-24"
          : "bg-white/70",
      )}
    >
      {title == "pro" && (
        <span className="block py-1 px-6 rounded-full bg-indigo-900 absolute -top-4 right-2/4 translate-x-2/4 text-white font-bold text-sm  tracking-[1.2px] uppercase  text-center">
          mais popular
        </span>
      )}
      <div>
        <span className="text-xs font-bold text-zinc-700 mb-2 block uppercase">
          {title}
        </span>
        <span className="text-[32px] font-bold text-zinc-900 mb-12">
          ${priceUpdate()}
          <span className="text-base font-normal text-zinc-700">
            {title == "pro" ? "mo" : title}
          </span>
        </span>
      </div>
      <ul className="mt-12">
        {advantages.map((advantage: string) => (
          <li
            className="grid grid-cols-[16px_1fr] items-center gap-x-6 text-base leading-6 text-zinc-900 
             mb-6"
            key={advantage}
          >
            <CircleCheck
              className={cn(
                title === "pro"
                  ? "bg-indigo-900 text-white rounded-full"
                  : "text-indigo-900",
              )}
            />
            {advantage}
          </li>
        ))}
      </ul>
      <button
        disabled
        className={cn(
          `block p-6 rounded-lg text-center text-sm leading-5 mt-auto`,
          title == "pro"
            ? `bg-zinc-400 text-white`
            : `border border-gray-300 text-gray-200`,
        )}
      >
        Funcionalidade não disponivel
      </button>
    </article>
  );
}
