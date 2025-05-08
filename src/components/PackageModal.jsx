import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaPlus, FaTrash } from 'react-icons/fa';

const PackageModal = ({ package: initialPackage, onClose, onSave }) => {
  const [package_, setPackage] = useState(initialPackage || {
    name: '',
    price: '',
    description: '',
    duration: '',
    features: ['']
  });

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...package_.features];
    newFeatures[index] = value;
    setPackage({ ...package_, features: newFeatures });
  };

  const addFeature = () => {
    setPackage({ ...package_, features: [...package_.features, ''] });
  };

  const removeFeature = (index) => {
    const newFeatures = package_.features.filter((_, i) => i !== index);
    setPackage({ ...package_, features: newFeatures });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(package_);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800 rounded-lg p-6 max-w-xl w-full relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FaTimes />
        </button>

        <h3 className="text-xl font-serif mb-6">
          {initialPackage ? 'Edit Package' : 'Add New Package'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Package Name</label>
            <input
              type="text"
              value={package_.name}
              onChange={(e) => setPackage({ ...package_, name: e.target.value })}
              className="w-full p-3 bg-gray-700 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Price ($)</label>
            <input
              type="number"
              value={package_.price}
              onChange={(e) => setPackage({ ...package_, price: e.target.value })}
              className="w-full p-3 bg-gray-700 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Duration</label>
            <input
              type="text"
              value={package_.duration}
              onChange={(e) => setPackage({ ...package_, duration: e.target.value })}
              className="w-full p-3 bg-gray-700 rounded-lg"
              placeholder="e.g., 2 hours"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Description</label>
            <textarea
              value={package_.description}
              onChange={(e) => setPackage({ ...package_, description: e.target.value })}
              className="w-full p-3 bg-gray-700 rounded-lg h-24"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Features</label>
            <div className="space-y-2">
              {package_.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="flex-1 p-3 bg-gray-700 rounded-lg"
                    placeholder="Add a feature"
                    required
                  />
                  {package_.features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="p-3 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addFeature}
                className="flex items-center gap-2 text-accent hover:text-accent/80"
              >
                <FaPlus /> Add Feature
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex-1 bg-accent text-primary py-3 rounded-lg font-semibold"
            >
              Save Package
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 py-3 rounded-lg font-semibold"
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PackageModal;