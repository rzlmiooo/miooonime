import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const auth = req.headers.get("authorization");

  if (!auth) {
    return NextResponse.json({ message: "No token" }, { status: 401 });
  }

  const token = auth.replace("Bearer ", "");

  try {
    const payload: any = verifyToken(token);

    const [rows]: any = await db.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [payload.id]
    );

    return NextResponse.json(rows[0]);
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
