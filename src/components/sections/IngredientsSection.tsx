'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, AlertCircle, Minus, FlaskConical } from 'lucide-react'

const ingredients = [
  { name: 'Pea Protein Isolate', pct: '23.7%', role: 'Primary protein, high leucine', benefit: 'Complete EAAs — triggers muscle growth', color: 'bg-green-500' },
  { name: 'Soya Chunks (TVP)', pct: '18.9%', role: 'Complete amino profile', benefit: 'Cost-efficient protein density', color: 'bg-emerald-500' },
  { name: 'Quinoa (raw grains)', pct: '11.8%', role: 'Lysine + complex carbs', benefit: 'Complete protein, iron & folate', color: 'bg-teal-500' },
  { name: 'Lotus Seeds (Makhana)', pct: '9.5%', role: 'Low-fat carbs', benefit: 'Easy digestion, gut-friendly', color: 'bg-lime-600' },
  { name: 'Soybeans (raw)', pct: '7.1%', role: 'Protein density, isoflavones', benefit: 'Hormonal balance, rich protein', color: 'bg-green-600' },
  { name: 'Pumpkin Seeds', pct: '7.1%', role: 'Magnesium, zinc, healthy fats', benefit: 'Sleep quality & immune support', color: 'bg-amber-600' },
  { name: 'Hemp Seeds', pct: '5.9%', role: 'Omega-3, complete protein', benefit: 'Brain health & inflammation', color: 'bg-emerald-600' },
  { name: 'Amla Powder', pct: '4.1%', role: 'Vitamin C, 20× lemon', benefit: 'Boosts mineral absorption', color: 'bg-orange-500' },
  { name: 'Sesame Seeds', pct: '4.1%', role: 'Calcium + lignans', benefit: 'Bone density support', color: 'bg-yellow-600' },
  { name: 'Sunflower Seeds', pct: '3.6%', role: 'Vitamin E, selenium', benefit: 'Antioxidant & skin health', color: 'bg-yellow-500' },
  { name: 'Flaxseed', pct: '2.4%', role: 'Omega-3 ALA + fibre', benefit: 'Gut health, hormonal balance', color: 'bg-teal-600' },
  { name: 'Ginger Powder', pct: '0.7%', role: 'Anti-inflammatory', benefit: 'Reduces DOMS, aids recovery', color: 'bg-orange-600' },
  { name: 'Fennel Powder', pct: '0.7%', role: 'Anti-bloating digestive', benefit: 'Zero gas, smooth digestion', color: 'bg-green-400' },
  { name: 'Black Pepper (Piperine)', pct: '0.4%', role: 'Bioavailability booster', benefit: 'Increases nutrient absorption 20%', color: 'bg-neutral-500' },
]

const nutritionTable = [
  { nutrient: 'Protein', value: '32–36g', daily: '65%', status: 'great', note: 'Higher than most whey (typically 24g)' },
  { nutrient: 'Leucine', value: '2.5–3.0g', daily: '100%+', status: 'great', note: 'Above muscle protein synthesis threshold' },
  { nutrient: 'Calories', value: '~420 kcal', daily: '21%', status: 'good', note: 'Energy-dense for muscle gain' },
  { nutrient: 'Carbohydrates', value: '~35g', daily: '13%', status: 'good', note: 'Slow-release from quinoa & lotus' },
  { nutrient: 'Fat', value: '12–14g', daily: '18%', status: 'good', note: 'Mostly omega-3 and omega-6' },
  { nutrient: 'Fibre', value: '7–9g', daily: '30%', status: 'great', note: 'Gut health & satiety' },
  { nutrient: 'Magnesium', value: '236mg', daily: '56%', status: 'great', note: 'Strong recovery support' },
  { nutrient: 'Iron', value: '8mg', daily: '100%', status: 'great', note: 'Full male RDA per serving' },
  { nutrient: 'Omega-3 (ALA)', value: '1.2g', daily: '75%', status: 'great', note: 'From hemp, flax, and pumpkin' },
  { nutrient: 'Zinc', value: '4mg', daily: '36%', status: 'good', note: 'Immune function & testosterone' },
  { nutrient: 'Vitamin E', value: '5.7mg', daily: '38%', status: 'moderate', note: 'From sunflower seeds' },
  { nutrient: 'Vitamin D', value: '0', daily: '0%', status: 'missing', note: 'Pair with sunlight or supplement' },
  { nutrient: 'Vitamin B12', value: '0', daily: '0%', status: 'missing', note: 'Supplement separately if vegan' },
]

