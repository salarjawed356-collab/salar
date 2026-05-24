'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Heart, Shield, Zap, MapPin, FlaskConical, PackageCheck, Users } from 'lucide-react'

const timeline = [
  {
    year: '2022',
    icon: FlaskConical,
    title: 'The Problem We Couldn\'t Ignore',
    desc: 'Salar Jawed — a Karachi-based fitness enthusiast — was spending PKR 12,000/month on imported protein. Reading the label one day, he realised: most of it was isolates, fillers, and artificial flavours. There had to be a better way.',
  },
  {
    year: '2023',
    icon: Leaf,
    title: 'Research & Formulation',
    desc: 'Months of research with a PSQCA-certified nutritionist. 14 whole-food ingredients were selected — pea protein, hemp, quinoa, makhana (lotus seeds), chickpeas, flaxseed, sunflower seeds and more. Every ingredient chosen for a specific function in the body.',
  },
  {
    year: '2023',
    icon: PackageCheck,
    title: 'Lab-Tested in Karachi',
    desc: 'Every batch produced right here in Karachi — pre-soaked, dry-roasted, cold-ground. PSQCA batch-certified. SANHA Halal verified. The goal: 32–36g protein per 100g, no artificial anything.',
  },
  {
    year: '2024',
    icon: Users,
    title: '10,000+ Happy Customers',
    desc: 'Within the first year, VitaRoot reached customers in every major city in Pakistan — Karachi, Lahore, Islamabad, Peshawar, Quetta. COD. JazzCash. EasyPaisa. Built for Pakistan, priced for Pakistan.',
  },
]

const values = [
  {
    icon: Leaf,
    title: 'Whole Foods Only',
    desc: 'Every ingredient is a real food — not an isolate, not a powder derivative. 14 identifiable plant sources.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Heart,
    title: 'Made for Pakistani Bodies',
    desc: 'Formulated with desi palates and lifestyles in mind. Pairs with dudh, chai, or a morning shake perfectly.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Shield,
    title: 'PSQCA & Halal Certified',
    desc: 'Every batch goes through PSQCA lab testing. SANHA Halal certified. 100% transparent ingredient list.',
    color: 'from-emerald-500 to-green-700',
  },
  {
    icon: Zap,
    title: 'Priced for Pakistan',
    desc: 'PKR 5,999/kg vs PKR 8,500–14,000 for imports. Same or higher protein content. No compromises.',
    color: 'from-lime-500 to-green-600',
  },
]

const cityStats = [
  { city: 'Karachi', emoji: '🏙️', orders: '4,200+' },
  { city: 'Lahore', emoji: '🕌', orders: '2,800+' },
  { city: 'Islamabad', emoji: '🏔️', orders: '1,600+' },
  { city: 'Other Cities', emoji: '🇵🇰', orders: '1,400+' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 md:py-28 bg-[#060e09] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-800/15 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-green-500/30 bg-green-500/10 px-4 py-1.5 rounded-full">
            Made in Karachi 🇵🇰
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            A Pakistani Answer to
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Overpriced Imports.
            </span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            VitaRoot started with one frustration — quality plant protein was available only to those who could afford
            PKR 12,000–14,000/month. We changed that. Built in Karachi, for Pakistan.
          </p>
        </motion.div>

        {/* ── Founder Story + image ── */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center mb-20">

          {/* Left: Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Founder quote card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-green-900/30 to-emerald-900/10 border border-green-700/30">
              <div className="text-green-400 text-5xl font-serif leading-none mb-3">&quot;</div>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium italic mb-6">
                Pakistan deserves a protein powder it can actually afford — made from real ingredients,
                tested in our own labs, and delivered to your door cash-on-delivery. That&apos;s VitaRoot.
              </p>
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center shrink-0 shadow-lg ring-2 ring-green-700/40">
                  <span className="text-white font-black text-lg">SJ</span>
                </div>
                <div>
                  <p className="text-white font-bold text-base">Salar Jawed</p>
                  <p className="text-green-400 text-sm">Founder, VitaRoot</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <p className="text-neutral-500 text-xs">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission block */}
            <div className="p-6 rounded-2xl bg-[#080f08] border border-green-900/30">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-400" />
                The VitaRoot Mission
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                Imported proteins dominate Pakistan&apos;s market at 2–3× the price of VitaRoot —
                with fewer ingredients and lower protein content. We saw an opportunity to do
                better: 14 whole-food plant ingredients, cold-ground in Karachi, priced fairly
                for every Pakistani household.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We don&apos;t believe nutrition should be a luxury. Whether you&apos;re a gym-goer
                in DHA, a student in Gulshan, or a mother in Saddar — VitaRoot is for you.
              </p>
            </div>

            {/* City orders */}
            <div className="grid grid-cols-2 gap-3">
              {cityStats.map((c, i) => (
                <motion.div
                  key={c.city}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.08 }}
                  className="p-4 rounded-xl bg-[#080f08] border border-green-900/25 flex items-center gap-3"
                >
                  <span className="text-2xl">{c.emoji}</span>
                  <div>
                    <p className="text-white font-bold text-sm">{c.orders}</p>
                    <p className="text-neutral-500 text-xs">{c.city}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-green-500/50 via-emerald-700/30 to-transparent hidden sm:block" />

            <div className="space-y-5">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="relative flex gap-4 sm:gap-5"
                >
                  {/* Icon node */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center shrink-0 shadow-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 pb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-400 font-bold text-xs border border-green-700/40 bg-green-900/20 rounded-full px-2 py-0.5">{item.year}</span>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Karachi-made badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/10 border border-green-700/30 flex items-center gap-4"
            >
              <div className="text-4xl">🏭</div>
              <div>
                <p className="text-white font-bold">Manufactured in Karachi</p>
                <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                  Pre-soaked · Dry-roasted · Cold-ground · Batch-tested by PSQCA · SANHA Halal certified
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['PSQCA Lab Tested', 'SANHA Halal', 'No Artificial Additives'].map(b => (
                    <span key={b} className="text-[10px] text-green-400 border border-green-800/50 rounded-full px-2 py-0.5">{b}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Values grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-white font-bold text-xl mb-8">What We Stand For</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="group p-5 md:p-6 rounded-2xl bg-[#080f08] border border-green-900/30 hover:border-green-600/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{v.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
