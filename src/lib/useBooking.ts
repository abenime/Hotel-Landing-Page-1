import { useState } from 'react';
import { submitBooking } from './mockApi';
import { BookingRequest } from './types';

type BookingState = {
  loading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  submit: (request: BookingRequest) => Promise<void>;
  reset: () => void;
};

export function useBooking(): BookingState {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submit = async (request: BookingRequest) => {
    try {
      setLoading(true);
      setErrorMessage(null);
      const result = await submitBooking(request);
      setSuccessMessage(`Reserved. Reference ${result.reference}`);
    } catch (error) {
      console.error(error);
      setErrorMessage('We could not secure that hold. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  return { loading, successMessage, errorMessage, submit, reset };
}
