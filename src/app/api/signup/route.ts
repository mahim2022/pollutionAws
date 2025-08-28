import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcrypt";

// Create table if not exists
async function ensureUsersTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
}

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Ensure users table exists
    await ensureUsersTable();

    // Check if username already exists
    const existing = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (existing.rows.length > 0) {
      return NextResponse.json(
        { success: false, error: "Username already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, created_at",
      [username, hashedPassword]
    );

    return NextResponse.json({ success: true, user: result.rows[0] });
  } catch (err) {
    console.error("Error creating user:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
