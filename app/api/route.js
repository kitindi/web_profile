import { connectDB } from "@/_lib/config/db";
import ProjectModel from "@/_lib/models/projectModel";
import { NextResponse } from "next/server";

const loadDb = async () => {
  await connectDB();
};

loadDb();

export async function GET() {
  return NextResponse.json({ message: "get method GEt" });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await ProjectModel.create({ title, description });
  return NextResponse.json({ message: "Action created successfully" });
}
