import Navbar from "@/components/luxury/Navbar";
import Hero from "@/components/luxury/Hero";
import FeaturedDestinations from "@/components/luxury/FeaturedDestinations";
import LuxuryExperiences from "@/components/luxury/LuxuryExperiences";
import Testimonials from "@/components/luxury/Testimonials";
import Footer from "@/components/luxury/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <LuxuryExperiences />
      <Testimonials />
      <Footer />
    </div>
  );
}
