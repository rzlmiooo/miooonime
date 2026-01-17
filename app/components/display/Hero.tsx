import BackgroundBeams from "./BackgroundBeams";

export function Hero() {
  return (
    <section className="relative isolate h-full overflow-hidden bg-slate-950">
      <BackgroundBeams />

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center text-white">
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
          🚀 Auth Starter
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Build{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Next.js Auth
          </span>{" "}
          Faster
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-slate-400">
          JWT authentication, Aiven-ready database, Tailwind UI, and clean API
          structure. Production-ready starter.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/auth/register"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
          >
            Get Started
          </a>

          <a
            href="/auth/login"
            className="rounded-xl border border-white/10 px-6 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
