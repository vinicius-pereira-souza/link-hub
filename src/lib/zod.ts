import * as z from "zod";

export const SignupFormSchema = z
  .object({
    username: z.z
      .string()
      .min(6, { error: "O nome de usuário deve ter pelo menos 6 caracteres." })
      .trim(),
    email: z.email({
      error: "Por favor, insira um e-mail válido.",
    }),
    password: z
      .string()
      .min(8, { error: "A senha deve ter pelo menos 6 caracteres." })
      .regex(/[a-zA-Z]/, { error: "Conter pelo menos uma letra." })
      .regex(/[0-9]/, { error: "Contenha pelo menos um número." })
      .regex(/[^a-zA-Z0-9]/, {
        error: "Contenha pelo menos um caractere especial.",
      })
      .trim(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

export type FormState =
  | {
      error_message?: string;
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;
