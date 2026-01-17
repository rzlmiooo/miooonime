"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Auth<span className="text-blue-400">Starter</span>
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#docs"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Docs
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Pricing
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
