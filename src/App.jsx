import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Receipt from './pages/Receipt';
import Packages from './pages/Packages';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary text-secondary relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/packages" element={<Packages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;