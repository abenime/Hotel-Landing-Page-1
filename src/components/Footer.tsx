import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-sand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-lg text-slate-900">Seaside Aurora</div>
          <div className="text-sm text-slate-500">
            Coastal hotel in partnership with local makers.
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <Link to="/suites">Suites</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/amenities">Amenities</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
