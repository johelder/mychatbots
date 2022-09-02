import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
