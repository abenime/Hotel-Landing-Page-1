import { useMemo, useState } from 'react';

const navLinks = [
  { label: 'Suites', href: '#rooms' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Offers', href: '#offers' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);

  const renderedLinks = useMemo(
    () =>
      navLinks.map((item) => (
        <a
          key={item.href}
          className="text-sm font-medium text-slate-800 transition hover:text-ocean-600"
          href={item.href}
        >
          {item.label}
        </a>
      )),
    []
  );

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-sand-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-100 text-ocean-600 font-semibold">
            SA
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-slate-900">Seaside Aurora</div>
            <div className="text-xs text-slate-500">Hotel & Residences</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 md:flex">{renderedLinks}</nav>

        <div className="hidden gap-3 md:flex">
          <a className="btn-ghost" href="#contact">
            Call concierge
          </a>
          <a className="btn-primary" href="#booking">
            Plan your stay
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="text-sm font-semibold">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-sand-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {renderedLinks}
            <a className="btn-primary" href="#booking">
              Plan your stay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
