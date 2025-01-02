"use client";
import { HeroSection } from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter";
import PopularDestinations from "@/components/popular-destination";
import { SearchSection } from "@/components/search-section";
import TestimonialsSection from "@/components/testimonials";
import { TourCard } from "@/components/tour-card";
import { useFiltersStore } from "@/stores/useFilterStorage";
import tours from "@/utils/data";
import { prices, ratings, durations } from "@/utils/filters";

export default function Home() {
  const { filters } = useFiltersStore();
  const filteredTours = tours.filter((tour) => {
    // Filter by Category
    if (filters.category && tour.category !== filters.category) {
      return false;
    }

    // Filter by Duration
    if (filters.duration) {
      const selectedDuration = durations.find(
        (d) => d.value === String(filters.duration)
      );
      if (selectedDuration) {
        const [min, max] = selectedDuration.value.split("-").map(Number);
        if (
          tour.duration !== null &&
          (tour.duration < min || (max && tour.duration > max))
        ) {
          return false;
        }
      }
    }

    // Filter by Rating
    if (filters.rating) {
      const selectedRating = ratings.find(
        (r) => r.value === String(filters.rating)
      );
      if (selectedRating) {
        const ratingValue = Number(selectedRating.value); // Convert to number
        if (tour.rating !== null && tour.rating < ratingValue) {
          return false;
        }
      }
    }

    // Filter by Price
    if (filters.price) {
      const selectedPrice = prices.find((p) => p.value === filters.price);
      if (selectedPrice) {
        if (
          selectedPrice.value === "budget" &&
          tour.price !== null &&
          tour.price > 20
        ) {
          return false;
        }
        if (
          selectedPrice.value === "mid" &&
          tour.price !== null &&
          (tour.price < 20 || tour.price > 50)
        ) {
          return false;
        }
        if (
          selectedPrice.value === "luxury" &&
          tour.price !== null &&
          tour.price < 50
        ) {
          return false;
        }
      }
    }

    return true;
  });

  console.log(filteredTours);
  return (
    <div className="min-h-screen bg-background">
      <SearchSection />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
      <PopularDestinations />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
