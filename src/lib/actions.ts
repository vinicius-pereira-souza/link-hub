"use server";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { type FormState, SignupFormSchema, SignInFormSchema } from "@/lib/zod";
import * as z from "zod";

export async function signUpWithEmail(
  _prevState: FormState,
  formData: FormData,
) {
  const validatedFields = SignupFormSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { email, username, password } = validatedFields.data;

  try {
    const { error } = await auth.signUp.email({
      email,
      password,
      name: username,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    return {
      error_message:
        "Houve um problema na realização do cadastro. Por favor, tente novamente mais tarde.",
    };
  }

  redirect("/dashboard");
}

export async function signInWithEmail(
  _prevState: FormState,
  formData: FormData,
) {
  const validatedFields = SignInFormSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const { error } = await auth.signIn.email({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    return {
      error_message:
        "Houve um problema na realização do login. Por favor, tente novamente mais tarde.",
    };
  }

  redirect("/dashboard");
}

export async function signOut() {
  try {
    const { error } = await auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    return {
      error_message:
        "Houve um problema na realização do LogOut. Por favor, tente novamente mais tarde.",
    };
  }

  redirect("/sign-in");
}
