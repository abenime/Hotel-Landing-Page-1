export type Room = {
  id: string;
  name: string;
  price: number;
  size: string;
  beds: string;
  image: string;
  tags: string[];
  highlights: string[];
  availability: string;
};

export type Amenity = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

export type Experience = {
  id: string;
  title: string;
  description: string;
  duration: string;
};

export type BookingRequest = {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
};
