import { HeroSection } from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter";
import PopularDestinations from "@/components/popular-destination";
import { SearchSection } from "@/components/search-section";
import TestimonialsSection from "@/components/testimonials";
import { TourCard } from "@/components/tour-card";

const tours = [
  {
    image: "/tour.jpg",
    title: "California Sunset/Twilight Boat Cruise",
    rating: 5.0,
    reviews: 672,
    duration: "7 days 6 nights",
    groupSize: "Small group",
    price: 35.62,
    exceptional: true,
    description:
      "Experience the magic of California as you sail at sunset or under the stars. This 7-day, 6-night small-group boat cruise offers spectacular ocean views, unforgettable sunsets, and serene nature. Perfect for couples or small groups seeking an intimate and relaxing adventure.",
  },
  {
    image: "/tour1.jpg",
    title: "NYC: Food Tastings and Culture Tour",
    rating: 4.96,
    reviews: 672,
    duration: "3 days 3 nights",
    groupSize: "Company",
    price: 17.32,
    description:
      "Explore the flavors and culture of the city that never sleeps. Over 3 days and 3 nights, indulge in local cuisine, discover iconic neighborhoods, and immerse yourself in the vibrant history of New York. Perfect for food lovers and culture enthusiasts.",
  },
  {
    image: "/tour2.jpg",
    title: "Grand Canyon Horseshoe Bend 2 days",
    rating: 4.95,
    reviews: 672,
    duration: "7 days 6 nights",
    groupSize: "Small group",
    price: 15.63,
    description:
      "Discover the grandeur of the Grand Canyon and the iconic Horseshoe Bend in this unforgettable 7-day, 6-night adventure. Join a small group for a personalized experience and explore breathtaking views, natural landscapes, and perfect photo opportunities. Ideal for adventurers and nature lovers.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SearchSection />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
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
