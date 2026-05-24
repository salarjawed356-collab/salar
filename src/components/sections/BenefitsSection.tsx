'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'
import {
  Dumbbell, Brain, Battery, Sprout,
  CheckCircle2, TrendingUp, Shield, Activity,
} from 'lucide-react'

const benefits = [
  {
    icon: Dumbbell,
    title: 'Muscle Strength',
    desc: '32–36g complete protein per 100g with 2.5–3g leucine — above the threshold that triggers muscle protein synthesis.',
    stat: '32–36g',
    statLabel: 'Protein / 100g',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Battery,
    title: 'Sustained Energy',
    desc: 'Slow-release carbs from quinoa and lotus seeds fuel your day evenly — no spike, no crash, no afternoon slump.',
    stat: '420',
    statLabel: 'kcal / 100g',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Brain,
    title: 'Mental Clarity',
    desc: 'Hemp and flaxseeds provide Omega-3 ALA — linked to improved concentration, reduced brain fog, and mood balance.',
    stat: '1.2g',
    statLabel: 'Omega-3 ALA',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Sprout,
    title: 'Zero Bloating',
    desc: 'Fennel powder and ginger eliminate digestive discomfort. Legumes are pre-soaked to neutralise antinutrients.',
    stat: '7–9g',
    statLabel: 'Fibre / 100g',
    color: 'from-lime-500 to-green-600',
  },
]

const bodyStats = [
  { icon: TrendingUp, label: 'Leucine per serving', value: '2.5–3g', note: 'Above MPS threshold', color: 'text-green-400' },
  { icon: Shield,     label: 'Magnesium (RDA)',     value: '56%',    note: '236mg per 100g',      color: 'text-emerald-400' },
  { icon: Activity,   label: 'Iron (male RDA)',      value: '100%',   note: '8mg per 100g',        color: 'text-teal-400' },
  { icon: Dumbbell,   label: 'Protein quality',      value: 'PDCAAS', note: 'Complete amino profile', color: 'text-lime-400' },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="benefits" className="relative py-20 md:py-28 bg-[#050f09] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-green-500/30 bg-green-500/10 px-4 py-1.5 rounded-full">
            What It Does For Your Body
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Natural Protein.
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Real Body Benefits.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Every ingredient in VitaRoot was chosen for a specific role in your body —
            muscle repair, energy, recovery, and digestion. Science-backed, plant-powered.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-5 gap-5 md:gap-8 items-stretch">

          {/* ── Left card: Protein powder visual + body stat grid ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="w-full h-full min-h-[500px] relative overflow-hidden border-green-900/40 bg-[#060e09] flex flex-col">
              <Spotlight className="z-10" size={400} fill="rgba(52,183,100,0.12)" />

              {/* ── Protein powder hero image ── */}
              <div className="relative h-60 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1622484211148-9b5f2a509c8b?w=800&h=400&fit=crop&crop=center"
                  alt="VitaRoot natural protein powder"
                  className="w-full h-full object-cover"
                />
                {/* Brand-green overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#071a09]/60 via-transparent to-[#050f09]/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e09] via-transparent to-transparent" />

                {/* Text over image */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-black text-2xl leading-tight">Pure. Green.<br />Powerful.</p>
                    <p className="text-green-400 text-sm mt-1 font-medium">14 ingredients. One purpose: your body.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-black text-3xl">32–36g</p>
                    <p className="text-neutral-400 text-xs">protein per 100g</p>
                  </div>
                </div>
              </div>

              {/* ── Body stats grid ── */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {bodyStats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="p-4 rounded-2xl bg-[#0a140a] border border-green-900/30 hover:border-green-700/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <s.icon className={`w-4 h-4 ${s.color} shrink-0`} />
                        <p className="text-neutral-500 text-xs">{s.label}</p>
                      </div>
                      <p className={`font-black text-xl ${s.color}`}>{s.value}</p>
                      <p className="text-neutral-600 text-xs mt-0.5">{s.note}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Processing method row */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Pre-Soaked',         detail: 'removes antinutrients' },
                    { label: 'Dry Roasted',         detail: 'max digestibility' },
                    { label: 'Cold Ground',         detail: 'preserves nutrients' },
                    { label: 'No Artificial Add.', detail: 'clean label' },
                  ].map(pt => (
                    <div key={pt.label} className="flex items-center gap-1.5 bg-green-900/15 border border-green-800/30 rounded-full px-3 py-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      <span className="text-green-300 text-xs font-medium">{pt.label}</span>
                      <span className="text-neutral-600 text-[10px] hidden sm:inline">· {pt.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* ── Right: 4 benefit cards + comparison ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                className="group p-5 rounded-2xl bg-[#080f08] border border-green-900/30 hover:border-green-600/40 hover:-translate-x-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold">{benefit.title}</h4>
                      <div className="text-right">
                        <p className="text-green-400 font-bold text-sm leading-none">{benefit.stat}</p>
                        <p className="text-neutral-600 text-[10px]">{benefit.statLabel}</p>
                      </div>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* VitaRoot vs imported */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-green-900/25 to-emerald-900/10 border border-green-700/30"
            >
              <p className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                VitaRoot vs Imported Protein
              </p>
              <div className="space-y-2.5">
                {[
                  { label: 'Protein / 100g', ours: '32–36g ✓', theirs: '22–25g' },
                  { label: 'Price / kg',     ours: 'PKR 5,999 ✓', theirs: 'PKR 8,500–14,000' },
                  { label: 'Ingredients',    ours: '14 whole foods ✓', theirs: '3–5 isolates' },
                  { label: 'Made in',        ours: 'Karachi, PK ✓', theirs: 'UK / USA (import)' },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between text-xs gap-2">
                    <span className="text-neutral-500 w-20 shrink-0">{row.label}</span>
                    <span className="text-green-400 font-semibold">{row.ours}</span>
                    <span className="text-neutral-700 line-through text-[11px]">{row.theirs}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
