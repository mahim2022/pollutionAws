import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-primary text-primary-content shadow-lg">
        <div className="flex-1">
          <a href="/homepage" className="btn btn-ghost normal-case text-xl">
            Pollution Blog
          </a>
        </div>
        <div className="flex-none">
          <a href="/homepage" className="btn btn-ghost">Home</a>
          <a href="/air-pollution" className="btn btn-ghost">Air</a>
          <a href="/water-pollution" className="btn btn-ghost">Water</a>
          <a href="/deforestation" className="btn btn-ghost">Deforestation</a>
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-primary text-primary-content mt-12">
        <div>
          <p>© 2025 Pollution Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
