'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ type: 'spring', bounce: 0.3 }}
            className="w-72 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-green-800/40 bg-[#0d1f10]"
          >
            {/* Header */}
            <div className="bg-green-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">VitaRoot Support</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    <p className="text-green-200 text-xs">Typically replies in minutes</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="p-4">
              <div className="bg-[#1a2e1a] rounded-xl p-3 mb-4">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  👋 Hi! Questions about VitaRoot? We&apos;re here to help.<br />
                  <span className="text-neutral-400 text-xs">Ask about ingredients, delivery, or place an order!</span>
                </p>
                <p className="text-neutral-600 text-[10px] mt-1.5 text-right">VitaRoot Team</p>
              </div>

              {/* Quick replies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['🛍️ Place an order', '📦 Track my order', '🌿 About ingredients', '💰 Wholesale inquiry'].map(q => (
                  <a
                    key={q}
                    href={`https://wa.me/923000322036?text=${encodeURIComponent(q)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-green-700/50 text-green-400 rounded-full px-2.5 py-1 hover:bg-green-900/30 transition-colors"
                  >
                    {q}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/923000322036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors"
                >
                  <WhatsAppIcon />
                  +92 300-0322036
                </a>
                <a
                  href="https://wa.me/9231411000128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-sm transition-colors"
                >
                  <WhatsAppIcon />
                  +92 314-11000128
                </a>
              </div>
              <p className="text-neutral-600 text-[10px] text-center mt-2">Replies until 10:00 PM PKT · Mon–Sat</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={open ? {} : { boxShadow: ['0 0 0 0 rgba(34,197,94,0.4)', '0 0 0 16px rgba(34,197,94,0)', '0 0 0 0 rgba(34,197,94,0)'] }}
        transition={open ? {} : { repeat: Infinity, duration: 2 }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-xl shadow-green-900/60 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X className="w-6 h-6 text-white" /> : <WhatsAppIcon />}
      </motion.button>
    </div>
  )
}
