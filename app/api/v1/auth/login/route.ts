import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const [rows]: any = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (!rows.length) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const user = rows[0];
  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return NextResponse.json({ message: "Wrong password" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );

  return NextResponse.json({
    message: "Login success",
    token,
  });
}
