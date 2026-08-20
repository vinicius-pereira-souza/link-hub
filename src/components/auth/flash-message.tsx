"use client";

import { useEffect } from "react";
import { cn } from "@/lib/tw-merge";
import { useMessageStore } from "@/providers/message-store-provider";
import { CircleCheck, CircleAlert, X } from "lucide-react";

const messageObject = {
  success: {
    icon: <CircleCheck color="#37437A" />,
    boxStyle: "bg-white border-neutral-300/30 text-zinc-900",
  },
  erro: {
    icon: <CircleAlert color="#93000A" />,
    boxStyle: "bg-rose-200 border-red-700/10 text-red-800",
  },
  tip: {
    icon: <CircleCheck color="#D0D6FF" />,
    boxStyle: "bg-slate-500 border-indigo-900/10 text-indigo-200",
  },
};

export default function FlashMessage() {
  const { type, message, hasMessage, hiddenMessage } = useMessageStore(
    (state) => state,
  );

  const currentMessageType = messageObject[type ? type : "success"];

  useEffect(() => {
    if (!hasMessage) return;

    const timer = setTimeout(() => {
      hiddenMessage();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [hasMessage, hiddenMessage]);

  const onHiddenFlashMessage = () => {
    hiddenMessage();
  };

  if (!hasMessage) return null;

  return (
    <div
      data-testid="flash-message-card"
      className={cn(
        `flex items-center gap-3 fixed top-3.5 right-3.5 z-10 p-4 pr-6  min-w-90 rounded-lg shadow`,
        currentMessageType.boxStyle,
      )}
    >
      {currentMessageType.icon}
      <span className="flex-1">{message}</span>
      <button
        data-testid="button-hidden-message"
        className="block w-3 cursor-pointer"
        onClick={onHiddenFlashMessage}
      >
        <X />
      </button>
    </div>
  );
}
