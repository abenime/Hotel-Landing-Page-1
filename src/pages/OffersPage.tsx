import OffersSection from '../sections/OffersSection';
import { useHotelData } from '../lib/HotelDataProvider';
import CTASection from '../sections/CTASection';

export default function OffersPage() {
  const { offers, loading } = useHotelData();

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">Offers</div>
          <h1 className="font-display text-4xl text-slate-900">Collections made for lingering</h1>
          <p className="max-w-2xl text-slate-600">
            Retreats for long weekends, slow weeks by the sea, and wellness-focused stays. Pick an
            offer and our concierge will hold it while you confirm travel.
          </p>
        </div>
      </div>

      <OffersSection offers={offers} loading={loading} />
      <CTASection />
    </div>
  );
}
