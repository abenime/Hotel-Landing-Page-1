import { Amenity, BookingRequest, Experience, Offer, Room, Testimonial } from './types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchMock<T>(endpoint: string): Promise<T> {
  const jitter = 180 + Math.random() * 220;
  await delay(jitter);
  const response = await fetch(`/api/${endpoint}.json`);
  if (!response.ok) {
    throw new Error(`Unable to load ${endpoint}`);
  }
  return response.json() as Promise<T>;
}

export async function getRooms(): Promise<Room[]> {
  return fetchMock<Room[]>('rooms');
}

export async function getAmenities(): Promise<Amenity[]> {
  return fetchMock<Amenity[]>('amenities');
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchMock<Testimonial[]>('testimonials');
}

export async function getOffers(): Promise<Offer[]> {
  return fetchMock<Offer[]>('offers');
}

export async function getExperiences(): Promise<Experience[]> {
  return fetchMock<Experience[]>('experiences');
}

export async function submitBooking(request: BookingRequest): Promise<{ reference: string }>
{
  const jitter = 240 + Math.random() * 200;
  await delay(jitter);
  const hash = Math.random().toString(16).slice(2, 8).toUpperCase();
  console.info('Mock booking submitted', request);
  return { reference: `SA-${hash}` };
}
