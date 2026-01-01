import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../sections/Hero';
import RoomsSection from '../sections/RoomsSection';
import ExperiencesSection from '../sections/ExperiencesSection';
import OffersSection from '../sections/OffersSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';
import { useHotelData } from '../lib/HotelDataProvider';

export default function HomePage() {
  const navigate = useNavigate();
  const { rooms, experiences, offers, testimonials, loading } = useHotelData();

  const featuredRooms = useMemo(() => rooms.slice(0, 2), [rooms]);
  const featuredOffers = useMemo(() => offers.slice(0, 2), [offers]);

  return (
    <div className="space-y-6">
      <Hero onCtaClick={() => navigate('/book')} secondaryTo="/experiences" />

      <div className="mx-auto -mt-10 max-w-6xl px-6">
        <div className="rounded-3xl border border-sand-100 bg-white/90 p-5 shadow-soft backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">Concierge-crafted stays</div>
            <div>Breakfast for two included</div>
            <div>Flexible check-in times</div>
            <button className="btn-primary" onClick={() => navigate('/book')}>
              Check availability
            </button>
          </div>
        </div>
      </div>

      <RoomsSection
        rooms={featuredRooms}
        loading={loading}
        highlightActionLabel="View all suites"
      />
      <ExperiencesSection experiences={experiences} loading={loading} />
      <OffersSection offers={featuredOffers} loading={loading} />
      <TestimonialsSection testimonials={testimonials} loading={loading} />
      <CTASection />
    </div>
  );
}
