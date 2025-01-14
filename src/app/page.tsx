import HeroSection from "@/components/hero-section";
import PopularDestinations from "@/components/popular-destination";
import SearchSection from "@/components/search-section";
import TestimonialsSection from "@/components/testimonials";
import NewsletterSection from "@/components/newsletter";
import TourSection from "@/components/tour-section";
import UpTop from "@/components/up-top";

export default function Home() {
  return (
    <div className="min-h-screen px-4">
      <UpTop />
      <SearchSection />
      <HeroSection />
      <TourSection />
      <PopularDestinations />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
