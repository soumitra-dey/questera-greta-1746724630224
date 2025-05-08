import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1533747732305-e22a35e1b5b3',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
  'https://images.unsplash.com/photo-1519741497674-611481863552',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
  'https://images.unsplash.com/photo-1509178630-a0e09ce06545'
];

const Gallery = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif mb-12 text-center"
      >
        Our Portfolio
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="aspect-square overflow-hidden rounded-lg"
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;