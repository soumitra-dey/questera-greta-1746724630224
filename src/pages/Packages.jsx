import { motion } from 'framer-motion';
import PackageCard from '../components/PackageCard';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Premium Wedding Package',
      price: '75,000',
      description: 'Complete wedding photography coverage with cinematic videos',
      duration: 'Full Day',
      features: [
        'Pre-Wedding Photoshoot',
        'Wedding Day Coverage',
        'Cinematic Wedding Film',
        'Candid Photography',
        'Premium Photo Album',
        'All Digital Images',
        'Same Day Editing'
      ]
    },
    {
      id: 2,
      name: 'Pre-Wedding Shoot',
      price: '25,000',
      description: 'Romantic pre-wedding photoshoot at selected locations',
      duration: '4-5 hours',
      features: [
        'Multiple Locations',
        '2 Outfit Changes',
        'Professional Editing',
        'Digital Images',
        'Photo Album',
        'Same Day Preview'
      ]
    },
    {
      id: 3,
      name: 'Family Portrait',
      price: '15,000',
      description: 'Professional family photoshoot session',
      duration: '2-3 hours',
      features: [
        'Studio/Outdoor Setup',
        'Multiple Poses',
        'Professional Editing',
        '20 Digital Photos',
        'Family Photo Album',
        'Express Delivery'
      ]
    },
    {
      id: 4,
      name: 'Festival Coverage',
      price: '35,000',
      description: 'Complete festival and event photography coverage',
      duration: 'Full Day',
      features: [
        'Event Coverage',
        'Candid Moments',
        'Professional Editing',
        'Digital Gallery',
        'Highlight Video',
        'Quick Delivery'
      ]
    }
  ];

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif mb-4">Photography Packages</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our carefully curated photography packages designed to capture your precious moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;