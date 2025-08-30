import LuxuryNavbar from "@/components/furniture/LuxuryNavbar";
import LuxuryHero from "@/components/furniture/LuxuryHero";
import FeaturedCollections from "@/components/furniture/FeaturedCollections";
import LuxuryShowcase from "@/components/furniture/LuxuryShowcase";
import CraftsmanshipSection from "@/components/furniture/CraftsmanshipSection";
import ProductCategories from "@/components/furniture/ProductCategories";
import TestimonialsSection from "@/components/furniture/TestimonialsSection";
import InteriorInspiration from "@/components/furniture/InteriorInspiration";
import ContactSection from "@/components/furniture/ContactSection";
import LuxuryFooter from "@/components/furniture/LuxuryFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <LuxuryNavbar />
      <LuxuryHero />
      <FeaturedCollections />
      <LuxuryShowcase />
      <CraftsmanshipSection />
      <ProductCategories />
      <TestimonialsSection />
      <InteriorInspiration />
      <ContactSection />
      <LuxuryFooter />
    </div>
  );
}
