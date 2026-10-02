
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/detalhes" element={<Details />} />
          <Route path="/" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}