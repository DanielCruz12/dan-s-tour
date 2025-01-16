"use client";

import { useRef } from "react";
import { TourCard } from "@/components/tour-card";
import { useFiltersStore } from "@/stores/useFilterStorage";
import tours from "@/utils/data";
import Autoplay from "embla-carousel-autoplay";
import { prices, ratings, durations } from "@/utils/filters";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NoSearchResults } from "@/components/not-results-found";
export default function TourSection() {
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

  const plugin = useRef(Autoplay({ delay: 2200, stopOnInteraction: true }));

  return (
    <section>
      {filteredTours.length > 0 ? (
        <div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {filteredTours.map((tour, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 p-4"
                >
                  <div className="p-1">
                    <TourCard {...tour} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      ) : (
        <NoSearchResults />
      )}
    </section>
  );
}
