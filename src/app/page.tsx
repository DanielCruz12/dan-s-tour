import HeroSection from "@/components/hero-section";
import PopularDestinations from "@/components/popular-destination";
import SearchSection from "@/components/search-section";
import TestimonialsSection from "@/components/testimonials";
import TourSection from "@/components/tour-section";
import UpTop from "@/components/up-top";
import RecentPosts from "./blog/page";

export default function Home() {
  return (
    <div className=" px-4">
      <UpTop />
      <SearchSection />
      <HeroSection />
      <TourSection />
      <PopularDestinations />
      <TestimonialsSection />
      <RecentPosts />
      {/* <NewsletterSection /> */}
    </div>
  );
}
