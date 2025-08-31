import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-orange-50 via-white to-orange-100">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-orange-300/40 via-rose-200/40 to-amber-200/40 blur-3xl"></div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info panel with image */}
          <aside className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/70 border border-orange-200/60 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
              alt="Friendly support and communication"
              className="h-72 sm:h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-orange-200 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400" />
              <div>
                <p className="text-sm font-semibold text-orange-800">We’re here to help</p>
                <p className="text-xs text-orange-900/70">Response within 1–2 business days</p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h1 className="text-3xl sm:text-4xl text-orange-700 font-extrabold tracking-tight">Get in touch</h1>
            <p className="text-normal text-lg font-medium text-orange-900/80 mt-2">
              Fill in the form to start a conversation.
            </p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col sm:col-span-1">
                <label htmlFor="name" className="text-sm font-semibold text-orange-900/80">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane Doe"
                  className="mt-2 py-3 px-3 rounded-lg bg-white border border-orange-200 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col sm:col-span-1">
                <label htmlFor="email" className="text-sm font-semibold text-orange-900/80">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jane@example.com"
                  className="mt-2 py-3 px-3 rounded-lg bg-white border border-orange-200 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col sm:col-span-1">
                <label htmlFor="tel" className="text-sm font-semibold text-orange-900/80">Phone</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="+44 1234 567890"
                  className="mt-2 py-3 px-3 rounded-lg bg-white border border-orange-200 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-orange-900/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about your project..."
                  className="mt-2 py-3 px-3 rounded-lg bg-white border border-orange-200 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 shadow-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/70 border border-orange-200 rounded-xl p-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-6 h-6 text-orange-600">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-semibold text-orange-900/80">Acme Inc, Street, State</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 border border-orange-200 rounded-xl p-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-6 h-6 text-orange-600">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-semibold text-orange-900/80">+44 1234567890</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 border border-orange-200 rounded-xl p-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-6 h-6 text-orange-600">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="text-sm font-semibold text-orange-900/80">info@acme.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}