"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";

type Post = { id: number; title: string; content: string; created_at: string };

export default function AirPollution() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog?title=Air%20Pollution")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.posts?.length) {
          setPost(data.posts[0]);
        } else {
          setPost(null);
        }
      })
      .catch((err) => {
        console.error("fetch /api/blog error:", err);
        setPost(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="hero min-h-[300px] bg-gradient-to-r from-yellow-700 to-orange-500 text-white">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Air Pollution</h1>
            <p className="py-4 text-lg">
              Harmful particles in the air affect human health and the environment.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-6 md:px-20">
        {loading ? (
          <p>Loading...</p>
        ) : post ? (
          <>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="mb-6 whitespace-pre-line">{post.content}</p>

            <h2 className="text-3xl font-bold mb-6">Sources</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Vehicle emissions</li>
              <li>Industrial pollution</li>
              <li>Burning of fossil fuels</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Solutions</h2>
            <p>
              Switching to clean energy, improving public transportation, and
              enforcing emissions regulations help reduce air pollution.
            </p>
          </>
        ) : (
          <p>Post not found.</p>
        )}
      </div>
    </Layout>
  );
}
