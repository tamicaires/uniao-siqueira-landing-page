import { NextResponse } from "next/server"
import { storage } from "@/lib/storage"

export async function GET() {
  const posts = await storage.getAllPosts()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const { title, content, author } = await request.json()
  const post = await storage.addPost({ title, content, author })
  return NextResponse.json(post, { status: 201 })
}

