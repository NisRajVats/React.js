import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-orange-50 via-white to-orange-100">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-orange-300/40 via-rose-200/40 to-amber-200/40 blur-3xl"></div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <aside className="order-2 lg:order-1 relative overflow-hidden rounded-3xl shadow-2xl bg-white/70 border border-orange-200/60 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-orange-100/60" />
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating on React project"
              className="h-[420px] w-full object-cover"
            />
          </aside>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-700 drop-shadow-sm">
              About ReactWeb
            </h1>
            <p className="mt-5 text-base sm:text-lg text-orange-900/80 max-w-2xl mx-auto lg:mx-0">
              We craft tools and patterns that help developers build beautiful, accessible interfaces quickly. Our philosophy is simple: thoughtful defaults, flexible APIs, and delightful developer experience.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-md p-5 text-left shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-600 mt-1"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <h3 className="font-bold text-orange-800">Design-first components</h3>
                    <p className="text-sm text-orange-900/75">Carefully tuned spacing, color, and typography baked in.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-md p-5 text-left shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-600 mt-1"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <h3 className="font-bold text-orange-800">Performance focused</h3>
                    <p className="text-sm text-orange-900/75">Responsive by default and optimized for speed.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-md p-5 text-left shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-600 mt-1"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <h3 className="font-bold text-orange-800">Developer experience</h3>
                    <p className="text-sm text-orange-900/75">Predictable APIs that are easy to learn and extend.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-md p-5 text-left shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-600 mt-1"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <h3 className="font-bold text-orange-800">Accessible by default</h3>
                    <p className="text-sm text-orange-900/75">Best practices built-in so you can ship with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}