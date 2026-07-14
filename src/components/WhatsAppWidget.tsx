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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-elevated overflow-hidden border border-charcoal-100"
          >
            <div className="bg-brand-gradient p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="text-white">
                  <p className="font-semibold text-sm">AiraNexus Support</p>
                  <p className="text-xs text-white/70 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Typically replies instantly
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-greenish-50">
              <div className="bg-white rounded-xl p-3 shadow-soft">
                <p className="text-sm text-charcoal-600">
                  Hello! How can we help you with your community management needs today?
                </p>
                <p className="text-xs text-charcoal-400 mt-2">Just now</p>
              </div>
            </div>
            <div className="p-4 border-t border-charcoal-100">
              <a
                href="https://wa.me/911234567890?text=Hi, I'm interested in Aira Nexus for my community"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-primary text-center text-sm"
              >
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-gradient rounded-full flex items-center justify-center shadow-teal-lg hover:shadow-teal-xl transition-all duration-200"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? 'Close support chat' : 'Open support chat'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
