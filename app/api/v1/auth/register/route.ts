import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed]
  );

  return NextResponse.json({ message: "Register success" });
}
