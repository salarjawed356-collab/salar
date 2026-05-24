import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IngredientsSection from "@/components/sections/IngredientsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050f09] text-white overflow-x-hidden">
      {/* Hidden form — Netlify detects this at build time for form submissions */}
      <form name="zorx-order" data-netlify="true" hidden>
        <input name="name" />
        <input name="phone" />
        <input name="city" />
        <input name="address" />
        <input name="payment" />
        <input name="items" />
        <input name="total" />
      </form>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <IngredientsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
