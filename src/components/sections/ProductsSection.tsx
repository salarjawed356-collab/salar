'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShoppingCart, Star, ChevronRight, BadgeCheck, Zap } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'ZORX 250g',
    subtitle: 'Trial Pack — Perfect First Try',
    sku: 'TPP-250',
    price: 'PKR 1,899',
    priceNum: 1899,
    servings: '5 servings',
    weight: '250g',
    img: '/zorx-product.webp',
    rating: 4.9,
    reviews: 234,
    badge: 'Try First',
    badgeColor: 'bg-emerald-600',
    tags: ['Low Risk', 'Try & Test', '5 Servings'],
    macros: { protein: '32–36g', carbs: '35g', fat: '12–14g', calories: '420 kcal' },
    desc: 'Not ready to commit to a full bag? Start with our 250g trial pack — same complete 14-ingredient formula, 5 full servings to test the taste, mixability, and how your body responds.',
    perServing: 'PKR 380/serving',
    gradient: 'from-teal-900/50 to-emerald-900/25',
    border: 'border-teal-700/40',
    glow: 'shadow-teal-900/30',
    highlight: false,
  },
  {
    id: 2,
    name: 'ZORX 500g',
    subtitle: 'Standard Pack — Most Popular',
    sku: 'TPP-500',
    price: 'PKR 3,299',
    priceNum: 3299,
    servings: '10 servings',
    weight: '500g',
    img: '/zorx-product.webp',
    rating: 4.9,
    reviews: 412,
    badge: 'Most Popular',
    badgeColor: 'bg-green-500',
    tags: ['10 Servings', 'Best Value', 'Regular Use'],
    macros: { protein: '32–36g', carbs: '35g', fat: '12–14g', calories: '420 kcal' },
    desc: 'The go-to choice for students and working professionals. One month of daily support at the most popular pack size. Resealable matte zipper pouch keeps it fresh for months.',
    perServing: 'PKR 330/serving',
    gradient: 'from-green-900/60 to-emerald-900/30',
    border: 'border-green-600/50',
    glow: 'shadow-green-900/50',
    highlight: true,
  },
  {
    id: 3,
    name: 'ZORX 1 kg',
    subtitle: 'Value Pack — Maximum Savings',
    sku: 'TPP-1000',
    price: 'PKR 5,999',
    priceNum: 5999,
    servings: '20 servings',
    weight: '1 kg',
    img: '/zorxfitness.webp',
    rating: 4.8,
    reviews: 189,
    badge: 'Best Value',
    badgeColor: 'bg-amber-500',
    tags: ['20 Servings', 'Bulk Save', '2 Months'],
    macros: { protein: '32–36g', carbs: '35g', fat: '12–14g', calories: '420 kcal' },
    desc: 'Imported plant proteins cost PKR 8,500–14,000 per kg. ZORX delivers equal or better protein (32–36g vs the imported average of 22–25g) for PKR 5,999. The smart choice for serious users.',
    perServing: 'PKR 300/serving',
    gradient: 'from-amber-900/40 to-yellow-900/20',
    border: 'border-amber-700/30',
    glow: 'shadow-amber-900/30',
    highlight: false,
  },
]

const trustBadges = [
  { icon: BadgeCheck, text: 'SANHA Halal Certified' },
  { icon: BadgeCheck, text: 'PSQCA Lab Tested' },
  { icon: Zap, text: '32–36g Protein per 100g' },
  { icon: BadgeCheck, text: '7-Day Money Back' },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="relative py-20 md:py-28 bg-[#050f09] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-56 h-56 bg-emerald-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-green-500/30 bg-green-500/10 px-4 py-1.5 rounded-full">
            Shop ZORX
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Pack Size</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-6">
            Same complete 14-ingredient formula in every size. Imported plant protein costs PKR 8,500–14,000/kg. ZORX: <span className="text-green-400 font-semibold">PKR 5,999/kg.</span>
          </p>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-neutral-400 bg-neutral-900/50 border border-neutral-800 rounded-full px-3 py-1.5">
                <Icon className="w-3.5 h-3.5 text-green-500" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Price comparison banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 p-4 rounded-2xl bg-green-900/15 border border-green-800/30 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
        >
          <div className="text-sm text-neutral-400">
            <span className="text-red-400 line-through mr-2">Imported vegan protein: PKR 8,500–14,000/kg</span>
            <span className="text-green-400 font-bold">→ ZORX: PKR 5,999/kg</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-neutral-700" />
          <div className="text-sm text-neutral-400">
            <span className="text-white font-semibold">32–36g protein per 100g</span>
            <span className="text-neutral-500 ml-2">vs imported average of 22–25g</span>
          </div>
        </motion.div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className={`group relative rounded-3xl border ${product.border} bg-gradient-to-br ${product.gradient} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl ${product.glow} cursor-pointer ${product.highlight ? 'ring-1 ring-green-500/40' : ''}`}
            >
              {/* Popular indicator */}
              {product.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400" />
              )}

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.badge}
                </span>
              </div>

              {/* Per serving pill */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-black/60 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-800/40">
                  {product.perServing}
                </span>
              </div>

              {/* Product image */}
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredId === product.id ? 1.07 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-bold text-xl">{product.name}</h3>
                    <p className="text-neutral-400 text-sm">{product.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-black/30 rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-bold">{product.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-xs text-neutral-400 border border-neutral-700 rounded-full px-2.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{product.desc}</p>

                {/* Macros per 100g */}
                <div className="mb-2">
                  <p className="text-neutral-600 text-xs mb-2 uppercase tracking-wider">Per 100g Serving</p>
                  <div className="grid grid-cols-4 gap-2 p-3 rounded-xl bg-black/20 border border-white/5">
                    {Object.entries(product.macros).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <p className="text-green-400 font-bold text-xs leading-tight">{val}</p>
                        <p className="text-neutral-600 text-[10px] capitalize mt-0.5">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-white font-bold text-2xl">{product.price}</p>
                    <p className="text-neutral-500 text-xs">{product.weight} · {product.servings} · SKU: {product.sku}</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-900/40 hover:scale-105">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle deal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-700/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">SAVE PKR 999</span>
              <span className="text-neutral-400 text-xs">SKU: TPP-BUNDLE2</span>
            </div>
            <p className="text-white font-bold text-lg">2× 1kg Bundle — PKR 10,999 <span className="text-neutral-500 line-through text-sm ml-1">PKR 11,998</span></p>
            <p className="text-neutral-400 text-sm">40 servings · 2 months supply · Free shipping on bundles</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold whitespace-nowrap hover:from-amber-400 hover:to-orange-400 transition-all hover:scale-105 shadow-lg">
            Get the Bundle
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500"
        >
          {['💵 Cash on Delivery', '📱 JazzCash', '💳 EasyPaisa', '🏦 Bank Transfer', '💳 Credit / Debit Card'].map(m => (
            <span key={m} className="bg-neutral-900/40 border border-neutral-800 rounded-full px-3 py-1">{m}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
