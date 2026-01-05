import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useHotelData } from '../lib/HotelDataProvider';
import { formatCurrency } from '../lib/format';
import BookingForm from '../components/BookingForm';
import { useBooking } from '../lib/useBooking';

export default function RoomDetailPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const { rooms, loading } = useHotelData();
  const booking = useBooking();

  const room = useMemo(() => rooms.find((r) => r.id === roomId), [rooms, roomId]);

  if (!loading && !room) {
    return <Navigate to="/suites" replace />;
  }

  if (!room) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="card-surface h-64 animate-pulse bg-sand-50" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-12">
      <div className="space-y-3">
        <Link className="text-sm font-semibold text-ocean-600" to="/suites">
          &larr; Back to suites
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
              Suite
            </div>
            <h1 className="font-display text-4xl text-slate-900">{room.name}</h1>
            <p className="text-sm text-slate-500">
              {room.beds} · {room.size}
            </p>
          </div>
          <div className="text-right text-slate-700">
            <div className="text-sm">From</div>
            <div className="text-2xl font-semibold text-slate-900">
              {formatCurrency(room.price)}
            </div>
            <div className="text-xs">per night</div>
          </div>
        </div>
        {room.description && (
          <p className="max-w-3xl text-base text-slate-600">{room.description}</p>
        )}
      </div>

      <div className="overflow-hidden rounded-3xl border border-sand-100 shadow-soft">
        <div className="relative h-[420px] w-full">
          <img
            src={room.gallery?.[0] ?? room.image}
            alt={room.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
            {room.availability}
          </div>
          <div className="absolute bottom-4 right-4 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            From {formatCurrency(room.price)} / night
          </div>
        </div>

        <div className="space-y-8 bg-white p-6">
          <div className="flex flex-wrap gap-2">
            {room.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid gap-4 rounded-2xl border border-sand-100 bg-white/70 p-4 md:grid-cols-3">
            {[
              { label: 'Size', value: room.size },
              { label: 'Bed', value: room.bedDetail ?? room.beds },
              { label: 'View', value: room.view },
              { label: 'Sleeps', value: room.occupancy ? `${room.occupancy} guests` : undefined },
              { label: 'Bath', value: room.baths ? `${room.baths} bath` : undefined },
              { label: 'Check-in', value: room.checkIn },
              { label: 'Check-out', value: room.checkOut }
            ]
              .filter((item) => item.value)
              .map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{item.value}</div>
                </div>
              ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {room.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-ocean-500">-</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {room.amenities && room.amenities.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
                In-suite amenities
              </div>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          )}

          {room.gallery && room.gallery.length > 1 && (
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
                Gallery
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {room.gallery.slice(0, 3).map((img, index) => (
                  <div key={img} className="overflow-hidden rounded-2xl border border-sand-100">
                    <img
                      src={img}
                      alt={`${room.name} photo ${index + 1}`}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-sand-100 pt-4 text-sm text-slate-700">
            <div className="space-y-1">
              <div className="font-semibold text-slate-900">Included</div>
              <div>Breakfast for two, evening turndown, and dedicated host messaging.</div>
            </div>
            <div className="flex gap-2">
              <Link className="btn-ghost" to="/offers">
                View offers
              </Link>
              <a className="btn-primary" href="#booking">
                Book this suite
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
          Hold the suite
        </div>
        <BookingForm
          onSubmit={booking.submit}
          loading={booking.loading}
          successMessage={booking.successMessage ?? undefined}
          errorMessage={booking.errorMessage ?? undefined}
        />
      </div>
    </div>
  );
}
