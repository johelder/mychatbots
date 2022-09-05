import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import { Dashboard, BotDetail } from '../pages';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:slug/details" element={<BotDetail />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
