import { Link, useNavigate } from 'react-router-dom';
import { Room } from '../lib/types';
import { formatCurrency } from '../lib/format';

type RoomsSectionProps = {
  rooms: Room[];
  loading?: boolean;
  hideHeader?: boolean;
  highlightActionLabel?: string;
};

const skeletons = new Array(3).fill(null);

export default function RoomsSection({
  rooms,
  loading,
  hideHeader,
  highlightActionLabel
}: RoomsSectionProps) {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="rooms">
      {!hideHeader && (
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
              Suites
            </div>
            <h2 className="font-display text-3xl text-slate-900">Light-filled rooms by the sea</h2>
            <p className="text-slate-600">
              Choose a pace that suits you, from sunrise balconies to quiet garden corners.
            </p>
          </div>
          <Link className="btn-ghost" to="/book">
            {highlightActionLabel ?? 'Check dates'}
          </Link>
        </div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {loading
          ? skeletons.map((_, index) => (
              <div key={index} className="card-surface h-[360px] animate-pulse bg-sand-50" />
            ))
          : rooms.map((room) => (
              <article
                key={room.id}
                className="card-surface overflow-hidden shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/suites/${room.id}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/suites/${room.id}`);
                  }
                }}
              >
                <div className="relative h-56">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                    {room.availability}
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="font-display text-xl text-slate-900">{room.name}</h3>
                      <p className="text-sm text-slate-500">
                        {room.beds} · {room.size}
                      </p>
                    </div>
                    <div className="text-right text-sm text-slate-600">
                      <div className="text-lg font-semibold text-slate-900">
                        {formatCurrency(room.price)}
                      </div>
                      <div>per night</div>
                    </div>
                  </div>

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

                  <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                    {room.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1 text-ocean-500">
                          -
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between border-t border-sand-100 pt-4">
                    <div className="text-sm text-slate-600">Complimentary breakfast included</div>
                    <Link
                      className="hover:text-ocean-700 text-sm font-semibold text-ocean-600"
                      to="/book"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Hold this room
                    </Link>
                  </div>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
}
