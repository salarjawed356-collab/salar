'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { ArrowRight, Leaf } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-20 md:py-24 bg-[#050f09] overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-green-900/50 to-emerald-900/30 border border-green-700/40 overflow-hidden text-center"
        >
          <Spotlight size={600} fill="rgba(52,183,100,0.12)" />

          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full border border-green-700/10 absolute" />
            <div className="w-[400px] h-[400px] rounded-full border border-green-600/10 absolute" />
          </div>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 items-center justify-center mb-6 shadow-2xl shadow-green-900/50"
          >
            <Leaf className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 relative">
            Start Your Wellness
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 relative">
            Join 10,000+ Pakistanis who chose a healthier, more balanced life with ZORX.
            Plant-powered. Honestly made. Priced for Pakistan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <a href="#products" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-2xl shadow-green-900/60 hover:scale-105">
              Shop ZORX Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#products" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-green-700/50 text-neutral-300 font-semibold hover:border-green-500/60 hover:text-white transition-all duration-300">
              Explore Bundle Deals
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            {['💵 Cash on Delivery', '↩️ 7-Day Money Back', '🌿 SANHA Halal'].map(item => (
              <div key={item} className="flex items-center gap-2 text-neutral-500 text-xs sm:text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
