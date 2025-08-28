"use client";
import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();

  return (
    <Layout>
    {/* <div className="min-h-screen bg-base-200">
      Navbar
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            🌍 Pollution Blog
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="hero bg-base-200 py-10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Understanding Pollution</h1>
            <p className="py-6">
              Stay informed about environmental issues, sustainable practices,
              and global efforts to reduce pollution.
            </p>
            <Link href="#posts" className="btn btn-primary">Read Articles</Link>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div id="posts" className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Post Card */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://source.unsplash.com/600x400/?pollution,air" alt="Air Pollution"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Air Pollution</h2>
            <p>
              Learn how air pollution impacts health and what we can do to
              reduce it.
            </p>
            <div className="card-actions justify-end">
              <Link href="/air-pollution" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://source.unsplash.com/600x400/?plastic,water" alt="Water Pollution"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Water Pollution</h2>
            <p>
              Explore the causes of water contamination and its global effects.
            </p>
            <div className="card-actions justify-end">
              <Link href="/water-pollution" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://source.unsplash.com/600x400/?forest,earth" alt="Deforestation"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Deforestation</h2>
            <p>
              Understand how deforestation contributes to climate change and
              pollution.
            </p>
            <div className="card-actions justify-end">
              <Link href="/deforestation" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="footer footer-center p-6 bg-base-300 text-base-content mt-10">
        <aside>
          <p>© {new Date().getFullYear()} Pollution Blog. All rights reserved.</p>
        </aside>
      </footer>
    </div> */}
    </Layout>
  );
}
