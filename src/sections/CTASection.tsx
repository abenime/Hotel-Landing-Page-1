export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-10" id="contact">
      <div className="card-surface relative overflow-hidden px-8 py-10">
        <div
          className="absolute right-12 top-8 h-32 w-32 rounded-full bg-ocean-100 blur-3xl"
          aria-hidden
        />
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
            Concierge
          </div>
          <h2 className="font-display text-3xl text-slate-900">Ready to design your stay</h2>
          <p className="max-w-2xl text-slate-600">
            Share your dates and preferences. We will tailor arrival, dining, and experiences to
            your pace.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href="mailto:concierge@seasideAbenime.example">
            Email concierge
          </a>
          <a className="btn-ghost" href="tel:+18005551234">
            Call +1 (800) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}
