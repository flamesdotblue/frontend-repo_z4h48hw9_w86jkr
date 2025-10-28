import React from 'react';
import { HeartPulse, Dumbbell, Activity, Bone, StretchVertical, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    icon: HeartPulse,
    title: 'Post-Surgery Rehab',
    desc: 'Evidence-based protocols to restore strength and mobility after surgical procedures.',
  },
  {
    icon: Activity,
    title: 'Sports Injury',
    desc: 'Return-to-play programs for sprains, strains, tendon issues, and overuse injuries.',
  },
  {
    icon: Bone,
    title: 'Back & Neck Pain',
    desc: 'Manual therapy and stabilization exercises to relieve pain and improve posture.',
  },
  {
    icon: Dumbbell,
    title: 'Strength & Conditioning',
    desc: 'Personalized strength plans to prevent injury and enhance performance.',
  },
  {
    icon: StretchVertical,
    title: 'Mobility & Flexibility',
    desc: 'Targeted mobility work to increase range of motion and daily comfort.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Physiotherapy Services</h2>
            <p className="mt-2 max-w-2xl text-slate-600">Comprehensive care across prevention, recovery, and performance. Designed for every body and every goal.</p>
          </div>
          <a href="#booking" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">
            Book Appointment
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <div className="mt-4">
                <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">Learn more</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
