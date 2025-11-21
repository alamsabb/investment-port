import { IntroShowcase } from "@/components/intro-showcase";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { FeaturedProperties } from "@/components/properties";
import { MarketInsights } from "@/components/market-insights";
import { Testimonials } from "@/components/testimonials";
import { VirtualGallery } from "@/components/virtual-gallery";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="relative bg-night text-white">
      <Navbar />
      <main className="relative z-10 space-y-2">
        <IntroShowcase />
        <Hero />
        <About />
        <Services />
        <FeaturedProperties />
        <MarketInsights />
        <Testimonials />
        <VirtualGallery />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
