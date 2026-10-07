"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/tw-merge";

export type FaqItemData = {
  question: string;
  answer: string;
};

export type FaqListProps = {
  questions: FaqItemData[];
};
export type FaqItemProps = FaqItemData;

export default function FaqAccordion({
  questions,
}: {
  questions: FaqItemProps[];
}) {
  return (
    <>
      {questions.map((faq: FaqItemProps) => (
        <FaqAccordionItem key={faq.question} {...faq} />
      ))}
    </>
  );
}

function FaqAccordionItem({ question, answer }: FaqItemData) {
  const [aswerOpen, setAswerOpen] = useState<boolean>(false);

  const handleToggleShowAswer = (e: React.ToggleEvent<HTMLDetailsElement>) => {
    if (e.newState == "open") {
      setAswerOpen(true);
    } else {
      setAswerOpen(false);
    }
  };

  return (
    <details
      onToggle={(e) => handleToggleShowAswer(e)}
      className={cn(
        `mb-3 bg-gray-200/30 border border-gray-100 transition-all rounded-xl`,
        aswerOpen && "bg-white border border-gray-100",
      )}
    >
      <summary className="flex items-center justify-between w-full p-6 cursor-pointer">
        {question}{" "}
        <ChevronDown className={cn(`transition`, aswerOpen && "rotate-180")} />
      </summary>
      <div
        className={cn(
          `overflow-hidden transition- p-6 pt-0 max-w-225 leading-7 text-zinc-600`,
        )}
      >
        <p>{answer}</p>
      </div>
    </details>
  );
}
