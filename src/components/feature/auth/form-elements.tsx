import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/tw-merge";
interface PropsInput {
  label: string;
  type: InputTypes;
  name: string;
  placeholder: string;
  subClass?: string | string[];
}
type InputTypes = "text" | "email" | "password";

export function Input({
  label,
  type,
  name,
  placeholder,
  subClass,
}: PropsInput) {
  return (
    <div className={cn(`text-left mb-2`, subClass)}>
      <label
        className="text-zinc-900 mb-1.5 font-medium text-sm"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="block w-full py-3 px-6 bg-gray-50 border border-neutral-300
         placeholder:text-zinc-500/50 rounded-lg"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export function ButtomSubmit({
  text,
  isPending,
}: {
  text: string;
  isPending: boolean;
}) {
  return (
    <>
      <button
        data-testid="button-submit-form"
        type="submit"
        className={cn(
          `w-full py-4 px-6 bg-indigo-900 text-white rounded-lg flex items-center justify-center 
        gap-x-3 font-light cursor-pointer transition-all hover:bg-indigo-800 mt-5`,
          isPending && "bg-indigo-400 hover:bg-indigo-400 cursor-auto",
        )}
        disabled={isPending}
      >
        {text}
        <ArrowRight size={20} />
      </button>
    </>
  );
}
