import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock } from 'react-icons/fa';

const latestWork = [
  {
    id: 1,
    title: "Sharma Wedding Ceremony",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    category: "Wedding"
  },
  {
    id: 2,
    title: "Diwali Fashion Collection",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    category: "Fashion"
  },
  {
    id: 3,
    title: "Annual Corporate Meet",
    date: "2024-03-08",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    category: "Corporate"
  }
];

const upcomingBookings = [
  {
    id: 1,
    title: "Mehta Family Portrait",
    date: "2024-03-20",
    time: "14:00",
    type: "Family Portrait"
  },
  {
    id: 2,
    title: "Raj & Priya's Pre-Wedding",
    date: "2024-03-22",
    time: "16:00",
    type: "Pre-Wedding Shoot"
  },
  {
    id: 3,
    title: "Durga Puja Coverage",
    date: "2024-03-25",
    time: "10:00",
    type: "Festival Coverage"
  }
];

const Home = () => {
  return (
    <div>
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Capturing Life's <br /> Beautiful Moments
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Professional photography services for weddings, portraits, events, and more.
            Let us tell your story through our lens.
          </p>
          <Link to="/book">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-accent text-primary px-8 py-3 rounded-full font-semibold"
            >
              Book a Session
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif mb-4">Latest Work</h2>
            <p className="text-gray-400">
              Take a look at our most recent photography sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestWork.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-accent text-sm">{work.category}</span>
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {format(new Date(work.date), 'MMM d, yyyy')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif mb-4">Upcoming Sessions</h2>
            <p className="text-gray-400">
              Check out our scheduled photography sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent">{booking.type}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{booking.title}</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-accent" />
                    <span>{format(new Date(booking.date), 'MMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-accent" />
                    <span>{booking.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;