const statusConfig = {
  great: { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/10', bar: 'bg-green-500', label: 'Strong' },
  good: { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', bar: 'bg-emerald-500', label: 'Good' },
  moderate: { icon: Minus, color: 'text-yellow-400', bg: 'bg-yellow-500/10', bar: 'bg-yellow-500', label: 'Moderate' },
  missing: { icon: AlertCircle, color: 'text-neutral-600', bg: 'bg-neutral-800/30', bar: 'bg-neutral-700', label: 'Supplement' },
}

export default function IngredientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ingredients" className="relative py-20 md:py-28 bg-[#060e09] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-green-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-green-500/30 bg-green-500/10 px-4 py-1.5 rounded-full">
            14-Ingredient Formula
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Every Ingredient.
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Every Reason.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We don&apos;t add anything without a reason. Each of the 14 ingredients was chosen for its
            specific role — protein density, amino completeness, digestion, absorption, or recovery.
            Every batch is soaked, roasted, and tested for proximate analysis.
          </p>
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { num: '32–36g', label: 'Protein per 100g', sub: 'vs 22–25g imported avg' },
            { num: '2.5–3g', label: 'Leucine per serving', sub: 'Above MPS threshold' },
            { num: '14', label: 'Plant ingredients', sub: 'Pre-soaked & roasted' },
            { num: '420', label: 'kcal per 100g', sub: 'Energy-dense for muscle' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.07 }}
              className="p-5 rounded-2xl bg-[#0a140a] border border-green-900/40 text-center"
            >
              <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{s.num}</p>
              <p className="text-white text-sm font-semibold mt-1">{s.label}</p>
              <p className="text-neutral-600 text-xs mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: All 14 ingredients */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-gradient-to-b from-green-400 to-emerald-600 inline-block" />
              Complete 14-Ingredient Stack
              <span className="ml-auto text-xs text-neutral-500 font-normal">% of batch</span>
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#0a140a] border border-green-900/25 hover:border-green-700/40 transition-all duration-200"
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${ing.color} shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium text-sm truncate">{ing.name}</p>
                      <span className="text-green-500 text-xs font-semibold ml-2 shrink-0">{ing.pct}</span>
                    </div>
                    <p className="text-neutral-500 text-xs mt-0.5">{ing.role} · <span className="text-green-600">{ing.benefit}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Processing note */}
            <div className="mt-5 p-4 rounded-2xl bg-green-900/15 border border-green-800/25 flex items-start gap-3">
              <FlaskConical className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm mb-1">Lab-Tested & Process-Verified</p>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  All legumes are pre-soaked to remove antinutrients. Grains and seeds are dry-roasted for
                  digestibility. Every batch undergoes PSQCA proximate analysis for protein, fat, moisture,
                  and carbohydrate content. Certificate available on request.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Nutrition facts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-gradient-to-b from-green-400 to-emerald-600 inline-block" />
              Nutrition Facts <span className="text-neutral-500 text-sm font-normal">(per 100g serving)</span>
            </h3>

            <div className="rounded-2xl overflow-hidden border border-green-900/30 bg-[#080f08]">
              <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-green-900/20 border-b border-green-900/30">
                <span className="col-span-4 text-neutral-400 text-xs font-semibold uppercase">Nutrient</span>
                <span className="col-span-3 text-neutral-400 text-xs font-semibold uppercase">Amount</span>
                <span className="col-span-5 text-neutral-400 text-xs font-semibold uppercase">% DV / Bar</span>
              </div>

              {nutritionTable.map((row, i) => {
                const cfg = statusConfig[row.status as keyof typeof statusConfig]
                const pct = parseInt(row.daily) || 0
                return (
                  <motion.div
                    key={row.nutrient}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    className={`grid grid-cols-12 gap-2 px-4 py-2.5 items-center border-b border-green-900/10 last:border-0 group ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}
                    title={row.note}
                  >
                    <span className="col-span-4 text-neutral-300 text-sm font-medium truncate">{row.nutrient}</span>
                    <span className="col-span-3 text-neutral-400 text-xs">{row.value}</span>
                    <div className="col-span-5 flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-neutral-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${Math.min(pct, 100)}%` } : {}}
                          transition={{ delay: 0.6 + i * 0.04, duration: 0.7 }}
                          className={`h-full rounded-full ${cfg.bar}`}
                        />
                      </div>
                      <span className={`text-xs font-medium w-8 text-right shrink-0 ${cfg.color}`}>{row.daily}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-2.5">
              {Object.entries(statusConfig).map(([, cfg]) => (
                <div key={cfg.label} className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${cfg.bg}`}>
                  <cfg.icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                  <span className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
                </div>
              ))}
            </div>

            <p className="text-neutral-600 text-xs mt-3 leading-relaxed">
              * Based on PSQCA proximate analysis. DV = Daily Value based on 2000 kcal diet.
              Hover rows for notes. VitaRoot is best used as part of a complete diet.
              Supplement Vitamin D and B12 separately.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
