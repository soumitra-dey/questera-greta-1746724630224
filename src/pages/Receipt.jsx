import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import { format } from 'date-fns';

const Receipt = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const booking = {
    id: searchParams.get('id'),
    name: searchParams.get('name'),
    date: searchParams.get('date'),
    time: searchParams.get('time'),
    type: searchParams.get('type'),
    price: searchParams.get('price'),
    status: searchParams.get('status')
  };

  return (
    <div className="min-h-screen bg-primary text-secondary py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-gray-800 rounded-lg overflow-hidden"
      >
        <div className="bg-accent p-6 text-primary">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaCamera className="text-2xl" />
              <h1 className="text-2xl font-serif">RK Photography</h1>
            </div>
            <div className="text-right">
              <p className="font-semibold">Receipt #{booking.id}</p>
              <p className="text-sm opacity-75">
                {format(new Date(booking.date), 'MMM d, yyyy')}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-xl font-serif mb-4">Booking Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Client Name</span>
                <span className="font-semibold">{booking.name}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Service Type</span>
                <span className="font-semibold">{booking.type}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Date & Time</span>
                <span className="font-semibold">
                  {format(new Date(booking.date), 'PPP')} at {booking.time}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif mb-4">Payment Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Amount</span>
                <span className="font-semibold">${booking.price}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Status</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  booking.status === 'confirmed' 
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
          </div>

          {booking.status === 'confirmed' && (
            <div className="bg-green-500/10 p-4 rounded-lg flex items-center gap-3">
              <FaCheckCircle className="text-green-400 text-xl" />
              <p className="text-green-300">
                Payment received. Your booking is confirmed.
              </p>
            </div>
          )}

          <div className="text-center text-sm text-gray-400 pt-4">
            <p>Thank you for choosing RK Photography!</p>
            <p>For any questions, please contact us at info@rkphotography.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Receipt;