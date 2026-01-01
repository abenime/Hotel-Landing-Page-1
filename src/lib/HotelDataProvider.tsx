import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { getAmenities, getExperiences, getOffers, getRooms, getTestimonials } from './mockApi';
import { Amenity, Experience, Offer, Room, Testimonial } from './types';

type HotelData = {
  rooms: Room[];
  amenities: Amenity[];
  experiences: Experience[];
  offers: Offer[];
  testimonials: Testimonial[];
  loading: boolean;
  refresh: () => Promise<void>;
};

const HotelDataContext = createContext<HotelData | undefined>(undefined);

export function HotelDataProvider({ children }: { children: ReactNode }) {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const [roomsData, amenitiesData, testimonialsData, offersData, experiencesData] =
        await Promise.all([
          getRooms(),
          getAmenities(),
          getTestimonials(),
          getOffers(),
          getExperiences()
        ]);
      setRooms(roomsData);
      setAmenities(amenitiesData);
      setTestimonials(testimonialsData);
      setOffers(offersData);
      setExperiences(experiencesData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const value = useMemo(
    () => ({ rooms, amenities, experiences, offers, testimonials, loading, refresh: load }),
    [rooms, amenities, experiences, offers, testimonials, loading]
  );

  return <HotelDataContext.Provider value={value}>{children}</HotelDataContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useHotelData() {
  const ctx = useContext(HotelDataContext);
  if (!ctx) {
    throw new Error('useHotelData must be used within HotelDataProvider');
  }
  return ctx;
}
