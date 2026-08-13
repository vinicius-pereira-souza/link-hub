"use client";
import { useActionState } from "react";
import { Input, ButtomSubmit } from "./form-elements";
import { signUpWithEmail } from "@/lib/actions";

export function RegisterForm() {
  const [state, action, isPending] = useActionState(signUpWithEmail, null);

  return (
    <form action="">
      <Input
        label="Nome de Usuário"
        type="text"
        name="username"
        placeholder="jonhDoh"
      />
      <Input
        label="Endereço de E-mail"
        type="email"
        name="email"
        placeholder="jonh.doh@company.com"
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        placeholder="**********"
      />
      <Input
        label="Confirmação de Senha"
        type="password"
        name="confirmPassword"
        placeholder="**********"
      />
      <ButtomSubmit text="Entrar" />
    </form>
  );
}
