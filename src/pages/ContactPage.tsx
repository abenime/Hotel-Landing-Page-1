import CTASection from '../sections/CTASection';

export default function ContactPage() {
  return (
    <div className="space-y-6 pb-12">
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
            Contact
          </div>
          <h1 className="font-display text-4xl text-slate-900">Speak with Support</h1>
          <p className="max-w-2xl text-slate-600">
            Tell us about your trip and what matters most to you. We will design arrivals, dining,
            and experiences that match your pace.
          </p>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
