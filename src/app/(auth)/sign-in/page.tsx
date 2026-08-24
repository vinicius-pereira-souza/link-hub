import Link from "next/link";
import { SignInForm } from "@/components/auth/forms";

export default function SignIn() {
  return (
    <div className="self-stretch">
      <h2 className="text-base text-zinc-600 mb-12">
        Junte-se ao LinkHub e organize seu mundo digital
      </h2>
      <div className="bg-white p-12 rounded-xl max-w-110 mx-auto mb-12">
        <SignInForm />
      </div>
      <p className="text-zinc-600 text-base">
        Já possui uma conta?{" "}
        <Link href="/sign-up" className="text-indigo-900">
          entrar gratuitamente
        </Link>
      </p>
    </div>
  );
}
