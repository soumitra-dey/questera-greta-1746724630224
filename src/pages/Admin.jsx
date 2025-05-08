import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format, parseISO, eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import AdminBookingModal from '../components/AdminBookingModal';
import PackageModal from '../components/PackageModal';
import PackageCard from '../components/PackageCard';
import { FaCalendar, FaReceipt, FaChartBar, FaPlus, FaImage } from 'react-icons/fa';

// Previous code remains...

const Admin = () => {
  // Previous state declarations remain...
  const [latestWork, setLatestWork] = useState([
    {
      id: 1,
      title: "Sarah & Mike's Wedding",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      category: "Wedding"
    }
    // ... other work items
  ]);

  const handleAddWork = (newWork) => {
    setLatestWork([...latestWork, { ...newWork, id: latestWork.length + 1 }]);
  };

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        {/* Previous content remains... */}

        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-serif">Latest Work</h3>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {/* Open work modal */}}
              className="bg-accent text-primary px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaPlus /> Add New Work
            </motion.button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestWork.map((work) => (
              <div key={work.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="p-2 bg-gray-900/80 rounded-lg hover:bg-accent">
                      <FaImage />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-accent">{work.category}</span>
                    <span className="text-sm text-gray-400">
                      {format(new Date(work.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h4 className="font-semibold">{work.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous modals remain... */}
      </motion.div>
    </div>
  );
};

export default Admin;