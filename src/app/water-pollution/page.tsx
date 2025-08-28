"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";

type Post = { id: number; title: string; content: string; created_at: string };

export default function WaterPollution() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog?title=Water%20Pollution")
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
      <div className="hero min-h-[300px] bg-gradient-to-r from-blue-700 to-teal-500 text-white">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Water Pollution</h1>
            <p className="py-4 text-lg">
              Contaminated water threatens ecosystems and human health.
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
              <li>Industrial waste</li>
              <li>Agricultural runoff (fertilizers, pesticides)</li>
              <li>Plastic pollution</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Solutions</h2>
            <p>
              Proper waste management, reducing single-use plastics, and treating
              industrial effluents can prevent water pollution.
            </p>
          </>
        ) : (
          <p>Post not found.</p>
        )}
      </div>
    </Layout>
  );
}
