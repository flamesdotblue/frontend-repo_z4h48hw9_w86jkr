import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = '+15551010001';
  const message = encodeURIComponent('Hello! I would like to book a physiotherapy appointment.');
  const waLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${message}`;

  return (
    <section id="contact" className="relative bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 p-8 ring-1 ring-emerald-100">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900">Ready to start your recovery?</h3>
              <p className="mt-2 max-w-2xl text-slate-700">Reach out for same-day appointments and personalized treatment plans. We’ll match you with the right therapist.</p>
            </div>
            <div className="flex flex-col items-stretch gap-3 md:items-end">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              >
                Book Online
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="tel:+15551010001"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
