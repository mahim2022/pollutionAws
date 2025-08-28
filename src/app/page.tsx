"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Login attempt:", { email, password });
    // TODO: Replace with real login logic (Firebase/Auth API)
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "alice", password: "mypassword123" }),
});

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl">Login</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Button */}
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Register Link */}
          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="link link-primary">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
