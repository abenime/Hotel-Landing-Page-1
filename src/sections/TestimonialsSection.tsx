import { Testimonial } from '../lib/types';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
  loading?: boolean;
};

export default function TestimonialsSection({ testimonials, loading }: TestimonialsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="testimonials">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
            Testimonials
          </div>
          <h2 className="font-display text-3xl text-slate-900">Guests who lingered longer</h2>
          <p className="text-slate-600">
            Designers, founders, and friends who made Abenime their escape.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {loading
          ? new Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="card-surface h-44 animate-pulse bg-sand-50" />
              ))
          : testimonials.map((item) => (
              <article key={item.id} className="card-surface flex h-full flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <div className="text-sm text-slate-500">{item.title}</div>
                  </div>
                  <div className="rounded-full bg-ocean-50 px-3 py-1 text-xs font-semibold text-ocean-600">
                    {item.rating.toFixed(1)} / 5
                  </div>
                </div>
                <p className="text-sm text-slate-700">&quot;{item.quote}&quot;</p>
              </article>
            ))}
      </div>
    </section>
  );
}
