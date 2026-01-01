import { FormEvent, useState } from 'react';
import { BookingRequest } from '../lib/types';

type BookingFormProps = {
  onSubmit: (request: BookingRequest) => Promise<void>;
  loading?: boolean;
  successMessage?: string;
  errorMessage?: string;
};

export default function BookingForm({ onSubmit, loading, successMessage, errorMessage }: BookingFormProps) {
  const [form, setForm] = useState<BookingRequest>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: 'Aurora Signature Suite'
  });

  const handleChange = (field: keyof BookingRequest, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await onSubmit(form);
  };

  return (
    <form className="card-surface space-y-4 p-6" onSubmit={handleSubmit} id="booking">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">Plan your stay</div>
          <div className="font-display text-2xl text-slate-900">Check live availability</div>
        </div>
        <div className="text-xs text-slate-500">No prepayment required</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-700">
          Check-in
          <input
            required
            type="date"
            value={form.checkIn}
            onChange={(e) => handleChange('checkIn', e.target.value)}
            className="w-full rounded-xl border border-sand-200 px-3 py-2.5 text-slate-800 shadow-inner focus:border-ocean-300 focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          Check-out
          <input
            required
            type="date"
            value={form.checkOut}
            onChange={(e) => handleChange('checkOut', e.target.value)}
            className="w-full rounded-xl border border-sand-200 px-3 py-2.5 text-slate-800 shadow-inner focus:border-ocean-300 focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-700">
          Guests
          <input
            min={1}
            max={6}
            required
            type="number"
            value={form.guests}
            onChange={(e) => handleChange('guests', Number(e.target.value))}
            className="w-full rounded-xl border border-sand-200 px-3 py-2.5 text-slate-800 shadow-inner focus:border-ocean-300 focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          Suite preference
          <select
            value={form.roomType}
            onChange={(e) => handleChange('roomType', e.target.value)}
            className="w-full rounded-xl border border-sand-200 px-3 py-2.5 text-slate-800 shadow-inner focus:border-ocean-300 focus:outline-none"
          >
            <option>Aurora Signature Suite</option>
            <option>Coastal King Retreat</option>
            <option>Garden Twin Residence</option>
            <option>Skyline Loft</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? 'Checking...' : 'Reserve hold'}
        </button>
        <span className="text-sm text-slate-500">Instant confirmation for eligible dates.</span>
      </div>

      {successMessage && <div className="text-sm font-semibold text-forest-500">{successMessage}</div>}
      {errorMessage && <div className="text-sm font-semibold text-red-600">{errorMessage}</div>}
    </form>
  );
}
