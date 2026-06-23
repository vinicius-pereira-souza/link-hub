"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/tw-merge";

export interface Question {
  question: string;
  aswer: string;
}

export default function WrapperButtonCallapseList({
  questionList,
}: {
  questionList: Question[];
}) {
  return (
    <>
      {questionList.map(({ aswer, question }: Question) => (
        <QuestionsButtonCallapse
          key={question}
          question={question}
          aswer={aswer}
        />
      ))}
    </>
  );
}

function QuestionsButtonCallapse({ question, aswer }: Question) {
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
        <p>{aswer}</p>
      </div>
    </details>
  );
}
