import { db } from "@/src/db";
import { postsTable } from "@/src/db/schema";
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const posts = await db.select().from(postsTable);
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    const { title, content, userId, id } = await req.json();
    const post = await db.insert(postsTable).values({ title, content, userId, id });
    return NextResponse.json(post);
}