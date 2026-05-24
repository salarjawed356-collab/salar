'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShoppingCart, Star, ChevronRight, BadgeCheck, Zap, Check, X, Plus, Minus, MessageCircle, Trash2, User, Phone, MapPin, ChevronLeft, Package } from 'lucide-react'

type CartItem = { id: number; name: string; price: number; weight: string; qty: number }
type Step = 'cart' | 'form' | 'done'
type OrderMethod = 'website' | 'whatsapp' | null
type OrderForm = { name: string; phone: string; city: string; address: string; payment: string }


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
  const [cart, setCart] = useState<CartItem[]>([])
  const [addedId, setAddedId] = useState<number | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [step, setStep] = useState<Step>('cart')
  const [form, setForm] = useState<OrderForm>({ name: '', phone: '', city: '', address: '', payment: 'COD' })
  const [errors, setErrors] = useState<Partial<OrderForm>>({})
  const [orderMethod, setOrderMethod] = useState<OrderMethod>(null)
  const [submitting, setSubmitting] = useState(false)

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { id: product.id, name: product.name, price: product.priceNum, weight: product.weight, qty: 1 }]
    })
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
    setStep('cart')
    setCartOpen(true)
  }

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
  }

  const removeItem = (id: number) => setCart(prev => prev.filter(i => i.id !== id))

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const totalQty = cart.reduce((s, i) => s + i.qty, 0)

  const validate = () => {
    const e: Partial<OrderForm> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Valid phone number required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.address.trim()) e.address = 'Delivery address is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // Submit order directly on website via Netlify Forms
  const placeWebsiteOrder = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      const body = new URLSearchParams({
        'form-name': 'zorx-order',
        name: form.name,
        phone: form.phone,
        city: form.city,
        address: form.address,
        payment: form.payment,
        items: cart.map(i => `${i.name} x${i.qty} (PKR ${(i.price * i.qty).toLocaleString()})`).join(' | '),
        total: `PKR ${total.toLocaleString()}`,
      })
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      setOrderMethod('website')
      setStep('done')
    } catch {
      alert('Something went wrong. Please try WhatsApp instead.')
    } finally {
      setSubmitting(false)
    }
  }

  // Send order via WhatsApp
  const placeWhatsAppOrder = () => {
    if (!validate()) return
    const lines = cart.map(i => `• ${i.name} x${i.qty} = PKR ${(i.price * i.qty).toLocaleString()}`).join('\n')
    const msg =
      `🌿 *New ZORX Order*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `🏙️ *City:* ${form.city}\n` +
      `📍 *Address:* ${form.address}\n` +
      `💳 *Payment:* ${form.payment}\n\n` +
      `🛒 *Order Details:*\n${lines}\n\n` +
      `💰 *Total: PKR ${total.toLocaleString()}*\n\n` +
      `Please confirm this order. Shukriya! 🙏`
    window.open(`https://wa.me/923000322036?text=${encodeURIComponent(msg)}`, '_blank')
    setOrderMethod('whatsapp')
    setStep('done')
  }

  const closeCart = () => { setCartOpen(false); setTimeout(() => { setStep('cart'); setOrderMethod(null) }, 300) }

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
                  <button
                    onClick={() => addToCart(product)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:scale-105 ${
                      addedId === product.id
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-green-900/40'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500 shadow-green-900/40'
                    }`}
                  >
                    {addedId === product.id ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                    {addedId === product.id ? 'Added!' : 'Add to Cart'}
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

      {/* Floating cart button */}
      <AnimatePresence>
        {totalQty > 0 && !cartOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
            onClick={() => setCartOpen(true)}
            className="fixed bottom-24 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-2xl shadow-green-900/60 hover:scale-105 transition-transform"
          >
            <ShoppingCart className="w-5 h-5" />
            Cart ({totalQty})
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeCart} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />

            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[#060e09] border-l border-green-900/40 z-50 flex flex-col shadow-2xl"
            >
              {/* ── STEP INDICATOR ── */}
              <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-green-900/30">
                <div className="flex items-center gap-2">
                  {step === 'form' && (
                    <button onClick={() => setStep('cart')} className="text-neutral-500 hover:text-white mr-1 transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div className="flex items-center gap-1.5">
                    {(['cart', 'form', 'done'] as Step[]).map((s, i) => (
                      <div key={s} className={`h-1.5 rounded-full transition-all ${step === s ? 'w-6 bg-green-400' : 'w-1.5 bg-neutral-700'}`} />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm ml-2">
                    {step === 'cart' ? 'Your Cart' : step === 'form' ? 'Delivery Details' : 'Order Placed!'}
                  </span>
                  {step === 'cart' && totalQty > 0 && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{totalQty}</span>
                  )}
                </div>
                <button onClick={closeCart} className="text-neutral-500 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ── STEP 1: CART ── */}
              {step === 'cart' && (
                <>
                  <div className="flex-1 overflow-y-auto p-5 space-y-3">
                    {cart.length === 0 ? (
                      <div className="text-center py-16">
                        <ShoppingCart className="w-12 h-12 text-neutral-700 mx-auto mb-3" />
                        <p className="text-neutral-500">Your cart is empty</p>
                        <p className="text-neutral-600 text-sm mt-1">Add a product to get started</p>
                      </div>
                    ) : cart.map(item => (
                      <div key={item.id} className="flex items-center gap-3 p-3 rounded-2xl bg-[#0a140a] border border-green-900/30">
                        <div className="flex-1">
                          <p className="text-white font-semibold text-sm">{item.name}</p>
                          <p className="text-green-400 text-xs">PKR {item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-full bg-green-900/40 border border-green-800/50 flex items-center justify-center text-green-400 hover:bg-green-800/50 transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white font-bold text-sm w-4 text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-full bg-green-900/40 border border-green-800/50 flex items-center justify-center text-green-400 hover:bg-green-800/50 transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-white font-bold text-sm min-w-[72px] text-right">PKR {(item.price * item.qty).toLocaleString()}</p>
                        <button onClick={() => removeItem(item.id)} className="text-neutral-700 hover:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  {cart.length > 0 && (
                    <div className="p-5 border-t border-green-900/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400">Total</span>
                        <span className="text-white font-black text-xl">PKR {total.toLocaleString()}</span>
                      </div>
                      <button onClick={() => setStep('form')}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base hover:from-green-400 hover:to-emerald-500 transition-all hover:scale-[1.02] shadow-xl shadow-green-900/40">
                        <Package className="w-5 h-5" />
                        Proceed to Order
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* ── STEP 2: DELIVERY FORM ── */}
              {step === 'form' && (
                <>
                  <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    <p className="text-neutral-400 text-sm">Fill in your details — we&apos;ll confirm your order on WhatsApp.</p>

                    {/* Order summary mini */}
                    <div className="p-3 rounded-xl bg-green-900/15 border border-green-800/30 space-y-1">
                      {cart.map(i => (
                        <div key={i.id} className="flex justify-between text-xs">
                          <span className="text-neutral-400">{i.name} x{i.qty}</span>
                          <span className="text-green-400 font-semibold">PKR {(i.price * i.qty).toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm font-bold pt-1 border-t border-green-900/30 mt-1">
                        <span className="text-white">Total</span>
                        <span className="text-green-400">PKR {total.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="text-neutral-400 text-xs font-medium mb-1.5 flex items-center gap-1.5"><User className="w-3.5 h-3.5" />Full Name *</label>
                      <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                        placeholder="e.g. Ahmed Khan"
                        className={`w-full bg-[#0a140a] border ${errors.name ? 'border-red-500/60' : 'border-green-900/40'} rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-green-500/60 transition-colors`} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-neutral-400 text-xs font-medium mb-1.5 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />Phone / WhatsApp *</label>
                      <input value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                        placeholder="e.g. 0300-1234567"
                        type="tel"
                        className={`w-full bg-[#0a140a] border ${errors.phone ? 'border-red-500/60' : 'border-green-900/40'} rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-green-500/60 transition-colors`} />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* City */}
                    <div>
                      <label className="text-neutral-400 text-xs font-medium mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />City *</label>
                      <input value={form.city} onChange={e => setForm(f => ({...f, city: e.target.value}))}
                        placeholder="e.g. Karachi, Lahore, Islamabad"
                        className={`w-full bg-[#0a140a] border ${errors.city ? 'border-red-500/60' : 'border-green-900/40'} rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-green-500/60 transition-colors`} />
                      {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                    </div>

                    {/* Address */}
                    <div>
                      <label className="text-neutral-400 text-xs font-medium mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />Full Delivery Address *</label>
                      <textarea value={form.address} onChange={e => setForm(f => ({...f, address: e.target.value}))}
                        placeholder="House/Flat no., Street, Area..."
                        rows={3}
                        className={`w-full bg-[#0a140a] border ${errors.address ? 'border-red-500/60' : 'border-green-900/40'} rounded-xl px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-green-500/60 transition-colors resize-none`} />
                      {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                    </div>

                    {/* Payment method */}
                    <div>
                      <label className="text-neutral-400 text-xs font-medium mb-2 block">Payment Method</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['COD', 'JazzCash', 'EasyPaisa'].map(pm => (
                          <button key={pm} onClick={() => setForm(f => ({...f, payment: pm}))}
                            className={`py-2 rounded-xl text-xs font-semibold border transition-all ${form.payment === pm ? 'bg-green-500/20 border-green-500/60 text-green-400' : 'bg-[#0a140a] border-green-900/30 text-neutral-500 hover:border-green-700/40'}`}>
                            {pm === 'COD' ? '💵 COD' : pm === 'JazzCash' ? '📱 JazzCash' : '💳 EasyPaisa'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border-t border-green-900/30 space-y-3">
                    {/* Option 1 — Website order */}
                    <button onClick={placeWebsiteOrder} disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm hover:from-green-400 hover:to-emerald-500 transition-all hover:scale-[1.02] shadow-xl shadow-green-900/40 disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? (
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                      ) : <Package className="w-4 h-4" />}
                      {submitting ? 'Placing Order...' : '🌐 Place Order on Website'}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-green-900/30" />
                      <span className="text-neutral-600 text-xs">or</span>
                      <div className="flex-1 h-px bg-green-900/30" />
                    </div>

                    {/* Option 2 — WhatsApp */}
                    <button onClick={placeWhatsAppOrder}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#0a140a] border border-green-700/40 text-green-400 font-bold text-sm hover:bg-green-900/25 transition-all hover:scale-[1.02]">
                      <MessageCircle className="w-4 h-4" />
                      💬 Order via WhatsApp
                    </button>
                    <p className="text-center text-neutral-600 text-xs">Both options send your order to ZORX team</p>
                  </div>
                </>
              )}

              {/* ── STEP 3: DONE ── */}
              {step === 'done' && (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-white font-black text-2xl mb-2">
                    {orderMethod === 'website' ? 'Order Placed! 🎉' : 'Order Sent! 🎉'}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                    {orderMethod === 'website'
                      ? `Your order has been received! We'll call you on ${form.phone} to confirm delivery details.`
                      : `Your order has been sent to ZORX on WhatsApp. We'll confirm and share delivery details shortly.`}
                  </p>
                  <p className="text-green-400 text-sm font-semibold mb-8">Usually confirmed within 1–2 hours ⚡</p>
                  <button onClick={() => { setCart([]); setForm({ name: '', phone: '', city: '', address: '', payment: 'COD' }); closeCart(); }}
                    className="px-8 py-3 rounded-full bg-green-500/15 border border-green-600/40 text-green-400 font-semibold text-sm hover:bg-green-500/25 transition-colors">
                    Back to Shop
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
