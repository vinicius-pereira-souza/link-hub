import { describe, it, expect, vi, beforeEach } from "vitest";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { signUpWithEmail, signInWithEmail } from "./actions";

vi.mock("next/headers", () => ({
  cookies: vi.fn(() => ({
    get: vi.fn(),
    set: vi.fn(),
  })),
  headers: vi.fn(() => new Headers()),
}));

vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

vi.mock("@/lib/auth/server", () => ({
  auth: {
    signUp: {
      email: vi.fn(),
    },
    signIn: {
      email: vi.fn(),
    },
  },
}));

describe("Authentication actions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("signUpWithEmail Server Action", () => {
    it("should return error messages on fields when Zod validation fails", async () => {
      const signUpEmailSpy = vi.mocked(auth.signUp.email);

      const formData = new FormData();
      formData.append("username", "john");
      formData.append("email", "john.dohn.com");
      formData.append("password", "asd");
      formData.append("confirmPassword", "asdffg");

      const result = await signUpWithEmail(undefined, formData);

      expect(result?.errors).toBeDefined();
      expect(result?.errors?.username).toContain(
        "O nome de usuário deve ter pelo menos 6 caracteres.",
      );
      expect(result?.errors?.email).toContain(
        "Por favor, insira um e-mail válido.",
      );
      expect(result?.errors?.password).toBeDefined();
      expect(result?.errors?.confirmPassword).toContain(
        "As senhas precisam ser iguais",
      );

      expect(signUpEmailSpy).not.toHaveBeenCalled();
      expect(redirect).not.toHaveBeenCalled();
    });

    it("should return a generic error_message when Neon Auth or the server fails", async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});
      const signUpEmailSpy = vi.mocked(auth.signUp.email);

      signUpEmailSpy.mockResolvedValueOnce({
        error: { message: "User already exists", status: 400 },
        data: null,
      });

      const formData = new FormData();
      formData.append("username", "johndoe");
      formData.append("email", "john@example.com");
      formData.append("password", "Password123!");
      formData.append("confirmPassword", "Password123!");

      const result = await signUpWithEmail(undefined, formData);

      expect(signUpEmailSpy).toHaveBeenCalledWith({
        email: "john@example.com",
        password: "Password123!",
        name: "johndoe",
      });

      expect(result).toEqual({
        error_message:
          "Houve um problema na realização do cadastro. Por favor, tente novamente mais tarde.",
      });

      expect(redirect).not.toHaveBeenCalled();
    });

    it("should call Neon Auth and redirect to '/dashboard' when everything is correct.", async () => {
      const signUpEmailSpy = vi.mocked(auth.signUp.email);

      signUpEmailSpy.mockResolvedValueOnce({
        error: null,
        data: {
          user: { id: "usr_123", email: "john@example.com" },
          session: null,
        },
      });

      const formData = new FormData();
      formData.append("username", "johndoe");
      formData.append("email", "john@example.com");
      formData.append("password", "Password123!");
      formData.append("confirmPassword", "Password123!");

      await signUpWithEmail(undefined, formData);

      expect(signUpEmailSpy).toHaveBeenCalledWith({
        email: "john@example.com",
        password: "Password123!",
        name: "johndoe",
      });

      expect(redirect).toHaveBeenCalledWith("/dashboard");
    });
  });

  describe("signInWithEmail Server Action", () => {
    it("should return error messages on fields when Zod validation fails", async () => {
      const signInEmailSpy = vi.mocked(auth.signIn.email);

      const formData = new FormData();
      formData.append("email", "john.dohn.com");
      formData.append("password", "asd");

      const result = await signInWithEmail(undefined, formData);

      expect(result?.errors).toBeDefined();
      expect(result?.errors?.email).toContain(
        "Por favor, insira um e-mail válido.",
      );
      expect(result?.errors?.password).toBeDefined();

      expect(signInEmailSpy).not.toHaveBeenCalled();
      expect(redirect).not.toHaveBeenCalled();
    });

    it("should return a generic error_message when Neon Auth or the server fails", async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});
      const signInEmailSpy = vi.mocked(auth.signIn.email);

      signInEmailSpy.mockResolvedValueOnce({
        error: { message: "User does not exist", status: 404 },
        data: null,
      });

      const formData = new FormData();
      formData.append("email", "john@example.com");
      formData.append("password", "Password123!Test");

      const result = await signInWithEmail(undefined, formData);

      expect(signInEmailSpy).toHaveBeenCalledWith({
        email: "john@example.com",
        password: "Password123!Test",
      });

      expect(result).toEqual({
        error_message:
          "Houve um problema na realização do login. Por favor, tente novamente mais tarde.",
      });

      expect(redirect).not.toHaveBeenCalled();
    });

    it("should call Neon Auth and redirect to '/dashboard' when everything is correct.", async () => {
      const signInEmailSpy = vi.mocked(auth.signIn.email);

      signInEmailSpy.mockResolvedValueOnce({
        data: {
          user: {
            id: "usr_123",
            email: "john@example.com",
            app_metadata: {},
            user_metadata: {},
            created_at: new Date().toISOString(),
          },
          session: {
            access_token: "fake-access-token",
            refresh_token: "fake-refresh-token",
            expires_in: 3600,
            token_type: "bearer",
            user: { id: "usr_123", email: "john@example.com" },
          },
        },
        error: null,
      });

      const formData = new FormData();
      formData.append("email", "john@example.com");
      formData.append("password", "Password123!Test");

      await signInWithEmail(undefined, formData);

      expect(signInEmailSpy).toHaveBeenCalledWith({
        email: "john@example.com",
        password: "Password123!Test",
      });

      expect(redirect).toHaveBeenCalledWith("/dashboard");
    });
  });
});
