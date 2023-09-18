import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function MainPage() {
  return (
    <div>
      
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
