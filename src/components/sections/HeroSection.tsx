'use client'

import { motion } from 'framer-motion'
import { ShaderAnimation } from '@/components/ui/shader-animation'
import { Spotlight } from '@/components/ui/spotlight'
import { ArrowRight, Star, Users, Award, Zap, Dumbbell, Heart, Leaf } from 'lucide-react'

const bodyBenefits = [
  { icon: Dumbbell, label: 'Muscle Strength',   value: '32–36g protein',   color: 'text-green-400',   bg: 'bg-green-500/10 border-green-700/40' },
  { icon: Zap,      label: 'Daily Energy',       value: '420 kcal / 100g',  color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-700/40' },
  { icon: Heart,    label: 'Heart & Gut Health', value: 'Omega-3 + 7–9g fibre', color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-700/40' },
  { icon: Leaf,     label: 'Zero Bloating',      value: 'Ginger · Fennel',  color: 'text-lime-400',    bg: 'bg-lime-500/10 border-lime-700/40' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050f09] flex items-center overflow-hidden"
    >
      {/* Shader background */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <ShaderAnimation className="w-full h-full" />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_10%,#050f09_80%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-[#050f09] to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#0d2a1820_1px,transparent_1px),linear-gradient(to_bottom,#0d2a1820_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <Spotlight className="z-[3]" size={500} fill="rgba(52,183,100,0.15)" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 min-h-[calc(100vh-5rem)]">

          {/* LEFT — Copy */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 w-fit mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium tracking-wide">Pakistan&apos;s First Complete Plant Protein</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 sm:mb-6"
            >
              <span className="text-white">Rooted in</span><br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Health</span>
              <span className="text-white">, Powered</span><br />
              <span className="text-white">for </span>
              <span className="bg-gradient-to-r from-teal-400 to-green-300 bg-clip-text text-transparent">Life.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8"
            >
              14-ingredient plant protein. <span className="text-white font-medium">32–36g protein per 100g</span> — higher than most whey. Pea · Hemp · Quinoa · Makhana. Made in Karachi. Priced for Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <a href="#products" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-base hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-xl shadow-green-900/50 hover:scale-105">
                Shop Now — From PKR&nbsp;1,899 <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-base hover:border-green-500/50 hover:text-white transition-all duration-300 backdrop-blur-sm">
                Our Story
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['💵 Cash on Delivery', '📱 JazzCash & EasyPaisa', '🚚 Ships Nationwide', '🌿 SANHA Halal', '↩️ 7-Day Return'].map(t => (
                <span key={t} className="text-xs text-neutral-400 bg-neutral-900/60 border border-neutral-800 rounded-full px-3 py-1 backdrop-blur-sm">{t}</span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {[
                { icon: Star,  value: '4.9★',  label: 'Customer Rating' },
                { icon: Users, value: '10K+',  label: 'Happy Customers' },
                { icon: Award, value: '14',    label: 'Plant Ingredients' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{value}</div>
                    <div className="text-neutral-500 text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Protein powder product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="flex-1 w-full h-[340px] sm:h-[460px] lg:h-[680px] relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/15 via-emerald-700/10 to-transparent blur-3xl" />

            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-green-800/40 bg-[#060e09] flex flex-col">

              {/* ── Top: Real ZORX product photo ── */}
              <div className="relative flex-1 overflow-hidden">
                {/* Floating product — real ZORX packaging */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#050f09]">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <img
                      src="/zorx-product.webp"
                      alt="ZORX Plant Protein — Pakistan's Plant Protein"
                      className="w-full h-full object-contain object-center"
                    />
                    {/* subtle vignette so badges pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050f09]/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050f09]/30 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                {/* Top badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-green-700/50 rounded-2xl px-3 py-2"
                >
                  <p className="text-green-400 font-bold text-xs">14 Plant Ingredients</p>
                  <p className="text-neutral-400 text-[10px]">Pre-soaked · Roasted · Ground fresh</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-emerald-700/50 rounded-2xl px-3 py-2 text-right"
                >
                  <p className="text-emerald-400 font-bold text-xs">PSQCA Tested</p>
                  <p className="text-neutral-400 text-[10px]">Batch certified · Halal</p>
                </motion.div>
              </div>

              {/* ── Bottom: Body benefit pills ── */}
              <div className="p-3 sm:p-4 grid grid-cols-2 gap-2 bg-[#060e09]">
                {bodyBenefits.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${b.bg} backdrop-blur-sm`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${b.bg}`}>
                      <b.icon className={`w-4 h-4 ${b.color}`} />
                    </div>
                    <div>
                      <p className={`font-semibold text-xs ${b.color}`}>{b.label}</p>
                      <p className="text-neutral-600 text-[10px]">{b.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-green-400/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
