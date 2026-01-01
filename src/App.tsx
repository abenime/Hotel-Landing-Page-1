import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SuitesPage from './pages/SuitesPage';
import ExperiencesPage from './pages/ExperiencesPage';
import OffersPage from './pages/OffersPage';
import AmenitiesPage from './pages/AmenitiesPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import { HotelDataProvider } from './lib/HotelDataProvider';
import RoomDetailPage from './pages/RoomDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <HotelDataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/suites" element={<SuitesPage />} />
            <Route path="/suites/:roomId" element={<RoomDetailPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HotelDataProvider>
    </BrowserRouter>
  );
}
