import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { Navbar } from '../components/Navbar';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
