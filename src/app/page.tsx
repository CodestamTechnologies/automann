import Navbar from "@/components/clothing/Navbar";
import Hero from "@/components/clothing/Hero";
import Categories from "@/components/clothing/Categories";
import FeaturedProducts from "@/components/clothing/FeaturedProducts";
import Testimonials from "@/components/clothing/Testimonials";
import Newsletter from "@/components/clothing/Newsletter";
import Footer from "@/components/clothing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
