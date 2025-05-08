import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-24 container mx-auto px-4 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif mb-12 text-center"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-accent" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-400">+91 6290764532</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-2xl text-accent" />
            <div>
              <h3 className="font-semibold mb-1">WhatsApp</h3>
              <p className="text-gray-400">+91 6290764532</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-accent" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-400">rkphotography2020@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-2xl text-accent" />
            <div>
              <h3 className="font-semibold mb-1">Studio Location</h3>
              <p className="text-gray-400">
                Lelingrah, New Barackpur<br />
                Kolkata, West Bengal<br />
                India - 700110
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-xl mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 bg-gray-700 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 rounded-lg h-32"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-accent text-primary py-3 rounded-lg font-semibold"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;