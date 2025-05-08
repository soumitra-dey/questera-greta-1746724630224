import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaRupeeSign, FaCamera } from 'react-icons/fa';

const SERVICES = [
  {
    id: 'wedding',
    name: 'Wedding Photography',
    price: '₹75,000',
    duration: 'Full Day',
    description: 'Complete wedding photography with cinematic coverage',
    includes: [
      'Pre-Wedding Shoot',
      'Wedding Day Coverage',
      'Cinematic Film',
      'Premium Album',
      'All Digital Images',
      'Same Day Editing'
    ]
  },
  {
    id: 'prewedding',
    name: 'Pre-Wedding Shoot',
    price: '₹25,000',
    duration: '4-5 hours',
    description: 'Romantic pre-wedding photoshoot at selected locations',
    includes: [
      'Multiple Locations',
      '2 Outfit Changes',
      'Professional Editing',
      'Digital Images',
      'Photo Album',
      'Same Day Preview'
    ]
  },
  {
    id: 'festival',
    name: 'Festival Coverage',
    price: '₹35,000',
    duration: 'Full Day',
    description: 'Complete festival and event photography coverage',
    includes: [
      'Event Coverage',
      'Candid Photography',
      'Professional Editing',
      'Digital Gallery',
      'Highlight Video',
      'Quick Delivery'
    ]
  }
];

const Book = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { service: selectedService, ...formData });
  };

  return (
    <div className="pt-24 px-4 pb-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif mb-4">Book a Session</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your preferred photography package and book your session with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className={`bg-gray-800 rounded-lg p-6 cursor-pointer transition-colors ${
                selectedService?.id === service.id ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif">{service.name}</h3>
                <FaCamera className="text-accent text-xl" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <FaRupeeSign className="text-accent" />
                <span className="text-2xl font-bold">{service.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <FaClock className="text-accent" />
                <span>{service.duration}</span>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-serif mb-6">Booking Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="input-field"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                className="input-field"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Date</label>
                <input
                  type="date"
                  className="input-field"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-2">Time</label>
                <input
                  type="time"
                  className="input-field"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block mb-2">Additional Message</label>
              <textarea
                className="input-field h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent text-primary py-3 rounded-lg font-semibold mt-4"
              type="submit"
            >
              Book Now
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Book;