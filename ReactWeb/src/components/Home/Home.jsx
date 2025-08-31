import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-orange-50 via-white to-orange-100">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-orange-300/40 via-rose-200/40 to-amber-200/40 blur-3xl"></div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-700 drop-shadow-sm">
              Build Modern UIs Effortlessly
            </h1>
            <p className="mt-5 text-base sm:text-lg text-orange-900/80 max-w-2xl mx-auto lg:mx-0">
              ReactWeb helps you prototype faster with beautiful defaults, clean components, and developer-friendly patterns. Ship delightful experiences with less code and more consistency.
            </p>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                <svg className="mr-2" fill="white" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3l10 6-10 6-10-6 10-6zm0 8.197l8-4.8v9.206l-8 4.8-8-4.8V6.397l8 4.8z"/></svg>
                Get Started
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-orange-700 bg-white border border-orange-200 shadow-sm hover:border-orange-300 hover:bg-orange-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <aside className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/70 border border-orange-200/60 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-orange-100/60" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Developer workspace with code and design tools"
                className="h-[420px] w-full object-cover"
              />
            </aside>

            {/* Floating card */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-orange-200 rounded-2xl shadow-xl px-4 py-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400" />
              <div>
                <p className="text-sm font-semibold text-orange-800">Ship faster</p>
                <p className="text-xs text-orange-900/70">Pre-styled components and patterns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-md p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 grid place-items-center text-white font-bold shadow">UI</div>
            <h3 className="mt-4 text-lg font-bold text-orange-800">Beautiful by default</h3>
            <p className="mt-2 text-sm text-orange-900/75">Thoughtful spacing, color, and typography so you focus on building.</p>
          </div>
          <div className="group rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-md p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400 grid place-items-center text-white font-bold shadow">DX</div>
            <h3 className="mt-4 text-lg font-bold text-orange-800">Developer focused</h3>
            <p className="mt-2 text-sm text-orange-900/75">Predictable APIs, small footprint, and easy customization.</p>
          </div>
          <div className="group rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-md p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-400 to-rose-400 grid place-items-center text-white font-bold shadow">⚡</div>
            <h3 className="mt-4 text-lg font-bold text-orange-800">Performance first</h3>
            <p className="mt-2 text-sm text-orange-900/75">Responsive and accessible out of the box, optimized for speed.</p>
          </div>
        </div>
      </section>

      {/* Secondary banner with improved image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-orange-200 bg-white/70 backdrop-blur-md">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80"
            alt="Clean code on a laptop with a minimal workspace"
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent" />
        </div>
        <h2 className="text-center text-2xl sm:text-5xl py-10 font-extrabold text-orange-700 drop-shadow">
          Create. Innovate. Deploy.
        </h2>
      </section>
    </div>
  );
}