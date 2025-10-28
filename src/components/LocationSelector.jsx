import React, { useEffect, useMemo, useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const BRANCHES = [
  {
    id: 'central',
    name: 'Central City Clinic',
    address: '101 Main Street, Central City',
    phone: '+1 (555) 101-0001',
    hours: 'Mon–Sat: 8:00 AM – 8:00 PM',
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    id: 'lakeview',
    name: 'Lakeview Physiotherapy',
    address: '22 Lakeview Ave, Lakeside',
    phone: '+1 (555) 222-0022',
    hours: 'Mon–Fri: 9:00 AM – 7:00 PM, Sat: 9:00 AM – 3:00 PM',
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: 'hillside',
    name: 'Hillside Rehab Center',
    address: '7 Hilltop Rd, Hillside',
    phone: '+1 (555) 333-0033',
    hours: 'Mon–Sun: 8:00 AM – 6:00 PM',
    lat: 40.7128,
    lng: -74.006,
  },
];

function distanceInKm(a, b) {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return R * c;
}

export default function LocationSelector() {
  const [selectedId, setSelectedId] = useState(BRANCHES[0].id);
  const [userLoc, setUserLoc] = useState(null);
  const [locating, setLocating] = useState(false);

  const selected = useMemo(
    () => BRANCHES.find((b) => b.id === selectedId) || BRANCHES[0],
    [selectedId]
  );

  useEffect(() => {
    // Attempt geolocation on mount to auto-suggest nearest branch
    setLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setUserLoc(coords);
          // Pick nearest
          let nearest = BRANCHES[0];
          let best = Infinity;
          for (const b of BRANCHES) {
            const d = distanceInKm(coords, { lat: b.lat, lng: b.lng });
            if (d < best) {
              best = d;
              nearest = b;
            }
          }
          setSelectedId(nearest.id);
          setLocating(false);
        },
        () => setLocating(false),
        { enableHighAccuracy: true, timeout: 8000 }
      );
    } else {
      setLocating(false);
    }
  }, []);

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${selected.lng - 0.02}%2C${selected.lat - 0.02}%2C${selected.lng + 0.02}%2C${selected.lat + 0.02}&layer=mapnik&marker=${selected.lat}%2C${selected.lng}`;

  return (
    <section id="locations" className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Find a Clinic Near You</h2>
            <p className="mt-2 text-slate-600">
              Auto-detected location {locating ? '(detecting...)' : userLoc ? '(suggested)' : ''} or select manually.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="branch" className="sr-only">Select Branch</label>
            <select
              id="branch"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:w-72"
            >
              {BRANCHES.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">{selected.name}</h3>
                  <p className="text-sm text-slate-600">{selected.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-600" />
                <a href={`tel:${selected.phone.replace(/[^+\d]/g, '')}`} className="text-sm font-medium text-slate-700 hover:text-emerald-600">
                  {selected.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-600" />
                <p className="text-sm text-slate-700">{selected.hours}</p>
              </div>
              <div className="pt-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    selected.lat + ',' + selected.lng
                  )}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-slate-800"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <iframe
                title="Clinic location map"
                className="h-72 w-full md:h-[22rem]"
                src={mapSrc}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
