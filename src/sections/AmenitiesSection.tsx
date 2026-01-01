import { Amenity } from '../lib/types';

type AmenitiesSectionProps = {
  amenities: Amenity[];
  loading?: boolean;
};

export default function AmenitiesSection({ amenities, loading }: AmenitiesSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="amenities">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">Amenities</div>
          <h2 className="font-display text-3xl text-slate-900">Spaces to slow down</h2>
          <p className="text-slate-600">Wellness, dining, and quiet lounges designed with the coastline in mind.</p>
        </div>
        <span className="rounded-full bg-sand-100 px-4 py-2 text-xs font-semibold text-slate-700">
          Thoughtful details, always included
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {loading
          ? new Array(4).fill(null).map((_, index) => (
              <div key={index} className="card-surface h-36 animate-pulse bg-sand-50" />
            ))
          : amenities.map((amenity) => (
              <article key={amenity.id} className="card-surface flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-600 font-semibold">
                    {amenity.icon.toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{amenity.title}</h3>
                    <p className="text-sm text-slate-600">{amenity.description}</p>
                  </div>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
}
