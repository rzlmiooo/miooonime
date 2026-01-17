import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyToken } from "@/lib/auth";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(
  req: Request,
  { params }: Params
) {
  const auth = req.headers.get("authorization");

  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const token = auth.replace("Bearer ", "");
    const payload: any = verifyToken(token);

    if (payload.id !== Number(params.id)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const [rows]: any = await db.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [params.id]
    );

    if (!rows.length) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

export async function PUT(
  req: Request,
  { params }: Params
) {
  const auth = req.headers.get("authorization");

  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const token = auth.replace("Bearer ", "");
    const payload: any = verifyToken(token);

    if (payload.id !== Number(params.id)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const { name, email } = await req.json();

    await db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, params.id]
    );

    return NextResponse.json({ message: "User updated" });
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

export async function DELETE(
  req: Request,
  { params }: Params
) {
  const auth = req.headers.get("authorization");

  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const token = auth.replace("Bearer ", "");
    const payload: any = verifyToken(token);

    if (payload.id !== Number(params.id)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    await db.query(
      "DELETE FROM users WHERE id = ?",
      [params.id]
    );

    return NextResponse.json({ message: "User deleted" });
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
