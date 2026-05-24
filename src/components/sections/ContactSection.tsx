'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Mail, Phone, MapPin, Clock, ChevronDown,
  CheckCircle2, ShieldCheck, Truck, MessageSquare
} from 'lucide-react'

// WhatsApp SVG
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const faqs = [
  { q: 'How long does delivery take?', a: '1–2 days within Karachi. 3–5 days for Lahore, Islamabad & other cities via TCS/Leopards. Order tracking link sent via WhatsApp after dispatch.' },
  { q: 'Do you offer Cash on Delivery (COD)?', a: 'Yes — COD is available across Pakistan for all orders. No card needed. Pay when you receive.' },
  { q: 'Is VitaRoot Halal?', a: '100% plant-based with no animal-derived ingredients. SANHA Halal certification in process. No gelatin, no collagen, no whey.' },
  { q: "What's the protein per serving?", a: '32–36g of complete plant protein per 100g serving — significantly higher than most imported whey proteins (typically 22–25g per 100g).' },
  { q: 'How should I store it?', a: 'Cool, dry place in a sealed container. The resealable zipper pouch keeps it fresh. Refrigeration extends shelf life to 12 months.' },
  { q: 'Can I return it if I don\'t like it?', a: '7-day money-back guarantee on unopened pouches — no questions asked. WhatsApp us to initiate a return.' },
  { q: 'Do you ship internationally?', a: 'Currently shipping to UAE, Saudi Arabia, and the UK via wholesale partners. Contact salarjawed356@gmail.com for bulk/international orders.' },
  { q: 'Is there a subscription discount?', a: 'Yes — subscribe monthly and save 15%. Cancel anytime. WhatsApp us to set up a recurring order.' },
]

