import ExperiencesSection from '../sections/ExperiencesSection';
import { useHotelData } from '../lib/HotelDataProvider';
import CTASection from '../sections/CTASection';

export default function ExperiencesPage() {
  const { experiences, loading } = useHotelData();

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
            Experiences
          </div>
          <h1 className="font-display text-4xl text-slate-900">Coastal days, curated</h1>
          <p className="max-w-2xl text-slate-600">
            Sunrise rituals, atelier visits, and golden-hour sails shaped around your pace. Reserve
            ahead so our concierge can personalize each moment.
          </p>
        </div>
      </div>

      <ExperiencesSection experiences={experiences} loading={loading} />
      <CTASection />
    </div>
  );
}
