import { useHotelData } from '../lib/HotelDataProvider';
import { useBooking } from '../lib/useBooking';
import BookingForm from '../components/BookingForm';
import RoomsSection from '../sections/RoomsSection';

export default function SuitesPage() {
  const { rooms, loading } = useHotelData();
  const { loading: bookingLoading, successMessage, errorMessage, submit } = useBooking();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-12">
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">Suites</div>
        <h1 className="font-display text-4xl text-slate-900">Stay by the shoreline</h1>
        <p className="max-w-2xl text-slate-600">
          Spacious layouts, soft daylight, and terraces that open to the ocean. Choose your pace and
          we will hold the room while you finalize your travel.
        </p>
      </div>

      <BookingForm
        onSubmit={submit}
        loading={bookingLoading}
        successMessage={successMessage ?? undefined}
        errorMessage={errorMessage ?? undefined}
      />

      <RoomsSection rooms={rooms} loading={loading} />
    </div>
  );
}