const inquiryTypes = [
  'General question',
  'Product information',
  'Order issue / tracking',
  'Return or refund',
  'Wholesale / bulk order',
  'Become a reseller',
  'Media / press inquiry',
  'Partnership proposal',
  'Feedback / suggestion',
  'Other',
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState({ name: '', email: '', phone: '+92', type: '', message: '', sent: false })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState(s => ({ ...s, sent: true }))
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#050f09] overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-green-500/30 bg-green-500/10 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Questions? We&apos;re
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Here to Help</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Whether you have questions about ingredients, need help choosing a pack size, or want to discuss wholesale orders — our team in Karachi responds within 4 hours on business days.
          </p>
        </motion.div>

        {/* Trust response badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {[
            { icon: Clock, text: 'Reply within 4 hours', sub: '6 days a week' },
            { icon: ShieldCheck, text: '7-day money-back', sub: 'Hassle-free returns' },
            { icon: Truck, text: 'COD available', sub: 'Pay on delivery' },
            { icon: CheckCircle2, text: 'SANHA Halal', sub: '100% plant-based' },
          ].map(({ icon: Icon, text, sub }) => (
            <div key={text} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0a140a] border border-green-900/30">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{text}</p>
                <p className="text-neutral-500 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left: Contact info + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp CTA — #1 priority for Pakistan */}
            <a
              href="https://wa.me/923000322036"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0d2010] border border-green-700/50 hover:border-green-500/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-900/40 group-hover:scale-110 transition-transform">
                <WhatsAppIcon />
              </div>
              <div>
                <p className="text-white font-bold">WhatsApp Us — Fastest Response</p>
                <p className="text-neutral-400 text-sm">+92 300-0322036 · +92 314-11000128</p>
                <p className="text-green-400 text-xs mt-1">Tap to open chat →</p>
              </div>
            </a>

            {/* Contact cards */}
            {[
              { icon: Phone, label: 'Customer Support', value: '+92 300-0322036 · +92 314-11000128', sub: 'Mon–Sat, 10 AM – 7 PM PKT', href: 'tel:+923000322036' },
              { icon: Mail, label: 'Email', value: 'salarjawed356@gmail.com', sub: 'For orders & inquiries', href: 'mailto:salarjawed356@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Karachi, Sindh, Pakistan', sub: 'Manufacturing: Naushahro Firoz · Shipping nationwide', href: '#' },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <a key={label} href={href} className="group flex items-start gap-4 p-4 rounded-xl bg-[#0a140a] border border-green-900/25 hover:border-green-700/40 transition-all duration-200">
                <div className="w-9 h-9 rounded-lg bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{sub}</p>
                </div>
              </a>
            ))}

            {/* Business hours */}
            <div className="p-4 rounded-xl bg-[#0a140a] border border-green-900/25">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-green-400" />
                <p className="text-white font-semibold text-sm">Business Hours (PKT)</p>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between"><span className="text-neutral-400">Mon – Sat</span><span className="text-white">10:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between"><span className="text-neutral-400">Sunday</span><span className="text-neutral-500">Closed</span></div>
                <div className="flex justify-between"><span className="text-neutral-400">WhatsApp</span><span className="text-green-400">Until 10:00 PM</span></div>
              </div>
            </div>

            {/* Wholesale panel */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-800/30">
              <p className="text-white font-bold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-green-400" />
                Wholesale & Bulk Orders
              </p>
              <div className="text-neutral-400 text-sm space-y-1.5">
                <p>Minimum order: <span className="text-white">50 kg</span></p>
                <p>Trade pricing for gyms, health stores, hotels & distributors</p>
                <p>International: UAE, Saudi Arabia, UK available</p>
              </div>
              <a href="mailto:salarjawed356@gmail.com" className="mt-3 inline-block text-green-400 text-sm font-semibold hover:text-green-300 transition-colors">
                salarjawed356@gmail.com →
              </a>
            </div>
          </motion.div>

          {/* Right: FAQ + Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* FAQ accordion */}
            <div>
              <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-green-400 to-emerald-600 inline-block" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl bg-[#0a140a] border border-green-900/25 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-green-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="px-4 pb-4 text-neutral-400 text-sm leading-relaxed border-t border-green-900/20 pt-3">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-green-400 to-emerald-600 inline-block" />
                Send Us a Message
              </h3>

              {formState.sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-green-900/20 border border-green-700/40 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                  <p className="text-neutral-400 text-sm">
                    Thanks — your message reached us. We&apos;ll reply to <span className="text-white">{formState.email}</span> within 4 working hours.
                    For urgent matters, WhatsApp us on <span className="text-green-400">+92 300-0322036</span> or <span className="text-green-400">+92 314-11000128</span>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-neutral-500 text-xs uppercase tracking-wider mb-1.5 block">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full bg-[#0a140a] border border-green-900/30 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-green-600/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-500 text-xs uppercase tracking-wider mb-1.5 block">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                        placeholder="you@email.com"
                        className="w-full bg-[#0a140a] border border-green-900/30 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-green-600/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-neutral-500 text-xs uppercase tracking-wider mb-1.5 block">Phone (optional)</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={e => setFormState(s => ({ ...s, phone: e.target.value }))}
                        placeholder="+92-300-0000000"
                        className="w-full bg-[#0a140a] border border-green-900/30 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-green-600/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-500 text-xs uppercase tracking-wider mb-1.5 block">Inquiry Type *</label>
                      <select
                        required
                        value={formState.type}
                        onChange={e => setFormState(s => ({ ...s, type: e.target.value }))}
                        className="w-full bg-[#0a140a] border border-green-900/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-600/60 transition-colors"
                      >
                        <option value="" className="bg-[#0a140a]">Select a topic</option>
                        {inquiryTypes.map(t => <option key={t} value={t} className="bg-[#0a140a]">{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-neutral-500 text-xs uppercase tracking-wider mb-1.5 block">Message *</label>
                    <textarea
                      required
                      minLength={20}
                      rows={4}
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-[#0a140a] border border-green-900/30 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-green-600/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-900/40 hover:scale-[1.02]"
                  >
                    Send Message
                    <Mail className="w-4 h-4" />
                  </button>
                  <p className="text-neutral-600 text-xs text-center">We reply within 4 working hours · Your data is never shared</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
