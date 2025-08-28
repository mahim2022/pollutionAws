// app/api/blog/route.ts
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: Request) {
  try {
    
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title");
 
    if (title) {
      const result = await pool.query(
        `SELECT id, title, content, created_at
         FROM blog_posts
         WHERE title = $1
         ORDER BY created_at DESC`,
        [title]
      );
      return NextResponse.json({ success: true, posts: result.rows });
    }

    const result = await pool.query(
      `SELECT id, title, content, created_at
       FROM blog_posts
       ORDER BY created_at DESC`
    );
    return NextResponse.json({ success: true, posts: result.rows });
  } catch (err) {
    console.error("/api/blog GET error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
