import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Calendar, Menu, Moon, Phone, Sun, X } from 'lucide-react';
import { useTheme } from '../lib/ThemeProvider';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Suites', to: '/suites' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Offers', to: '/offers' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);
  const { theme, toggleTheme } = useTheme();

  const renderedLinks = useMemo(
    () =>
      navLinks.map((item) => (
        <NavLink
          key={item.to}
          className={({ isActive }) =>
            `text-sm font-medium transition ${isActive ? 'text-ocean-600' : 'text-slate-800 hover:text-ocean-600'}`
          }
          to={item.to}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </NavLink>
      )),
    []
  );

  return (
    <header className="sticky top-0 z-30 w-full border-b border-sand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-100 font-semibold text-ocean-600">
            SA
          </div>
          <div className="leading-tight">
            <Link className="font-display text-lg text-slate-900" to="/">
              Seaside Aurora
            </Link>
            <div className="text-xs text-slate-500">Hotel & Residences</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 md:flex">{renderedLinks}</nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:border-ocean-200 hover:bg-sand-50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-300"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link className="btn-ghost" to="/contact">
            <Phone className="h-4 w-4" /> Front desk
          </Link>
          <Link className="btn-primary" to="/book">
            <Calendar className="h-4 w-4" /> Plan your stay
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-slate-700 md:hidden"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          onClick={toggle}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-sand-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {renderedLinks}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:border-ocean-200 hover:bg-sand-50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-300"
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} Theme
            </button>
            <Link className="btn-primary" to="/book" onClick={() => setIsOpen(false)}>
              <Calendar className="h-4 w-4" /> Plan your stay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
