import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-3xl shadow-card-hover overflow-hidden"
          >
            <div className="bg-brand-gradient p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-500" />
                </div>
                <div className="text-white">
                  <p className="font-semibold">AiraNexus Support</p>
                  <p className="text-sm text-white/80">Typically replies instantly</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-neutral-50">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <p className="text-sm text-neutral-600">
                  Hello! How can we help you with your community management needs today?
                </p>
                <p className="text-xs text-neutral-400 mt-2">Just now</p>
              </div>
            </div>
            <div className="p-4 border-t border-neutral-100">
              <a
                href="https://wa.me/911234567890?text=Hi, I'm interested in Aira Nexus for my community"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-primary text-center"
              >
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-gradient rounded-full flex items-center justify-center shadow-teal-lg hover:shadow-teal-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close support chat' : 'Open support chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" aria-hidden="true" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
        )}
      </motion.button>
    </div>
  );
}
