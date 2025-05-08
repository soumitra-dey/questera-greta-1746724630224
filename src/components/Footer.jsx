import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="glass-dark mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-serif mb-4">
              <img src="/camera.svg" alt="RK Photography" className="w-8 h-8" />
              <span>RK Photography</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Professional photography services in Kolkata. Capturing your precious moments with artistic excellence.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-accent transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-accent transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/916290764532"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-accent transition-colors"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              <Link to="/packages" className="hover:text-accent transition-colors">Packages</Link>
              <Link to="/book" className="hover:text-accent transition-colors">Book Now</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+916290764532" className="flex items-center gap-2 hover:text-accent transition-colors group">
                <FaPhone className="text-accent group-hover:scale-110 transition-transform" />
                <span>+91 6290764532</span>
              </a>
              <a href="mailto:rkphotography2020@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors group">
                <FaEnvelope className="text-accent group-hover:scale-110 transition-transform" />
                <span>rkphotography2020@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent mt-1" />
                <span>
                  Lelingrah, New Barackpur<br />
                  Kolkata, West Bengal<br />
                  India - 700110
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} RK Photography by Kallol Dey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;