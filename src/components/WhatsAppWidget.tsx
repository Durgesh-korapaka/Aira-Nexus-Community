import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '918045678900'
const PRESET_MESSAGE = "Hi AiraNexus team! I'd like to know more about your community management platform."

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen((v) => !v)
  const launch = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRESET_MESSAGE)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-[300px] overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-elevated"
            role="dialog"
            aria-label="WhatsApp chat preview"
          >
            <div className="bg-brand-gradient px-4 py-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">AiraNexus Support</p>
                    <p className="text-xs text-white/80">Typically replies in minutes</p>
                  </div>
                </div>
                <button
                  onClick={handleOpen}
                  aria-label="Close chat"
                  className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="bg-[#ECE5DD] p-4">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 text-sm text-charcoal-800 shadow-soft">
                👋 Hi there! Need help choosing the right plan or have a question about AiraNexus?
                Send us a message and we'll get back to you right away.
              </div>
            </div>
            <button
              onClick={launch}
              className="flex w-full items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1eb558]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Start WhatsApp Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        aria-label={open ? 'Close WhatsApp support chat' : 'Open WhatsApp support chat'}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-colors hover:bg-[#1eb558]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
