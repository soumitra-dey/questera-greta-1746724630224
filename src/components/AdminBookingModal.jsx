import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaTimes, FaEnvelope, FaReceipt, FaCopy } from 'react-icons/fa';
import { useState } from 'react';

const AdminBookingModal = ({ booking, onClose, onSendReceipt }) => {
  const [receiptLinkCopied, setReceiptLinkCopied] = useState(false);

  const handleSendReceipt = async () => {
    await onSendReceipt(booking);
  };

  const getReceiptLink = () => {
    const params = new URLSearchParams({
      id: booking.id,
      name: booking.name,
      date: booking.date,
      time: booking.time,
      type: booking.type,
      price: booking.price,
      status: booking.status
    });
    return `${window.location.origin}/#/receipt?${params.toString()}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getReceiptLink());
    setReceiptLinkCopied(true);
    setTimeout(() => setReceiptLinkCopied(false), 2000);
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
        className="bg-gray-800 rounded-lg p-6 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FaTimes />
        </button>

        <h3 className="text-xl font-serif mb-4">Booking Details</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-gray-400">Client Name</label>
            <p className="font-semibold">{booking.name}</p>
          </div>
          
          <div>
            <label className="text-gray-400">Service Type</label>
            <p className="font-semibold">{booking.type}</p>
          </div>
          
          <div>
            <label className="text-gray-400">Date & Time</label>
            <p className="font-semibold">
              {format(new Date(booking.date), 'PPP')} at {booking.time}
            </p>
          </div>
          
          <div>
            <label className="text-gray-400">Email</label>
            <p className="font-semibold">{booking.email}</p>
          </div>
          
          <div>
            <label className="text-gray-400">Phone</label>
            <p className="font-semibold">{booking.phone}</p>
          </div>

          {booking.message && (
            <div>
              <label className="text-gray-400">Additional Notes</label>
              <p className="text-sm">{booking.message}</p>
            </div>
          )}

          <div className="bg-gray-700 p-3 rounded-lg">
            <label className="text-gray-400 text-sm block mb-2">Receipt Link</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={getReceiptLink()}
                readOnly
                className="bg-gray-600 rounded p-2 text-sm flex-1 overflow-hidden"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyLink}
                className="bg-gray-600 p-2 rounded"
              >
                <FaCopy />
              </motion.button>
            </div>
            {receiptLinkCopied && (
              <p className="text-green-400 text-sm mt-1">Link copied!</p>
            )}
          </div>

          <div className="flex gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSendReceipt}
              className="flex-1 bg-accent text-primary py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <FaReceipt />
              Send Receipt
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gray-700 py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              Contact Client
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminBookingModal;