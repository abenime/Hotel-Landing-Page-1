import { Link } from 'react-router-dom';

type HeroProps = {
  onCtaClick?: () => void;
  secondaryTo?: string;
};

export default function Hero({ onCtaClick, secondaryTo = '/experiences' }: HeroProps) {
  return (
    <section className="hero relative overflow-hidden" id="top">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="hero-glow-a absolute left-20 top-24 h-72 w-72 rounded-full blur-3xl" />
        <div className="hero-glow-b absolute right-10 top-0 h-64 w-64 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ocean-600 shadow-soft">
            Coastal luxury, thoughtfully quiet
          </div>
          <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
            Seaside Aurora Hotel - crafted stays by the water
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Suites that open to the horizon, dining that celebrates the tide, and experiences
            curated by our concierge team. Arrive to calm and leave restored.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary" onClick={onCtaClick}>
              Check availability
            </button>
            <Link className="btn-ghost" to={secondaryTo}>
              Explore experiences
            </Link>
          </div>
          <div className="grid max-w-xl grid-cols-3 gap-6 pt-4 text-sm text-slate-600">
            <div>
              <div className="text-2xl font-semibold text-slate-900">24</div>
              bespoke suites
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">4.9</div>
              guest rating average
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">3</div>
              curated restaurants
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-xl">
          <div className="card-surface overflow-hidden">
            <div className="relative h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/35 via-forest-600/45 to-ocean-600/45" />
              <img
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80"
                alt="Oceanfront suite terrace"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-slate-900/60 to-transparent p-6 text-white">
                <div>
                  <div className="text-sm uppercase tracking-wide text-ocean-100">
                    Signature suite
                  </div>
                  <div className="text-2xl font-semibold">Aurora Terrace</div>
                  <div className="text-sm text-ocean-50">Breakfast on your private deck</div>
                </div>
                <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  Late checkout guaranteed
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 rounded-3xl border border-sand-100 bg-white/90 p-6 shadow-soft backdrop-blur">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Concierge</div>
              <div className="text-sm font-semibold text-slate-900">24/7 in-stay messaging</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Dining</div>
              <div className="text-sm font-semibold text-slate-900">Seasonal tasting menus</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Wellness</div>
              <div className="text-sm font-semibold text-slate-900">Thermal suites & yoga</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
