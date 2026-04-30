import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../lib/auth";
import LoginForm from "./login-form";

export default async function LoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-12 text-white">
      <section className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <p className="font-orbitron text-xs uppercase tracking-[0.3em] text-[color:var(--primary)]">
          Admin Access
        </p>
        <h1 className="mt-4 font-orbitron text-3xl font-bold">Login</h1>
        <p className="mt-3 text-sm text-white/65">
          Sign in to manage the cloud learning journal and admin panel.
        </p>
        <LoginForm />
      </section>
    </main>
  );
}
