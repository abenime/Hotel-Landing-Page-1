import BookingForm from '../components/BookingForm';
import RoomsSection from '../sections/RoomsSection';
import { useBooking } from '../lib/useBooking';
import { useHotelData } from '../lib/HotelDataProvider';

export default function BookingPage() {
  const { rooms, loading } = useHotelData();
  const { loading: bookingLoading, successMessage, errorMessage, submit } = useBooking();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-12">
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">Booking</div>
        <h1 className="font-display text-4xl text-slate-900">Check live availability</h1>
        <p className="max-w-2xl text-slate-600">
          Share your dates and suite preference. We will hold the room and confirm quickly by email.
        </p>
      </div>

      <BookingForm
        onSubmit={submit}
        loading={bookingLoading}
        successMessage={successMessage ?? undefined}
        errorMessage={errorMessage ?? undefined}
      />

      <RoomsSection rooms={rooms.slice(0, 3)} loading={loading} hideHeader />
    </div>
  );
}
