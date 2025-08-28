"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Login attempt:", { email, password });
    // TODO: Replace with real login logic (Firebase/Auth API)
    await fetch("/api/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password}),
});

  };

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
     await fetch("/api/signin/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password}),
});}

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl">Login</h2>

          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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
            <button onClick={handleLogin} className="btn btn-primary w-full">
              Login
            </button>
            <button type="submit" className="btn btn-primary w-full">
              Signup
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
