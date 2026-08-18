"use client";
import { useActionState } from "react";
import { Input, ButtomSubmit } from "./form-elements";
import { signUpWithEmail } from "@/lib/actions";
import WrapperErrorMessages from "./error-message";

export function RegisterForm() {
  const [state, action, isPending] = useActionState(signUpWithEmail, undefined);

  return (
    <form action={action}>
      <Input
        label="Nome de Usuário"
        type="text"
        name="username"
        placeholder="jonhDoh"
      />
      {state?.errors?.username && (
        <WrapperErrorMessages errors={state.errors.username} />
      )}
      <Input
        label="Endereço de E-mail"
        type="email"
        name="email"
        placeholder="jonh.doh@company.com"
      />
      {state?.errors?.email && (
        <WrapperErrorMessages errors={state.errors.email} />
      )}
      <Input
        label="Senha"
        type="password"
        name="password"
        placeholder="**********"
      />
      {state?.errors?.password && (
        <WrapperErrorMessages errors={state.errors.password} />
      )}
      <Input
        label="Confirmação de Senha"
        type="password"
        name="confirmPassword"
        placeholder="**********"
      />
      {state?.errors?.confirmPassword && (
        <WrapperErrorMessages errors={state.errors.confirmPassword} />
      )}
      <ButtomSubmit text="Cadastrar-se" isPending={isPending} />
      {state?.error_message && (
        <span className="block text-sm text-red-600 mt-6">
          {state.error_message}
        </span>
      )}
    </form>
  );
}
