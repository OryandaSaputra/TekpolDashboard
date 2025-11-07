import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const apps = await prisma.app.findMany({ orderBy: [{ category: "asc" }, { name: "asc" }] });
  return NextResponse.json(apps);
}
