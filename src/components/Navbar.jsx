import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/packages', label: 'Packages' },
    { path: '/book', label: 'Book' },
    { path: '/contact', label: 'Contact' },
    { path: '/admin', label: 'Admin', icon: <FaLock className="text-sm" /> }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      <div className="glass-dark py-4 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-serif">
              <img src="/camera.svg" alt="RK Photography" className="w-8 h-8" />
              <span>RK Photography</span>
            </Link>

            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-accent transition-colors flex items-center gap-1"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ 
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            className={`md:hidden overflow-hidden glass mt-4 rounded-lg ${
              isMenuOpen ? 'border border-white/10' : ''
            }`}
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-accent transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;