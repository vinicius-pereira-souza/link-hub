"use client";
import { useActionState, useEffect } from "react";
import { Input, ButtomSubmit } from "./form-elements";
import { signUpWithEmail, signInWithEmail } from "@/lib/actions";
import WrapperErrorMessages from "./error-message";
import { useMessageStore } from "@/providers/message-store-provider";

export function SignUpForm() {
  const [state, action, isPending] = useActionState(signUpWithEmail, undefined);
  const showMessage = useMessageStore((state) => state.showMessage);

  useEffect(() => {
    if (!state?.error_message) return;

    showMessage({ type: "erro", message: state?.error_message });
  }, [state?.error_message, showMessage]);

  return (
    <form action={action} data-testid="sign-up-form">
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
    </form>
  );
}

export function SignInForm() {
  const [state, action, isPending] = useActionState(signInWithEmail, undefined);
  const showMessage = useMessageStore((state) => state.showMessage);

  useEffect(() => {
    if (!state?.error_message) return;

    showMessage({ type: "erro", message: state?.error_message });
  }, [state?.error_message, showMessage]);

  return (
    <form action={action} data-testid="sign-in-form">
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
      <ButtomSubmit text="Entrar" isPending={isPending} />
    </form>
  );
}
