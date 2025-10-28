import React from 'react';
import Hero from './components/Hero';
import LocationSelector from './components/LocationSelector';
import Services from './components/Services';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <LocationSelector />
      <Services />

      {/* Booking anchor target for CTAs; can be wired to backend later */}
      <section id="booking" className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Quick Booking</h2>
              <p className="mt-2 max-w-2xl text-slate-300">Choose your preferred clinic and time at checkout. No payment required to reserve.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Contact to Book
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} MoveWell Physiotherapy. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#locations" className="hover:text-slate-900">Locations</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
