import { Link } from 'react-router-dom';
import { Offer } from '../lib/types';

type OffersSectionProps = {
  offers: Offer[];
  loading?: boolean;
};

export default function OffersSection({ offers, loading }: OffersSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="offers">
      <div className="card-surface flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">Offers</div>
          <h2 className="font-display text-2xl text-slate-900">Signature stays with added care</h2>
          <p className="text-slate-600">
            Limited collections curated for longer stays and wellness weekends.
          </p>
        </div>
        <Link className="btn-primary" to="/book">
          Hold an offer
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {loading
          ? new Array(2)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="card-surface h-32 animate-pulse bg-sand-50" />
              ))
          : offers.map((offer) => (
              <article
                key={offer.id}
                className="card-surface flex items-center justify-between p-5"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
                    {offer.tag}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{offer.title}</h3>
                  <p className="text-sm text-slate-600">{offer.description}</p>
                </div>
                <Link className="text-sm font-semibold text-ocean-600" to="/book">
                  Select -&gt;
                </Link>
              </article>
            ))}
      </div>
    </section>
  );
}
