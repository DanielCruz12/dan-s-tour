import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PopularDestinations } from "@/components/popular-destination";
import { SearchSection } from "@/components/search-section";
import { Testimonials } from "@/components/testimonials";
import { TourCard } from "@/components/tour-card";

const tours = [
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "California Sunset/Twilight Boat Cruise",
    rating: 5.0,
    reviews: 672,
    duration: "7 days 6 nights",
    groupSize: "Small group",
    price: 35.62,
    exceptional: true,
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "NYC: Food Tastings and Culture Tour",
    rating: 4.96,
    reviews: 672,
    duration: "3 days 3 nights",
    groupSize: "Company",
    price: 17.32,
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Grand Canyon Horseshoe Bend 2 days",
    rating: 4.95,
    reviews: 672,
    duration: "7 days 6 nights",
    groupSize: "Small group",
    price: 15.63,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
      <PopularDestinations />
      <Testimonials />
    </div>
  );
}
