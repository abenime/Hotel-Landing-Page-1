import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import RoomsSection from './sections/RoomsSection';
import AmenitiesSection from './sections/AmenitiesSection';
import ExperiencesSection from './sections/ExperiencesSection';
import OffersSection from './sections/OffersSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import {
  getAmenities,
  getExperiences,
  getOffers,
  getRooms,
  getTestimonials,
  submitBooking
} from './lib/mockApi';
import { Amenity, Experience, Offer, Room, Testimonial } from './lib/types';

export default function App() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);
  const [bookingError, setBookingError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const [roomsData, amenitiesData, testimonialsData, offersData, experiencesData] = await Promise.all([
          getRooms(),
          getAmenities(),
          getTestimonials(),
          getOffers(),
          getExperiences()
        ]);
        if (!cancelled) {
          setRooms(roomsData);
          setAmenities(amenitiesData);
          setTestimonials(testimonialsData);
          setOffers(offersData);
          setExperiences(experiencesData);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredRooms = useMemo(() => rooms.slice(0, 4), [rooms]);

  const handleBooking = async (request: Parameters<typeof submitBooking>[0]) => {
    try {
      setBookingLoading(true);
      setBookingError(null);
      const result = await submitBooking(request);
      setBookingMessage(`Reserved. Reference ${result.reference}`);
    } catch (error) {
      console.error(error);
      setBookingError('We could not secure that hold. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <Hero onCtaClick={scrollToBooking} />

      <main className="space-y-4">
        <section className="mx-auto max-w-6xl -mt-10 px-6">
          <BookingForm
            onSubmit={handleBooking}
            loading={bookingLoading}
            successMessage={bookingMessage ?? undefined}
            errorMessage={bookingError ?? undefined}
          />
        </section>

        <RoomsSection rooms={featuredRooms} loading={loading} />
        <AmenitiesSection amenities={amenities} loading={loading} />
        <ExperiencesSection experiences={experiences} loading={loading} />
        <OffersSection offers={offers} loading={loading} />
        <TestimonialsSection testimonials={testimonials} loading={loading} />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
