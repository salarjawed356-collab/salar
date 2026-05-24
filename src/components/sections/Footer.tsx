'use client'

import { Leaf, Mail, MapPin, Phone } from 'lucide-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// Social icons as inline SVGs (lucide-react v1 removed brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const footerLinks = {
  Products: ['Original Blend', 'Vanilla Blend', 'Cacao Blend', 'Starter Bundle', 'Subscribe & Save'],
  Company: ['About VitaRoot', 'Our Mission', 'Sustainability', 'Careers', 'Press Kit'],
  Support: ['FAQ', 'Shipping & Returns', 'Track Your Order', 'Contact Us', 'Nutrition Guide'],
  Wellness: ['Blog', 'Recipes', 'Fitness Tips', 'Community', 'Ambassador Program'],
}

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: TwitterIcon, label: 'Twitter / X', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#040c06] border-t border-green-900/30">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-10 pb-12 border-b border-green-900/20">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Vita<span className="text-green-400">Root</span>
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Plant-based protein powder crafted for wellness-first living. Honest ingredients, real nourishment.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-green-900/20 border border-green-900/30 flex items-center justify-center text-neutral-500 hover:text-green-400 hover:border-green-600/50 transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-neutral-500 text-sm hover:text-green-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="py-8 border-b border-green-900/20 grid sm:grid-cols-3 gap-5">
          {[
            { icon: Mail, text: 'salarjawed356@gmail.com' },
            { icon: Phone, text: '+92 300-0322036 · +92 314-11000128' },
            { icon: MapPin, text: 'Karachi, Sindh · Ships across Pakistan' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-neutral-500 text-sm">
              <div className="w-8 h-8 rounded-lg bg-green-900/20 border border-green-900/30 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-green-600" />
              </div>
              {text}
            </div>
          ))}
        </div>

        {/* Payment & trust row */}
        <div className="py-6 border-b border-green-900/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-neutral-600 text-xs mr-1 self-center">Accepted payments:</span>
            {['💵 COD', '📱 JazzCash', '💳 EasyPaisa', '🏦 Bank Transfer', '💳 Card'].map(p => (
              <span key={p} className="text-xs text-neutral-500 border border-neutral-800 rounded-full px-2.5 py-0.5">{p}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['SANHA Halal Certified', 'PSQCA Lab Tested', '7-Day Money Back', 'COD Available'].map(b => (
              <span key={b} className="text-xs text-green-600 border border-green-900/40 rounded-full px-2.5 py-0.5">{b}</span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600 text-xs">
          <div>
            <p>© 2026 VitaRoot — Rooted in Health, Powered for Life.</p>
            <p className="mt-1 text-neutral-700">SANHA Halal Certified · PSQCA Tested · Karachi, Pakistan · <a href="https://www.vitalslife.com" className="text-green-700 hover:text-green-500 transition-colors">www.vitalslife.com</a></p>
          </div>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Refund Policy'].map(item => (
              <a key={item} href="#" className="hover:text-neutral-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
