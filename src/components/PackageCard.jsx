import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PackageCard = ({ pkg, isAdmin, onEdit }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-6 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-glass-gradient opacity-50" />
      <div className="relative z-10">
        <div className="mb-4">
          <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
          <div className="text-3xl font-bold text-accent mb-2">₹{pkg.price}</div>
          <p className="text-gray-300 mb-4">{pkg.description}</p>
        </div>
        
        <div className="flex-grow">
          <h4 className="font-semibold mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-accent text-sm" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {isAdmin ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onEdit(pkg)}
            className="mt-6 w-full bg-accent/20 text-accent py-2 rounded-lg border border-accent/30 hover:bg-accent/30"
          >
            Edit Package
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full btn-primary"
          >
            Book Now
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default PackageCard;