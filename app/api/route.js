import { connectDB } from "@/_lib/config/db";
import ProjectModel from "@/_lib/models/projectModel";
import { NextResponse } from "next/server";

const loadDb = async () => {
  await connectDB();
};

loadDb();

export async function GET() {
  const projects = await ProjectModel.find({});

  return NextResponse.json({ projects });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await ProjectModel.create({ title, description });
  return NextResponse.json({ message: "Action created successfully" });
}
export async function DELETE(request) {
  const url = new URL(request.url);
  const mongoId = url.searchParams.get("mongoId");

  await ProjectModel.findByIdAndDelete(mongoId);

  return NextResponse.json({ message: "Action deleted successfully" });
}
export async function PUT(request) {
  const url = new URL(request.url);
  const mongoId = url.searchParams.get("mongoId");

  await ProjectModel.findByIdAndUpdate(mongoId, { $set: { isCompleted: true } });

  return NextResponse.json({ message: "Action completed successfully" });
}
