import AmenitiesSection from '../sections/AmenitiesSection';
import { useHotelData } from '../lib/HotelDataProvider';

export default function AmenitiesPage() {
  const { amenities, loading } = useHotelData();

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
            Amenities
          </div>
          <h1 className="font-display text-4xl text-slate-900">
            Wellness, dining, and quiet corners
          </h1>
          <p className="max-w-2xl text-slate-600">
            Thermal suites, open-fire dining, and calm lounges for work or reading. Every stay
            includes thoughtful details and attentive service.
          </p>
        </div>
      </div>

      <AmenitiesSection amenities={amenities} loading={loading} />
    </div>
  );
}
