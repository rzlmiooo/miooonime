"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "./components/display/AuthCard";
import PrimaryButton from "./components/display/PrimaryButton";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/v1/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch(() => {
        localStorage.removeItem("token");
        router.push("/auth/login");
      })
      .finally(() => setLoading(false));
  }, []);

  function logout() {
    localStorage.removeItem("token");
    router.push("/auth/login");
  }

  if (loading) {
    return (
      <AuthCard title="Profile">
        <p className="text-center text-slate-400">Loading...</p>
      </AuthCard>
    );
  }

  if (!user) return null;

  return (
    <AuthCard title="Profile">
      <div className="space-y-4 text-slate-200">
        <div className="rounded-lg bg-slate-800 p-4">
          <p className="text-sm text-slate-400">ID</p>
          <p className="font-medium">{user.id}</p>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <p className="text-sm text-slate-400">Nama</p>
          <p className="font-medium">{user.name}</p>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <p className="text-sm text-slate-400">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>

        <PrimaryButton>
          <a href={`/users/${user.id}/edit`}>Edit Profile</a>
        </PrimaryButton>

        <button
          onClick={logout}
          className="w-full rounded-lg border border-red-500 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Logout
        </button>
      </div>
    </AuthCard>
  );
}
