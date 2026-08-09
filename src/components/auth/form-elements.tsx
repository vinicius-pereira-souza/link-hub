import { ArrowRight } from "lucide-react";

interface PropsInput {
  label: string;
  type: InputTypes;
  name: string;
  placeholder: string;
}
type InputTypes = "text" | "email" | "password";

export function Input({ label, type, name, placeholder }: PropsInput) {
  return (
    <div className="text-left mb-4">
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

export function ButtomSubmit({ text }: { text: string }) {
  return (
    <>
      <button
        type="submit"
        className="w-full py-4 px-6 bg-indigo-900 text-white rounded-lg flex items-center justify-center 
        gap-x-3 font-light cursor-pointer transition-all hover:bg-indigo-800"
      >
        {text}
        <ArrowRight size={20} />
      </button>
    </>
  );
}
