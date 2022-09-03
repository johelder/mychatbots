import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, BotDetail } from '../pages';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:id" element={<BotDetail />} />
      </Routes>
    </Router>
  );
};
