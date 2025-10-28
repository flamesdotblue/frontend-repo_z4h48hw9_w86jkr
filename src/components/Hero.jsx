import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve contrast over Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 py-24">
        <span className="mb-4 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
          Trusted Physiotherapy Care
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Get Back to Movement —
          <br />
          <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Expert Physiotherapy Near You</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
          Personalized treatment plans for sports injuries, back pain, and post-surgery rehab. Multiple clinics, modern techniques, and empathetic care.
        </p>
        <div className="mt-8 flex w-full flex-col items-start gap-3 sm:flex-row">
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
